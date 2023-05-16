import { Box } from "@mui/material"
import { Detail } from "./Detail"
import { ExerciseVideos } from "./ExerciseVideos"
import { SimilarExercises } from "./SimilarExercises"
import { useEffect, useState } from "react"
import { exerciseOptions, fetchData, youtubeOptions } from "@/utils/fetchData"

export const ExerciseDetail = ({ id }: any) => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${id}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${id}`, exerciseOptions);
            setEquipmentExercises(equipmentExercisesData);
        }

        fetchExerciseData();
    }, [id]);

    return (
        <Box>
            <Detail 
                exerciseDetail={exerciseDetail} 
            />

            <ExerciseVideos 
                exerciseVideos={exerciseVideos} 
                name={(exerciseDetail as any).name} 
            />

            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>        
    )
}