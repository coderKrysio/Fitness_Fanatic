import { Stack } from "@mui/material"
import Link from "next/link"

export const Navbar = () => {
    return (
        <Stack
            direction={'row'}
            justifyContent={'none'}
            sx={{
                gap: { sm: '122px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
            }}
            px={'20px'}
        >
            <Link href={'/'}>
                <img 
                    src='https://img.icons8.com/office/80/flex-biceps.png'
                    alt="Logo" 
                    style={{
                        width: '48px',
                        height: '48px',
                        margin: '0px 20px', 
                    }} 
                />
            </Link>

            <Stack
                direction={'row'}
                gap={'40px'}
                fontSize={"24px"}
                alignItems={'flex-end'}
            >
                <Link 
                    href={'/'}
                    style={{
                        textDecoration: 'none',
                        color: '#def2f1',
                        borderBottom: '3px solid #daff96'
                    }}
                >
                    Home
                </Link>

                <a
                    href="#exercises"
                    style={{
                        textDecoration: 'none',
                        color:  '#def2f1'
                    }}
                >Exercise</a>
            </Stack>
        </Stack>
    )
}