import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { logo,  logotext2, watch1 } from '../assets'
import { CiMail } from "react-icons/ci";
export const Footer = () => {
    return (

        <Box background='#333333' >
            <Box>
                  <Flex align="center" gap={5} h="60px" justify="space-between" px={'659px'} pt={'12px'}>
                    <Flex align="center" gap="3px" h="57px" cursor="pointer">
                        <Image color={'#fff'} borderRadius='50%' src={logo} alt="logo" />
                        <Box pt="13px">
                            <Image  src={logotext2} alt="logotext" />
                            <Text fontSize="10px" color="#fff" pb={'6px'}>ХОЗТОВАРЫ С ДОСТАВКОЙ</Text>
                        </Box>
                    </Flex>
                    </Flex>

                < hr style={{margin:'18px ',width: '1480px'} } />
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'}  >
                        <Text color={'#fff'}  mb={'23px'}>Разделы сайта</Text>
                        <Text>Главная</Text>
                        <Text>Акции</Text>
                        <Text>Распродажа</Text>
                        <Text>Оплата и доставка</Text>
                        <Text>Гарантия и возврат</Text>
                        <Text>О нас</Text>
                        <Text>Контакты</Text>


                    </Box>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'} >
                        <Text color={'#fff'}  mb={'30px'}>Каталог товаров</Text>
                        <Text>Афганские скороварки </Text>
                        <Text>Казаны и котлы</Text>
                        <Text>Учаги</Text>
                        <Text>Товары для дома и сада</Text>


                    </Box>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'}  >
                        <Text>Кастрюли</Text>
                        <Text>Мантоварки</Text>
                        <Text>Сковороды</Text>


                    </Box>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'}>
                        <Text>Термосы</Text>
                        <Text>Чайники и френч-прессы</Text>
                        <Text>Сервировочная посуда</Text>


                    </Box>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'}  >
                        <Text>Столовые приборы</Text>
                        <Text>Бытовая техника</Text>
                        <Text>Бытовая химия</Text>
                    </Box>
                    <Box display='flex' gap='4px' flexDir='column' px={'60px'} color={'#fff'}  >
                        <Text color={'#fff'}  mb={'23px'}>Контакты</Text>
                        <Text>Революционная 56 <br />
                        +7 (347) 276-91-92</Text>
                        <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                        <Image w={'30px'} h={'27px'}  src={watch1} alt="watch1" /> 
                        <Text>
                        Ежедневно <br />
                        10:00-21:00
                        </Text>
                        </Box>
                        
                        <Box display={'flex'} gap={'11px'} alignItems={'center'}>
                        <CiMail />
                        <Text>info@newsite. </Text>
                        </Box>


                    </Box>
                </Box>
                <hr style={{width: '1240px'}} />
                <Box>
                    
                </Box>
            </Box>
        </Box>
    )
}
