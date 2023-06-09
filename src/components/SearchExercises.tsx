import { exerciseOptions, fetchData } from "@/utils/fetchData";
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { HorizontalScrollbar } from "./HorizontalScrollbar";

export const SearchExercises = ({ setExercises, bodyPart, setBodyPart }: any) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState<any[]>([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    },[])

    const handleSearch = async () => {
        if(search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exerciseData.filter(
                (exercise: any) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack
            alignItems={'center'}
            mt={'37px'}
            justifyContent={'center'}
            p={'20px'}
        >
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px' },
                }}
                mb={'50px'}
                textAlign={'center'}
                color={'#def2f1'}
            >
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box
                position={'relative'}
                mb={'72px'}
            >
                <TextField 
                    sx={{
                        width: { lg: '800px', xs: '350px'},
                        height: '76px',
                        backgroundColor: '#17242a',
                        borderRadius: '40px',
                        input: {
                            fontWeight: '700px',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#def2f1',
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />

                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#daff96',
                        color: '#17242a',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: 0,
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px',
                }}
            >
                <HorizontalScrollbar 
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                    isBodyParts
                />
            </Box>
        </Stack>
    )
}
