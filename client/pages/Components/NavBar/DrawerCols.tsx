import { Drawer , IconButton, List , ListItemButton,Box } from '@mui/material'
import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

type Props = {}
const DrawerCols = ({}: Props) => {
    const MenuItems = ["About","Expertise","Work","Contact"]
    const [openDrawer , setOpenDrawer] = useState(false)
  return (
      <React.Fragment>
        <Drawer 
        open={openDrawer} 
        sx={{ position:"relative",}}
        PaperProps={{
            sx: {   width: "100%", 
                    bgcolor:'primary.main', 
                    backgroundImage:"url('/Images/shape.svg')"},
        }}>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
            sx={{position:"absolute", color:"secondary.main", right:"0",zIndex:"2",}}>
                <MenuOpenIcon/>
            </IconButton>
            <List 
                sx={{width:"100%",
                    height:"100%",
                    display :"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center", }}>
                <Box>
                {
                    MenuItems.map((path, index) => {return(
                        <ListItemButton 
                            href={`#${path}`}
                            sx={{fontWeight:"900",
                                fontSize:"2rem",
                                height:"50px",
                                color:"secondary.main",
                                bgcolor:"#f0f8ff73",
                                 marginBottom:'10px',}}
                            onClick={() => setOpenDrawer(!openDrawer)}>
                                    {path}
                        </ListItemButton>
                    )})
                }
                </Box>
            </List>
        </Drawer>
        <IconButton color='secondary' onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuOpenIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerCols