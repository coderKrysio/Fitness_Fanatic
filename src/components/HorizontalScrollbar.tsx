import { Box, Typography } from "@mui/material"
import { BodyPart } from "./BodyPart"
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { ExerciseCard } from "./ExerciseCard";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={'icons/left-arrow.png'} alt="right-arrow" />
      </Typography>
    );
};
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={'icons/right-arrow.png'} alt="right-arrow" />
      </Typography>
    );
};

export const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }: any) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item: any) => (
                <Box
                    key={item.id || item}
                    id={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {isBodyParts ?
                        <BodyPart 
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                        : <ExerciseCard exercise={item} />
                    }
                </Box>
            ))}
        </ScrollMenu>
    )
}