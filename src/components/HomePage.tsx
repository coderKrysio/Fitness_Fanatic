import { Box } from "@mui/material"
import { HeroBanner } from "./HeroBanner"
import { SearchExercises } from "./SearchExercises"
import { Exercises } from "./Exercises"
import { useState } from "react"

export const HomePage = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    
    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
            />
        </Box>
    )
}