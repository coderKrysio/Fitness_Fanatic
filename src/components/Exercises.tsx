import { Box, Stack, Typography } from "@mui/material"
import { ExerciseCard } from "./ExerciseCard"

export const  Exercises = ({ exercises, setExercises, bodyPart }: any) => {
    return (
        <Box
            id="exercises"
            sx={{
                mt: { lg: '110px' }
            }}
            mt={"50px"}
            p={"20px"}
        >
            <Typography
                variant="h3"
                mb={"46px"}
            >
                Showing Results
            </Typography>

            <Stack
                direction={"row"}
                sx={{
                    gap: { lg: '110px', xs: '50px'}
                }}
                flexWrap={'wrap'}
                justifyContent={"center"}
            >
                {exercises.map((exercise: any, index: any) => (
                    <ExerciseCard 
                        key={index} 
                        exercise={exercise}
                     />
                ))}
            </Stack>
        </Box>
    )
}