import React from 'react'
import { Box , Typography, Container, Grid, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material'
import { AboutImage , Title} from './styles'
import SendIcon from '@mui/icons-material/Send';
import SpecialTitle from '../specialTitle/SpecialTitle';
import Image from 'next/image';
import {motion} from 'framer-motion'
const About = () => {
  return (
    <>
        <Box id='About'>
            <Container>
                <Grid container  justifyContent="center" alignItems="center" sx={{paddingTop:"50px" , paddingBottom:"50px",}}>
                    <Grid item xs={12} md={6}>
                        <SpecialTitle Title = "About" />
                        <Accordion sx={{marginBottom : '30px'}}>
                            <AccordionSummary
                            expandIcon={<SendIcon color='secondary'/>}
                            sx={{background:"#e4059c",
                            backgroundImage:"linear-gradient(45deg, #30C5FF 0%, #89023E 100%)",
                            }}>
                                <Title variant='h4' color="secondary.main"> Engeneering</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='body2'>
                                A Junior web developer who enjoys learning everything about 
                                development, knowledgeable in user interfaces and experiences ,
                                front end and back end development, I'm equipped with just the right tools, 
                                and can absolutely function independently of them to deliver fast, 
                                resilient solutions .
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<SendIcon color='secondary' />}
                            sx={{background:"#e4059c",
                            backgroundImage:"linear-gradient(45deg, #30C5FF 0%, #89023E 100%)",
                            }}>
                                <Title variant='h4' color="secondary.main"> Design</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='body2'>
                                I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels,
                                 but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me. 
                                I'm committed to creating fluent user experiences while staying fashionable.
                                </Typography>
                            </AccordionDetails>
                        </Accordion> 
                    </Grid>
                    <Grid item xs={12} md={6} 
                        sx = {{position:"relative",display :"flex",justifyContent:"center",alignItems:"center", }}>
                        <AboutImage className='ImgStyle' alt='Aymen Bnn' src='/Aymen.jpg' width={280} height={350}/>
                        <div className='Imgstyle'></div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default About