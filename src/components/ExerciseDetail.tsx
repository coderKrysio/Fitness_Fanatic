import { Box } from "@mui/material"
import { Detail } from "./Detail"
import { ExerciseVideos } from "./ExerciseVideos"
import { SimilarExercises } from "./SimilarExercises"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { exerciseOptions, fetchData } from "@/utils/fetchData"

export const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }

        fetchExerciseData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>        
    )
}