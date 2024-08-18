import { Accordion, AccordionButton, AccordionItem, Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Sidebar() {
    return (
        <Box background='white'>
            <Text>Все товары</Text>
            <Text>Афганские скороварки</Text>
            <Text>Казаны и котлы</Text>
            <Text>Учаги</Text>
            <Text>Кастрюли</Text>
            <Text>Мантоварки</Text>
            <Text>Сковороды</Text>
            <Text>Термосы</Text>
            <Text>Чайники и френч-прессы</Text>
            <Text>Сервировочная посуда</Text>
            <Text>Столовые приборы</Text>
            <Text>Бытовая техника</Text>
            <Text>Бытовая химия</Text>
            <Text>Товары для дома и сада</Text>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}
