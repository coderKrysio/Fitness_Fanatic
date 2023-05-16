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
                >
                    {name}
                </Typography>

                <Typography 
                    sx={{ 
                        fontSize: { lg: '24px', xs: '18px' } 
                    }} 
                    color="#4F4C4C"
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
                                background: '#fff2db',
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
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}