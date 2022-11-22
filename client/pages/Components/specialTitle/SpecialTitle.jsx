import React from 'react'
import { Typography ,Box } from '@mui/material'
import {useTheme , useMediaQuery} from '@mui/material'
//Special heading
const SpecialTitle = (props) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
        <Box sx={{width:"100%", textAlign:"center",}}>
            <Typography 
              variant={isMatch? "h2" : "h1"}
              fontFamily="monospace" 
              fontWeight="900"
              className="Title">
              
              {
                props.Title
              }
            </Typography>
        </Box>
    </>
  )
}

export default SpecialTitle