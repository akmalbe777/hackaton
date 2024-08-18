import { Box, Checkbox, CheckboxGroup, Collapse, Flex, Heading, IconButton, Radio, RadioGroup, Select, Stack, Text, useDisclosure } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { SlArrowUp } from "react-icons/sl";
import Cards from '../Cards';

export default function Main() {
    const [value, setValue] = useState('1')
    const [isOpen, setIsOpen] = useState(false);

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleBlur = () => {
        setIsOpen(false);
    };
    const { isOpen: isOpen1, onToggle: onOpen1 } = useDisclosure();
    const [value1, setValue1] = useState('all');

    return (
        <Box px='120px'>
            <Box width="100%" padding="10px" backgroundColor="white" mb='40px'>
                <Flex justifyContent="space-between" alignItems="center">
                    {/* Number of products found */}
                    <Text>Найдено товаров: 245</Text>

                    {/* Radio buttons */}
                    <RadioGroup onChange={setValue} value={value} colorScheme="red">
                        <Stack direction="row" spacing={5}>
                            <Radio value="1">Все товары</Radio>
                            <Radio value="2">Новинки</Radio>
                            <Radio value="3">Со скидкой</Radio>
                        </Stack>
                    </RadioGroup>

                    {/* Sorting dropdown */}
                    <Select
                        placeholder={isOpen ? '' : 'По популярности'}
                        icon={<SlArrowUp size={'5'} />}
                        iconSize="24px"
                        iconColor="black"
                        border="none"
                        width="200px"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        <option value="option1">Сначала дешевле</option>
                        <option value="option2">Сначала дороже</option>
                    </Select>
                </Flex>
            </Box>
         <Box display='flex' alignItems='start' gap='40px'>
         <Sidebar />
         <Cards />
         </Box>

        </Box>
    )
}
