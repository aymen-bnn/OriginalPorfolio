import { styled } from "@mui/system";
import { Colors } from "../Styles/Styles";
import { TextField } from "@mui/material";
export const ContactTextField = styled(TextField)({
    marginTop :"10px", 
    marginBottom :"10px",
    backgroundColor:"white",
    '&:hover' : {
        color :"red",
    }
})