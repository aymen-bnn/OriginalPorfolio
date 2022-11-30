import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";



export const Title = styled(Typography)({
    fontFamily :"monospace" , 
    fontWeight : "900",
    
})
export const TextContainer = styled(Box)(({theme})=>({
    position :"absolute" ,
    width :"100%" ,
    padding :"20px",
    borderRadius:"10px",
    top :"50%",
    left : "50%",
    transform : "translate(-50% , -50%)",
    [theme.breakpoints.down('sm')]:{
        paddingTop :"180px",
        position : "relative",
        height : "60px",
    }
}))
export const LanImg = styled('img')({
    maxWidth : "100%",
})