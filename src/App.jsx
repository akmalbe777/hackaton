import { Box } from "@chakra-ui/react"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"

function App() {

  return (
    <Box>
      <Navbar />
        <Hero /> 
        <Main />
        <Footer />
    </Box>
  )
}

export default App
