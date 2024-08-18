import React, { useState } from 'react';
import {
    Image,
    Flex,
    Input,
    Button,
    IconButton,
    useDisclosure,
    Link,
    Text,
    Stack,
    Box,
} from '@chakra-ui/react';
import { FaVk, FaTelegramPlane, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { logo, logotext, tg, vk } from '../assets';
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value1, setValue1] = useState('all');

    return (
        <Box px='100px'>
            <Box>
                <Flex align="center" gap={5} h="60px" justify="space-between">
                    <Flex align="center" gap="1px" h="57px" cursor="pointer">
                        <Image borderRadius='50%' src={logo} alt="logo" />
                        <Box pt="13px">
                            <Image src={logotext} alt="logotext" />
                            <Text fontSize="10px" color="#494949">ХОЗТОВАРЫ С ДОСТАВКОЙ</Text>
                        </Box>
                    </Flex>

                    <Flex align="center" gap={3} display={{ base: 'none', md: 'flex' }}>
                        <Button
                            leftIcon={<MdMenu />}
                            bg="#E24C55"
                            color="white"
                            w="200px"
                            h="40px"
                            _hover='none'
                            borderRadius="none">
                            Каталог товаров
                        </Button>

                        <Flex w="318px" h="45px" border="1px" borderColor="#CECDCD" align="center">
                            <Input
                                placeholder="Введите артикул или название товара..."
                                w="280px"
                                h="42px"
                                pl="10px"
                                border="none"
                                outline="none"
                                fontSize="13px"
                            />
                            <Flex w="40px" h="43px" bg="#CECDCD" align="center" justify="center">
                                <IoSearchOutline size='25' />
                            </Flex>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <Image h="42px" src={vk} alt="vk" />
                            <Image borderRadius={'50%'}h="42px" src={tg} alt="tg" />
                            <Image w="42px" h="42px" src={'sup'} alt="sup" />
                        </Flex>

                        <Flex align="center" gap={2}>
                            <IconButton icon={<FaHeart />} aria-label="favorites" variant="outline" />
                            <IconButton icon={<MdOutlineShoppingCart />} aria-label="cart" variant="outline" />
                        </Flex>
                    </Flex>

                    <Button
                        bg="#E24C55"
                        color="white"
                        w={{ base: 'full', md: '154px' }}
                        h="40px"
                        onClick={onOpen}>
                        Зарегистрироваться
                    </Button>
                </Flex>
            </Box>
            {isOpen && (
                <Box className="modal-box" pos="fixed" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="1000" bg="white" p={5} borderRadius="md" boxShadow="lg" maxW="400px" w="full">
                    {/* Modal Header */}
                    <Flex justify="space-between" align="center" mb={4}>
                        <Flex align="center" gap="3px" h="57px">
                            <Image src={'logo'} alt="logo" />
                            <Box pt="13px">
                                <Image w="95px" h="21px" src={'logotext'} alt="logotext" />
                                <Text fontSize="10px" color="#494949">ХОЗТОВАРЫ С ДОСТАВКОЙ</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            icon={<IoMdClose color='#5B5B5B' size={'29px'} />}
                            aria-label="close"
                            variant="ghost"
                            onClick={onClose}
                        />
                    </Flex>

                    <Box w="full" h="1px" bg="#D7D7D7" mt={2} mb={4} />

                    {/* Inputs */}
                    <Stack spacing={4}>
                        <Input placeholder="Имя" borderColor="#CECDCD" />
                        <Input placeholder="Фамилия" borderColor="#CECDCD" />
                        <Input placeholder="Имя пользователя" borderColor="#CECDCD" />
                        <Input placeholder="пароль" borderColor="#CECDCD" />

                        <Link fontSize="14px" fontWeight="700" color="#0094FF" textAlign="center">
                            если у вас есть учетная запись
                        </Link>

                        <Button bg="#E24C55" color="white" w="full" h="40px" borderRadius="none">
                            Зарегистрироваться
                        </Button>
                    </Stack>
                </Box>
            )}

            <Box>
                <Flex justify="space-between" fontSize="16px" fontWeight="600" my={4}>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Главная</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Акции</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Распродажа</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Оплата и доставка</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Гарантия и возврат</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>О нас</Text>
                    <Text cursor="pointer" _hover={{ color: 'gray', transition: '0.2s' }}>Контакты</Text>
                </Flex>
            </Box>

        </Box>
    );
};

export default Navbar;
