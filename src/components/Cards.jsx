import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { card } from '../assets'

export default function Cards() {
    return (
        <Box>
            <Box width='300px' pos='relative'>
                <Image src={card} pos='absolute' />
                <Box pos='absolute' display='flex' alignItems='center' justifyContent='space-between' w='10%'>
                    <Box>
                        <Text color='white' fontSize='10px'>Артикул: 515314</Text>
                        <Text color='white' fontSize='12px'>Учаги</Text>
                    </Box>
                    <CiHeart color='white' />
                </Box>
            </Box>
        </Box>
    )
}
