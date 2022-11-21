import LaptopIcon from '@mui/icons-material/Laptop';
import DevicesIcon from '@mui/icons-material/Devices';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
const ExpertiseData = [
{
    id:1,
    title:'Front End Development',
    desc:'Passionate about UI/UX. Over 2 years of development experience in ',
    icon:<LaptopIcon fontSize="large"/>,
    skills:["HTML", "CSS","React" , "NextJS"],
},
{
    id:2,
    title:'Back End Development',
    desc:'Experienced in both functional and OOP : ',
    icon:<DevicesIcon fontSize="large"/>,
    skills:["Python", "java","JavaScript" , "NodeJS" ,"ExpressJs"],
    expIcons:[]
},
{
    id:3,
    title:'Mobile Application Development',
    desc:'Skilled in developing hybrid mobile apps and cross-platform solutions using',
    icon:<AppSettingsAltIcon fontSize="large"/>,
    skills:["React native"],
},
];
export default ExpertiseData