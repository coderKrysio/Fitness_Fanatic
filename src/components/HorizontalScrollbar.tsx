import { Box } from "@mui/material"
import { BodyPart } from "./BodyPart"

export const HorizontalScrollbar = ({ data }: any) => {
    return (
        <div>
            {data.map((item: any) => (
                <Box
                    key={item.id || item}
                    m="0 40px"
                >
                    <BodyPart 
                        item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            ))}
        </div>
    )
}