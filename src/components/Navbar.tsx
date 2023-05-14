import { Stack } from "@mui/material"
import Image from "next/image"
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
                <Image 
                    src={'/images/Logo.png'} 
                    width={48} 
                    height={48} 
                    alt="Logo" 
                    style={{
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
                        color: '#3a1212',
                        borderBottom: '3px solid #ff2625'
                    }}
                >
                    Home
                </Link>

                <a
                    href="#exercises"
                    style={{
                        textDecoration: 'none',
                        color:  '#3a1212'
                    }}
                >Exercise</a>
            </Stack>
        </Stack>
    )
}