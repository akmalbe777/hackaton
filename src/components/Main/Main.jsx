import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar'

export default function Main() {
    const [value, setValue] = useState('1')
    return (
        <Box px='120px'>
           <Sidebar />
        </Box>
    )
}
