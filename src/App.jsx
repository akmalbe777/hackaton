import { Box } from "@chakra-ui/react"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar"
<<<<<<< HEAD
import { Footer } from "./components/footer"
=======
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
>>>>>>> c547b5ef3d6de4b6ec4ddc3b35a01db3cec50b88

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
