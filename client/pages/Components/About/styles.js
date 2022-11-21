import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
export const AboutImage = styled(Image)({
    position : 'relative' ,
    maxWidth : '100%',
    zIndex : "2",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    margin :"60px 0",
    },
)

export const Title = styled(Typography)({
    fontFamily:"monospace",
    fontWeight: "700",
})