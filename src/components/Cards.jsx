import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { CiHeart } from "react-icons/ci";
import { card } from '../assets';
import axios from 'axios';


export default function Cards() {
  const [value, setValue] = useState()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/product/get')
      .then((res) => {
        setData(res.data)
      })
  }, [data])
  return (
    <Box>
      {data && data.map((item) => {
        <Box borderWidth="1px" mb="4" className='cards-container'>
          <Box position="relative">
            <Box position="absolute" top="8px" left="8px">
              <Text fontSize="sm" color='white'>
                {item.info}
              </Text>
              <Text fontSize="lg" color='white' fontWeight="600">
                {item.name}
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
      })
      }
    </Box>
  )
}
