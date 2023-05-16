import { Box } from "@mui/material"
import { Detail } from "./Detail"
import { ExerciseVideos } from "./ExerciseVideos"
import { SimilarExercises } from "./SimilarExercises"

export const ExerciseDetail = () => {
    return (
        <Box>
            <Detail />
            <ExerciseVideos />
            <SimilarExercises />
        </Box>        
    )
}