import { Box, Radio, Text } from '@chakra-ui/react'
import React from 'react'

export default function Main() {
    return (
        <Box px='120px'>
            <Box>
                <Text>Найденно товаров: 245</Text>

                <Box>
                    <Radio size='lg' name='1' colorScheme='orange' defaultChecked>Все товары</Radio>
                    <Radio size='lg' name='1' colorScheme='orange' defaultChecked>Новинки</Radio>
                    <Radio size='lg' name='1' colorScheme='orange' defaultChecked>Со скидкой</Radio>
                </Box>
            </Box>
        </Box>
    )
}
