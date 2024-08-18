import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function SidebarTexts({text}) {
    return (
        <Box>
            <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>{text}</Text>
        </Box>
    )
}
