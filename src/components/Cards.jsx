import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Heading, Flex, Spinner } from '@chakra-ui/react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';

const Card = ({ isOwn }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://full-api.onrender.com/api/product/get").then((res) => {
      setLoading(false);
      setData(res.data.data);
    });
  }, []);

  return (
    <Flex justify="center" wrap="wrap">
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Flex justify="start" wrap="wrap" gap="7" align="center">
          {data.filter(e => isOwn ? e.userId.username === localStorage.getItem("username") : true)
            .map((item, i) => (
              <Box
                key={i}
                w="229px"
                h="240px"
                bg="white"
                borderRadius="8px"
                position="relative"
              >
                <Flex
                  px="0"
                  pt="3"
                  justify="space-between"
                  align="center"
                  position="absolute"
                  zIndex="50"
                  w="100%"
                >
                  <Box pl="10px" fontSize="10px" color="white" fontWeight="500">
                    <Text isTruncated w="100px">{item.name}</Text>
                  </Box>
                  <Box pr="5">
                    <Button
                      onClick={handleClick}
                      variant="unstyled"
                      _hover={{ bg: 'transparent' }}
                    >
                      {show ? (
                        <FaHeart color="red" size="30px" />
                      ) : (
                        <CiHeart color="white" size="30px" />
                      )}
                    </Button>
                  </Box>
                </Flex>

                <Flex justify="center" position="relative" zIndex="10">
                  <Image src={item.url} alt="img" />
                </Flex>

                <Box bg="white">
                  <Flex flexDirection="column" justify="center" w="90%" m="auto">
                    <Heading textAlign="center" fontSize="14px" fontWeight="500">
                      {item.info}
                    </Heading>
                    <Flex justify="space-between" align="center">
                      <Box
                        w="60px"
                        h="20px"
                        bg="#E24C55"
                        fontSize="13px"
                        fontWeight="600"
                        color="white"
                        textAlign="center"
                      >
                        -{item.seil}%
                      </Box>
                      <Text fontSize="16px" fontWeight="600" textDecoration="line-through" textDecorationColor="red">
                        {item.oldPrice}
                      </Text>
                      <Text fontSize="18px" fontWeight="700">
                        {item.newPrice}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Card;
