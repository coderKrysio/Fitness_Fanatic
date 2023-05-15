import { Button, Stack, Typography } from "@mui/material"
import Link from "next/link"

export const ExerciseCard = ({ exercise }: any) => {
    return (
        <Link
            className="exercise-card"
            href={`/exercise/${exercise.id}`}
        >
            <img 
                src={exercise.gifUrl}
                alt={exercise.name}
                loading="lazy"
            />

            <Stack
                direction={'row'}
            >
                <Button
                    sx={{ 
                        ml: "21px", 
                        color: "#fff", 
                        background: "#FFA9A9", 
                        fontSize: "14px", 
                        borderRadius: "20px",
                        textTransform: "capitalize",
                    }}
                >
                    {exercise.bodyPart}
                </Button>

                <Button
                    sx={{ 
                        ml: "21px", 
                        color: '#fff', 
                        background: '#FCC757', 
                        fontSize: '14px', 
                        borderRadius: '20px', 
                        textTransform: 'capitalize' 
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>

            <Typography
                ml={'21px'}
                color={'#000'}
                fontWeight={'bold'}
                mt={"11px"}
                pb={'10px'}
                textTransform={'capitalize'}
                fontSize={'24px'}
            >
                {exercise.name}
            </Typography>
        </Link>
    )
}