
import React from 'react'
import { SpeedDial, SpeedDialAction , Box, Link } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Toggle = () => {
    const actions = [
        { icon: <FacebookIcon />, name: 'Facebook' , color : '#4267B2' ,link:"https://www.facebook.com/profile.php?id=100085140614755"},
        { icon: <InstagramIcon />, name: 'Instagram' , color : '#e95950',link:"https://www.instagram.com/aymn.bnn"},
        { icon: <GitHubIcon />, name: 'Github' , color : '#171515',link:"https://dz.linkedin.com/in/aymen-benouna-827459249"},
        { icon: <LinkedInIcon />, name: 'LinkedIn' , color : '#0072b1'},
      ];
  return (
    <>
    <Box sx={{  flexGrow: 1 }}>
        <SpeedDial 
        ariaLabel="SpeedDial basic example"
        icon = {<MapsUgcIcon color='primary'/>}
        sx = {{position : "fixed", bottom : 40, right : 40,}}
        FabProps={{
            sx: {
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.main',
              }
            }}}
        >
            {
                actions.map((action ) => {return(
                    <SpeedDialAction
                    components = 'a'
                    href={action.link}
                    key = {action.name}
                    icon = {action.icon}
                    tooltipTitle = {action.name}
                    sx={{
                        '&:hover' : {
                            color:action.color,
                        }
                    }}
                    onClick={() => <Link to={action.link} />}
                    />
                )})
            }
        </SpeedDial>
    </Box>
    </>
  )
}

export default Toggle