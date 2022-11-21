import { createTheme } from "@mui/material/styles"
 export const Colors = {
        primary:"#040403",
        secondary:"#F5F9E9",
        thirdly : "#30C5FF",
        fourthly: "#89023E",
        fifthly: "#896A67",
        success:"#4CAF50",
        info:"#00a2ff",
        danger:"#FF5722",
        warning:"#FFC107",
        dark:"#0e1b20",
        light:"#aaa",
        muted:"#abafb3",
        border:"#DDDFE1",
        inverse:"#2F3D4",
        shaft:"#333",
        // Solid Color
        white:"#fff",
        black:"#000",
        }
        const theme = createTheme({
            palette:{
                primary:{
                    main :Colors.primary ,
                },
                secondary:{
                    main :Colors.secondary ,
                },
                thirdly:{
                    main :Colors.thirdly ,
                },
                fourthly:{
                    main :Colors.fourthly,
                }
            },
        })
        export default theme