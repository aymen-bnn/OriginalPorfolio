import React from 'react'
import { AppBar  , Container , Box , Typography, useTheme , useMediaQuery } from '@mui/material'
import { ToolBar , NavBox, NavLink, Resume} from './styles';
import { Colors } from '../Styles/Styles';
import FunctionsIcon from '@mui/icons-material/Functions';
import DrawerCols from './DrawerCols';


function NavBar() {
        const NavItems = ["About","Expertise","Work","Contact",]
        const theme = useTheme()
        const isMatch = useMediaQuery(theme.breakpoints.down("md"))
      return (
        <>
            <AppBar position='fixed' sx={{backgroundColor:"primary",}} >
                <Container>
                    <ToolBar>
                        {
                            isMatch ? (
                            <>
                            <NavBox>
                                <FunctionsIcon color="thirdly"/>
                                <Typography 
                                sx={{fontFamily:"monospace",fontWeight:"700",}}>
                                    aymen
                                </Typography>
                                <Typography 
                                sx={{fontFamily:"monospace",
                                    color:Colors.thirdly,
                                    fontWeight:"700",}}>
                                    .bnn
                                </Typography>
                            </NavBox>
                            <NavBox>
                                <DrawerCols/>
                            </NavBox>
                            </>
                            ):(
                                <>
                                <NavBox>
                                <FunctionsIcon color="thirdly"/>
                                <Typography 
                                sx={{fontFamily:"monospace",fontWeight:"700",}}>
                                    aymen
                                </Typography>
                                <Typography 
                                sx={{fontFamily:"monospace",
                                    color:Colors.thirdly,
                                    fontWeight:"700",}}>
                                    .bnn
                                </Typography>
                            </NavBox>
                            <NavBox>
                                <Box>
                                    {
                                        NavItems.map((link, index) => {
                                            return(
                                                <NavLink 
                                                key={index}
                                                //onClick={() => console.log(link)}
                                                    href={`#${link}`} >
                                                    {link}
                                                </NavLink>
                                            )})
                                    }
                                    <Resume
                                        href='#'
                                        color="white"
                                        underline='none'
                                        variant="body2"
                                        component='button'>
                                        Resume
                                    </Resume>
                                </Box>
                            </NavBox>
                            </>
                            )
                        }
                    </ToolBar>
                </Container>
            </AppBar>
        </>
      )
    }

export default NavBar