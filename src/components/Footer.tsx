import { Box, Stack, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box
            mt='80px'
            bgcolor={'#3aafa9'}
        >
            <Stack
                gap={'40px'}
                alignItems={'center'}
                px={'40px'}
                pt={'24px'}
            >
                <img src='/images/Logo-1.png' alt="logo" width={'200px'} height={'40px'} />

                <Typography
                    variant="h5"
                    pb={'40px'}
                    mt={'20px'}
                    color={'#def2f1'}
                >
                    Made by coderKrysio
                </Typography>
            </Stack>
        </Box>
    )
}