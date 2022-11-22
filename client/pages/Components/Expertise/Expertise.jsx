import { Grid, Box , Typography, Container, ListItem, Chip } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import SpecialTitle from '../specialTitle/SpecialTitle'
import ExpertiseData from './ExpertiseData'

const Expertise = () => {

  return (
    <>
    <Box id='Expertise' >
      <Container sx={{paddingTop:"50px" , paddingBottom:"50px",}}>
        <SpecialTitle Title = "Expertise" />
        <Grid container >
          {
            ExpertiseData.map((data, index) => {return(
              <Grid item md={4} key={data.id}
              sx={{border :"2px solid #30C5FF", padding:"30px",bgcolor:"primary.main",}}>
                <Box sx={{display :"flex" , 
                alignItems:"center", 
                marginBottom:"20px", color:"thirdly.main",}}>
                   {data.icon}
                   <Typography 
                      variant="h4" 
                      fontFamily={'monospace'} 
                      fontWeight={"700"} 
                      maxWidth='100%'
                      textAlign={'center'}>
                        
                        {data.title}
                    </Typography>
                </Box>
                <Box 
                sx={{padding:"10px", position:"relative", 
                borderLeft:"1px solid #89023E", }} className='description'>
                    <Typography variant='body1' color={"secondary.main"}>
                      {data.desc}
                    </Typography>
                </Box>
                
                { <Stack  
                sx={{flexDirection:"row" , flexWrap:"wrap" ,padding:"10px"}}>
                  {
                    data['skills'].map((datas , index) => {
                      return(
                        <Chip
                          key={index}
                          
                          label={datas}
                          color='secondary'
                          sx={{margin:"5px" ,backgroundColor:'fourthly.main',color:"white",fontWeight:"700"}}
                        />
                      )
                    })
                  }
                </Stack> }
              </Grid>
            )})
          }

        </Grid>    
        </Container>
    </Box>  
    </>
  )
}

export default Expertise