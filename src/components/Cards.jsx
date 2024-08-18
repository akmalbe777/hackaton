import React from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { CiHeart } from "react-icons/ci";
import { card } from '../assets';

const Card = () => (
  <Box borderWidth="1px" mb="4">
    <Box position="relative">
      <Box position="absolute" top="8px" left="8px">
        <Text fontSize="sm" color='white'>
          Артикул: 515314
        </Text>
        <Text fontSize="lg" color='white' fontWeight="600">
          Сковороды
        </Text>
      </Box>
      <Image src={card} alt="Product Image" width='100%' />
      <Box position="absolute" top="8px" right="8px">
        <CiHeart color="white" size='30' />
      </Box>
    </Box>

    <Box p="4">
      <Heading size="md" mt="2" fontWeight="bold">
        Сковорода-сотейник чугунная
      </Heading>
      <Text fontSize="md" color="gray.600">
        ОПТИМА-BLACK, 240 x 60 мм
      </Text>

      <Box mt="4" display="flex" alignItems="center">
        <Box bg='#E24C55' color='white' mr="5" px="2">
          -30%
        </Box>
        <Heading size="md" color="red.300" mr='5' as="s">
          2 250
        </Heading>
        <Heading size="md" color="black">
          2 250
        </Heading>
      </Box>
    </Box>
  </Box>
);

export default function Cards() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' }}
      gap="4"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Box>
  );
}
