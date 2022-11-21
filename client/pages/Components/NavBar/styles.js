import { styled } from "@mui/system";
import { Colors } from "../Styles/Styles";
import { Box , Toolbar, Link, Button} from "@mui/material";

export const ToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
})

export const NavBox = styled(Box)({
    display:"flex",
})
export const NavLink = styled(Link)({
    color : 'white',
    textTransform : 'capitalize',
    fontFamily : 'Montserrat',
    textDecoration:"none",
    padding:"10px",
    '&:hover' : {
        color :Colors.thirdly ,
    },
})
export const Resume = styled(Button)({
    color:Colors.secondary,
    padding:"10px",
    border : `1px solid ${Colors.thirdly}`,
    borderRadius:"5px",
    textTransform:"capitalize",
})