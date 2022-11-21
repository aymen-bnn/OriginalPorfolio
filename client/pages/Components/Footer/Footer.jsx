import { Typography , Box , Container} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
        <Box sx={{ padding:"60px 0",}}>
            <Container sx={{textAlign : "center",fontFamily:"monospaces",}}>
                <Typography 
                    variant='h5'
                    color={"fourthly.main"}>
                    © aymenbnn 2022
                </Typography>
                <Typography 
                    variant='h5' 
                    color={"thirdly.main"}
                    fontWeight={"900"}>
                    aymenbnn.dev@gmail.com
                </Typography>
            </Container>
        </Box>
        </footer>
    </>
  )
}

export default Footer