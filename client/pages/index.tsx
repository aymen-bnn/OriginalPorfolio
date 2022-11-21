import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NavBar,About, Landing,Expertise,Work,Toggle, Footer} from './Components'
import { ThemeProvider } from "@mui/system"
import theme from './Components/Styles/Styles'
import Contact from './Components/Contact/Contact'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>aymen.bnn</title>
        <meta name="description" content="aymen bnn" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* //Navbar */}
      <NavBar/>

      {/* //Landing */}
      <Landing/>

      {/* //About */}
      <About/>

      {/* //Expertise */}
      <Expertise/>

      {/* //Work */}
      <Work/>

      {/* //Conntact */}
      <Contact/>

      {/* //Footer */}
      <Footer/>

      {/* //Toggle */}
      <Toggle/>
    </ThemeProvider>
  )
}
