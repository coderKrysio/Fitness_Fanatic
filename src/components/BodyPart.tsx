import { Stack, Typography } from "@mui/material"

export const BodyPart = ({ item, setBodyPart, bodyPart}: any) => {
    return (
        <Stack
            component={'button'}
            alignItems={'center'}
            justifyContent={'center'}
            className="bodyPart-card"
            sx={{
                border: 'none',
                borderTop: bodyPart === item ? '4px solid #daff96' : '',
                backgroundColor: '#3aafa9',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            }}
        >
            <img
                src="https://img.icons8.com/ios-filled/100/gum-.png"
                alt="dumbell"
                style={{
                    width:'50px',
                    height:'50px',
                }}                
            />

            <Typography
                fontSize={"24px"}
                fontWeight={"bold"}
                color={"#17242a"}
                textTransform={'capitalize'}
            >
                {item}
            </Typography>
        </Stack>
    )
}