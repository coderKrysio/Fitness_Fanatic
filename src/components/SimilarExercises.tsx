import { Box, Stack, Typography } from "@mui/material"
import { HorizontalScrollbar } from "./HorizontalScrollbar"

export const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }: any) => {
    return (
        <Box
            sx={{
                mt: { lg: '100px', xs: '0'}
            }}
        >
            <Typography
                variant="h3"
            >
                Exercises that target the same muscle group
            </Typography>

            <Stack
                direction={"row"}
                sx={{
                    p: '2',
                    position: 'relative',
                }}
            >
                {targetMuscleExercises.length && 
                    <HorizontalScrollbar data={targetMuscleExercises} />
                }
            </Stack>
        </Box>
    )
}