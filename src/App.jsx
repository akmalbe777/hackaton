import { Box } from "@chakra-ui/react"
import Main from "./components/Main/Main"
import { Navbar } from "./components/navbar/navbar"

function App() {

  return (
    <>
     <Box>
        <Navbar /> 
        <Main />
    </Box>
    </>
  )
}

export default App
