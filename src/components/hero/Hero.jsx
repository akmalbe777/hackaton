import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    Text,
} from "@chakra-ui/react";
import { Car, Clock, Kash, Kor, Lunch, Medal, Mex } from '../../assets/imge';

const Hero = () => {
    return (
        <Box padding={{ base: '10px', md: '20px' }}>
            <Box display={'flex'} justifyContent={{ base: 'center', md: 'flex-start' }} marginLeft={{ xl: '215px' }}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Главная</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Каталог</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Казаны и котлы</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <br />
            {/* Icons */}
            <Box
                display={'flex'}
                alignItems={{ base: 'flex-start', lg: 'center' }}
                flexDirection={{ base: 'column', lg: 'row' }}
                justifyContent={{ base: 'flex-start', lg: 'center' }}
                flexWrap={'wrap'}
                >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={{ base: '20px', md: '30px' }}
                    background={'white'}
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                    marginBottom={{ base: '20px', lg: '0' }}
                    p='20px'
                >
                    <Box display={'flex'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }}  flexWrap={'wrap'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Kor} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Большой ассортимент и выбор товаров
                            </Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Medal} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Высокое качество продукции
                            </Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }} flexWrap={'wrap'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Mex} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Доставка по всей стране
                            </Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Clock} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Быстрая доставка и сборка
                            </Text>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} gap={{ base: '20px', md: '40px', lg: '80px' }} flexWrap={'wrap'}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Car} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Удобные способы оплаты
                            </Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
                            <Image src={Kash} boxSize={{ base: '50px', md: '70px' }} />
                            <Text width={{ base: '150px', md: '200px' }} textAlign={'center'}>
                                Гарантия на всю продукцию
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Image */}
                <Box>
                    <Image
                        src={Lunch}
                        width={{ xl: '1100px', md: '800px', base: '100%' }}
                        maxWidth={'100%'}
                        className='Lunch'
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
