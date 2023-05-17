import { Box, Button, Typography } from "@mui/material"

export const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px'},
                ml: { sm: '50px'},
            }}
        >
            <Typography
                color={"#daff96"}
                fontWeight={"600"}
                fontSize={'26px'}
                
            >
                Fitness Club
            </Typography>

            <Typography
                color={'#def2f1'}
                fontWeight={"700"}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb={'23px'}
                mt={'30px'}
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            
            <Typography
                fontSize={'22px'}
                lineHeight={'35px'}
                mb={4}
                color={'#def2f1'}
            >
                Check out the most effective exercises
            </Typography>

            <Button
                className="search-btn"
                href="#exercises"
                sx={{
                    background: '#daff96',
                    padding: '10px',
                    color: '#000',
                }}
            >
                Explore Exercises
            </Button>

            <Typography
                fontWeight={600}
                color={'#daff96'}
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize={"200px"}
            >
                Exercise
            </Typography>

            <img 
                src="/images/banner.jpg" 
                alt="banner" 
                className="hero-banner-img" 
            />
        </Box>
    )
}