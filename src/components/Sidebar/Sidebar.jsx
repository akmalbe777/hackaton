import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'
import React from 'react'
import { top } from '../../assets'
import { AiOutlineMinus } from "react-icons/ai";

export default function Sidebar() {
    const [value, setValue] = React.useState([1250, 12500]);
    return (
        <Box background='white' width='250px'>
            <Box pl='20px' display='flex' flexDir='column' gap='8px'>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Все товары</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Афганские скороварки</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Казаны и котлы</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Учаги</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Кастрюли</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Мантоварки</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Сковороды</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Термосы</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Чайники и френч-прессы</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Сервировочная посуда</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Столовые приборы</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Бытовая техника</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Бытовая химия</Text>
                <Text color='#333333' fontWeight='700' cursor='pointer' _active={{ color: '#E24C55' }}>Товары для дома и сада</Text>
            </Box>
            <Accordion allowMultiple defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                                Цена
                            </Box>
                            <Image src={top} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} display="flex" alignItems="center" justifyContent="center" gap="5px">
                        <Input
                            width="90px"
                            bg="transparent"
                            border="1px solid gray"
                            borderRadius="0px"
                            _hover="none"
                            placeholder="750 ₽"
                        />
                        <AiOutlineMinus />
                        <Input
                            width="90px"
                            bg="transparent"
                            border="1px solid gray"
                            borderRadius="0px"
                            _hover="none"
                            placeholder="12500 ₽"
                        />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Box width="230px">
                <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={value}
                    min={0}
                    max={15000}
                    step={50}
                    onChange={(val) => setValue(val)}
                >
                    <RangeSliderTrack
                        height="4px"
                    >
                        <RangeSliderFilledTrack bg="gray.600" />
                    </RangeSliderTrack>

                    <RangeSliderThumb index={0}>
                        <Box
                            width="20px"
                            height="30px"
                            bg="red.500"
                            borderRadius="md"
                            _focus={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.8)" }}
                        />
                    </RangeSliderThumb>
                    <RangeSliderThumb index={1}>
                        <Box
                            width="20px"
                            height="30px"
                            bg="red.500"
                            borderRadius="md"
                            _focus={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.8)" }}
                        />
                    </RangeSliderThumb>
                </RangeSlider>

                <Box display="flex" justifyContent="space-between" marginTop="8px">
                    <Text>{value[0]} ₽</Text>
                    <Text>{value[1]} ₽</Text>
                </Box>
            </Box>
        </Box>

    )
}
