import { Box, Stack, Typography } from "@mui/material"
import { HorizontalScrollbar } from "./HorizontalScrollbar"
import { Loader } from "./Loader"

export const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }: any) => {
    return (
        <Box
            sx={{
                mt: { lg: '100px', xs: '0'}
            }}
            p="20px"
        >
            <Typography
                variant="h3"
                mb={5}
                color={'#3aafa9'}
                fontWeight={700} 
            >
                Similar <span style={{ color: '#def2f1', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </Typography>

            <Stack
                direction={"row"}
                sx={{
                    p: '2',
                    position: 'relative',
                }}
            >
                {targetMuscleExercises.length ? 
                    <HorizontalScrollbar data={targetMuscleExercises} />
                    : <Loader />
                }
            </Stack>

            <Typography
                variant="h3"
                mb={5}
                color={'#3aafa9'}
                fontWeight={700} 
            >
                Similar <span style={{ color: '#def2f1', textTransform: 'capitalize' }}>Equipment</span> exercises
            </Typography>

            <Stack
                direction={"row"}
                sx={{
                    p: '2',
                    position: 'relative',
                }}
            >
                {equipmentExercises.length ? 
                    <HorizontalScrollbar data={equipmentExercises} />
                    : <Loader />
                }
            </Stack>
        </Box>
    )
}