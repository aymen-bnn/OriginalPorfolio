import { Grid , Box , Typography ,Container,Button } from '@mui/material'
import React from 'react'
import Particle from './Particles'
import { TextContainer, Title , LanImg} from './styles'
import { Typewriter } from 'react-simple-typewriter'
import {motion} from 'framer-motion' 
type Props = {}
const Landing = ({}:Props) => {
  const boxVariants = {
    out: {
      y: 600,
    },
    in: {
      y: 0,
      transition: {
        duration: 0.6,
        // The first child will appear AFTER the parrent has appeared on the screen
        delayChildren: 0.5,
        // The next sibling will appear 0.5s after the previous one
        staggerChildren: 0.5,
      },
    },
  };
  
  const iconVariants = {
    out: {
      x: -600,
    },
    in: {
      x: 0,
    },
  };

  return (
    <>
        <Box sx={{height:"100vh" ,width:"100%", position:"relative" }} >
            <Particle/>
            <Container >
              <Box 
              sx={{
                width:"70%",
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)"
              }}>
                  <TextContainer>
                    <Typography 
                      variant='h5' 
                      color='secondary.main' 
                      fontWeight={700}>
                        Hi, my name is 
                    </Typography>
                    <Title 
                    variant='h2' color='thirdly.main'>Aymen Bnn</Title>
                    <Typography 
                    variant='h5' color="secondary.main" fontWeight={700}>
                      Future Information Systems Ingeneering and Management 
                    </Typography>
                    <div className='App'>
                    <h3 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal', color:'white' }}>
                    I Build Things For{' '}
                    <span style={{ color: '#30C5FF', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['WEB', 'MOBILE']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                        />
                      </span>
                    </h3>
                  </div>
                  <Button 
                  href='#Contact'
                  variant="outlined"
                  color="secondary"
                  sx={{
                    fontWeight:"700" , 
                    padding:"10px 20px",
                    marginTop:"30px" , 
                    marginLeft:"30px" ,
                    backgroundColor:'thirdly.main'}}>
                    Contact me 
                  </Button>
                  </TextContainer>
              </Box>
            </Container>
        </Box>
    </>
  )
}

export default Landing