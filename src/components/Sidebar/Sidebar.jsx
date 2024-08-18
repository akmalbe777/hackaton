import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, Grid, GridItem, Image, Input, Radio, RadioGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import SidebarTexts from './SidebarTexts';
import { AiOutlineAppstore } from "react-icons/ai";
import { SlArrowUp } from "react-icons/sl";
import { top } from '../../assets';

export default function Sidebar() {
    const [value, setValue] = React.useState([1250, 12500]);
    const { isOpen, onToggle } = useDisclosure();
    const [value1, setValue1] = useState('all');
    return (
        <Box >
            <Box background='white' width='250px' className='sidebarMD' display='block'>
                <Box pl='20px' display='flex' flexDir='column' gap='8px'>
                    <SidebarTexts text={'Все товары'} />
                    <SidebarTexts text={'Афганские скороварки'} />
                    <SidebarTexts text={'Казаны и котлы'} />
                    <SidebarTexts text={'Учаги'} />
                    <SidebarTexts text={'Кастрюли'} />
                    <SidebarTexts text={'Мантоварки'} />
                    <SidebarTexts text={'Сковороды'} />
                    <SidebarTexts text={'Термосы'} />
                    <SidebarTexts text={'Чайники и френч-прессы'} />
                    <SidebarTexts text={'Сервировочная посуда'} />
                    <SidebarTexts text={'Столовые приборы'} />
                    <SidebarTexts text={'Бытовая техника'} />
                    <SidebarTexts text={'Бытовая химия'} />
                    <SidebarTexts text={'Товары для дома и сада'} />
                </Box>

                <Accordion allowMultiple defaultIndex={[0]}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left" fontSize='22px' fontWeight='500'>
                                    Цена
                                </Box>
                                <Image src={top} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box display="flex" alignItems="center" justifyContent="center" gap="5px" pb='10px'>
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
                            </Box>
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
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>


                <Accordion allowMultiple defaultIndex={[0]}>
                    <AccordionItem className='accordion'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left" fontSize='22px' fontWeight='500'>
                                    Объем
                                </Box>
                                <Image src={top} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" alignItems="center" gap="5px">
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack direction="column" height='280px' width='100%'>
                                    <Radio size='lg' colorScheme='orange' value="all">Все казаны</Radio>
                                    <Checkbox size='lg' colorScheme='orange' value="4.5">4,5 литра</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="5">5 литров</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="6">6 литров</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="7">7 литров</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="8">8 литров</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="10">10 литров</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="12">12 литров</Checkbox>
                                </Stack>
                            </RadioGroup>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple defaultIndex={[0]}>
                    <AccordionItem className='accordion'>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left" fontSize='22px' fontWeight='500'>
                                    Диаметр
                                </Box>
                                <Image src={top} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" alignItems="center" gap="5px">
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack direction="column" gap='20px'>
                                    <Radio size='lg' colorScheme='orange' value="all">Все казаны</Radio>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="4.5">18cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="5">20cm</Checkbox>
                                    </Box>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="6">22cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="6">24cm</Checkbox>
                                    </Box>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="6">26cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="6">28cm</Checkbox>
                                    </Box>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="6">30cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="6">32cm</Checkbox>
                                    </Box>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="6">34cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="6">36cm</Checkbox>
                                    </Box>
                                    <Box display='flex' gap='40px'>
                                        <Checkbox size='lg' colorScheme='orange' value="6">38cm</Checkbox>
                                        <Checkbox size='lg' colorScheme='orange' value="6">40cm</Checkbox>
                                    </Box>
                                </Stack>
                            </RadioGroup>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple defaultIndex={[0]}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left" fontSize='22px' fontWeight='500'>
                                    Комплектация
                                </Box>
                                <Image src={top} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" alignItems="center" gap="5px">
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack direction="column" height='150px' width='100%'>
                                    <Radio size='lg' colorScheme='orange' value="all">Все казаны</Radio>
                                    <Checkbox size='lg' colorScheme='orange' value="4.5">С крышкой</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="5">Без крышки</Checkbox>
                                </Stack>
                            </RadioGroup>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Accordion allowMultiple defaultIndex={[0]}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left" fontSize='22px' fontWeight='500' >
                                    Форма дна
                                </Box>
                                <Image src={top} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} display="flex" alignItems="center" gap="5px" >
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack direction="column" height='150px' width='100%'>
                                    <Radio size='lg' colorScheme='orange' value="all">Все казаны</Radio>
                                    <Checkbox size='lg' colorScheme='orange' value="4.5">Круглое дно</Checkbox>
                                    <Checkbox size='lg' colorScheme='orange' value="5">Плоское дно</Checkbox>
                                </Stack>
                            </RadioGroup>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            <Box className='sidebarBASE' display='none'>
                <Accordion allowToggle >
                    <AccordionItem>
                        <AccordionButton bg='#E24C55' _hover={'none'} color='white'>
                            <Box flex="1" textAlign="left" display='flex' alignItems='center' justifyContent='space-between' width='500px' className='acc'>
                                <Box display='flex' alignItems='center'>
                                    <AiOutlineAppstore style={{ marginRight: '8px' }} size='30' />
                                    Чайники и френч-прессы
                                </Box>
                                <SlArrowUp size='25px' />
                            </Box>
                        </AccordionButton>
                        <AccordionPanel>
                            <Grid templateColumns="repeat(3, 1fr)" gap={4} className='grid'>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Все товары</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Афганские скороварки</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Казаны и котлы</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Учаги</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Кастрюли</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Мантоварки</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Сковороды</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Термосы</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Чайники и френч-прессы</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Сервировочная посуда</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Столовые приборы</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Бытовая техника</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Бытовая химия</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'>Товары для дома и сада</GridItem>
                                <GridItem w="150px" h='60px' _active={{ bg: '#E24C55', color: 'white' }} cursor='pointer' userSelect='none' display='flex' alignItems='center' justifyContent='center' textAlign='center' fontWeight='700' border='1px solid'></GridItem>
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>

    )
}
