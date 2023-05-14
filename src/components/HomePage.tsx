import { Box } from "@mui/material"
import { HeroBanner } from "./HeroBanner"
import { SearchExercises } from "./SearchExercises"
import { Exercises } from "./Exercises"

export const HomePage = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Exercises />
        </Box>
    )
}