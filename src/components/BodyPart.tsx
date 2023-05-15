import { Button, Stack } from "@mui/material"
import Image from "next/image"

export const BodyPart = ({ item, setBodyPart, bodyPart}: any) => {
    return (
        <Stack
            component={'button'}
            alignItems={'center'}
            justifyContent={'center'}
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '270px',
                cursor: 'pointer',
                gap: '47px',
            }}
        >
            <Image
                src="/icons/gym.png"
                alt="dumbell"
                width={40}
                height={40}
            />
        </Stack>
    )
}