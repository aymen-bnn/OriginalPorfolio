import React ,{ useState }from 'react'
import { Grid, Typography , Container , Box ,TextField, Button} from '@mui/material'
import { styled } from '@mui/system'
import SpecialTitle from '../specialTitle/SpecialTitle'
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
//import { SendEmail } from '../../API/Api'


const ContactTextField = styled(TextField)({
    marginTop :"10px", 
    marginBottom :"10px",
    backgroundColor:"white",
    '&:hover' : {
        color :"red",
    }
})

const Contact = () => {
    const [fullName , setFullName] = useState("")
    const [email , setEmail] = useState("")
    const [emailObject , setEmailObject] = useState("")
    const [message , setMesssage] = useState("")
    const [Loading,setLoading] = useState(false)
    const [buttonLoad,setButtonLoad] = useState(false)
    const [send , setSend] = useState()

const submitHandler = (e) => {
    e.preventDefault()
    if(fullName && emailObject && message && email){
        setLoading(setButtonLoad(true))
        //SendEmail({fullName,email,emailObject,message})
        //.then(
        //    () => {
        //        setButtonLoad(false)
        //    }
        //)
    }
}
  return (
    <>
        <Box id='Contact' sx={{backgroundColor : "primary.main", padding:"50px 0",}}>
            <Container>
                <SpecialTitle Title = "Contact"  />
                <Grid container >
                    <Grid sx={{padding :"30px",}} item md={6}>
                        <Typography 
                            variant='h3' 
                            color = "thirdly.main"
                            fontFamily={"monospace"}
                            fontWeight="700">
                            Let&apos;s Chat
                        </Typography>
                        <Typography 
                            variant='body1'    
                            color = "secondary.main"
                            fontFamily={"monospace"}>
                        Hey! i am looking forward to start a project with you ,
                         you can choose any communication tool or kindly fill up this form .
                        </Typography>
                    </Grid>
                    <Grid item md={6} 
                        sx ={{backgroundColor:"secondary.main", padding:"20px",}}
                    >
                        <Box >
                            <Typography variant='body1'>
                                please provide a valid email so I will be able to reply your message 
                            </Typography>
                            <form 
                                noValidate 
                                autoComplete
                                onSubmit={submitHandler}>
                                <ContactTextField 
                                        value={fullName}
                                        onChange={
                                        (e) => {setFullName(e.target.value)}}
                                            
                                        id="outlined-basic" 
                                        label="Full Name" 
                                        variant="outlined" 
                                        fullWidth="100%"/>
                                <ContactTextField 
                                        value={email}
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        
                                        id="outlined-basic" 
                                        label="Email" 
                                        variant="outlined" 
                                        fullWidth="100%"/>

                                <ContactTextField 
                                        value={emailObject}
                                        onChange={(e) => {setEmailObject(e.target.value)}}
                                       
                                        id="outlined-basic" 
                                        label="Object" 
                                        variant="outlined" 
                                        fullWidth='100%'/>
                                <ContactTextField 
                                        value={message}
                                        onChange={(e) => {setMesssage(e.target.value)}}
                                        
                                        id="outlined-basic" 
                                        label="Outlined" 
                                        variant="outlined" 
                                        fullWidth='100%'
                                        multiline
                                        rows={5}/>
                                <Box sx={{display:"flex", justifyContent:"center",}}>
                                    <Button 
                                        type="submit"
                                        variant='putlined' 
                                        endIcon={<ScheduleSendIcon/>}
                                        sx=
                                        {{fontFamily:"monospace",
                                         fontWeight:"900",
                                         color:"thirdly.main",
                                         letterSpacing:"5px",
                                         "&:hover":{
                                            color:"white",
                                            bgcolor:"thirdly.main",
                                         }}} >
                                        {buttonLoad? 'Loading...' : 'Submit'}
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default Contact