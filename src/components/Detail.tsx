import { Button, Stack, Typography } from "@mui/material";

export const Detail = ({ exerciseDetail }: any) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: '/icons/body-part.png',
            name: bodyPart,
        },
        {
            icon: '/icons/target.png',
            name: target,
        },
        {
            icon: '/icons/equipment.png',
            name: equipment,
        },
    ]

    return (
        <Stack
            gap={'60px'}
            sx={{
                flexDirection: { lg: 'row' },
                p: '20px',
                alignItems: 'center',
            }}
        >
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack
                sx={{
                    gap: { lg: '35px', xs: '20px'}
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    textTransform="capitalize"
                    color={'#def2f1'}
                >
                    {name}
                </Typography>

                <Typography 
                    sx={{ 
                        fontSize: { lg: '24px', xs: '18px' } 
                    }} 
                    color="#f0f5f9"
                >
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>

                {extraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction={'row'}
                        gap={'24px'}
                        alignItems={'center'}
                    >
                        <Button
                            sx={{
                                background: '#daff96',
                                borderRadius: '50%',
                                width: '100px',
                                height: '100px',
                            }}
                        >
                            <img 
                                src={item.icon} 
                                alt={bodyPart}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                }}
                            />
                        </Button>

                        <Typography
                            variant="h5"
                            textTransform={'capitalize'}
                            color={'#def2f1'}
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}