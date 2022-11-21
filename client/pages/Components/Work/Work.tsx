import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import SpecialTitle from '../specialTitle/SpecialTitle'
import {styled} from '@mui/system'

const Image = styled('img')({
  width:"100%",
  height:"100%",
  objectFit:'cover',
  objectPosition:'top',
  transition: "all 2s ease-in-out",
  '&:hover':{
    objectPosition: "bottom",
  }
})
function Work() {
  return (
    <Box id='Work' sx={{bgcolor:"primary.main" , paddingTop:"60px", paddingBottom:"60px"}}>
      <SpecialTitle Title="Work" />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}
            sx={{display:'flex', flexDirection:'column', justifyContent:'center',}}>
              <Typography variant='h6' color="red">
                Section under development
              </Typography>
            <Typography variant="body2" color="thirdly.main">
                Futured Project
            </Typography>
            <Typography 
              variant='h4' 
              color="secondary"
              fontFamily="monospace"
              fontWeight="700"  >
                Spotify Profile
            </Typography>
            <Typography variant='body1' color="secondary">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
              Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </Typography>
            <Box>
              Sublime Text Atom iTerm2 Hyper
            </Box>
            <Box>
              <GitHubIcon/>
              <LaunchIcon/>
            </Box>
            </Grid>
        <Grid item md={6} xs={12} 
          sx={{height:"300px", overflow:"hidden",}}>
          <Image src="/Work/Leon.png" alt="" />
        </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Work