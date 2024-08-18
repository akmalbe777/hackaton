import { Box } from "@chakra-ui/react"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar"
import { Footer } from "./components/footer"

function App() {

  return (
    <Box>
      <Navbar />
        <Main />
        <Footer />
    </Box>
  )
}

export default App
