import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    Heading,
    Image,
    Input,
  } from "@chakra-ui/react";
  import React from "react";
  import { Idish, Logo } from "../../assets/imge";
  
  const Footer = () => {
    return (
      <div>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexWrap="wrap"
          flexDirection={["column", "column", "row"]} // For responsive layout
          padding={["20px", "40px"]} // Adjust padding for different screen sizes
        >
          <Image src={Idish} width={["100%", "300px", "400px"]} marginBottom={["20px", "20px", "0"]} />
  
          <Box display="flex" flexDirection="column" textAlign="center">
            <Heading fontSize={["22px", "27px"]} fontWeight="600">
              Поможем выбрать лучшее!
            </Heading>
            <br />
            <Image
              borderRadius="50%"
              src={Logo}
              boxSize={["80px", "100px"]}
              textAlign="center"
              marginTop="5px"
              marginLeft={'120px'}
              className="Logo"
            />
            <br />
            <Heading fontSize={["50px", "70px"]} marginTop="5px">
              ХОЗУФА
            </Heading>
            <Heading
              fontSize={["20px", "23px"]}
              fontWeight="300"
              marginTop="15px"
            >
              ХОЗТОВАРЫ С ДОСТАВКОЙ
            </Heading>
          </Box>
  
          <Box
            display="flex"
            flexDirection="column"
            gap="20px"
            width={["100%", "auto"]}
          >
            <Heading
              fontSize="23px"
              fontWeight="500"
              width={["100%", "310px"]}
              textAlign="center"
            >
              Проконсультируем и поможем Вам с выбором!
            </Heading>
  
            <Box>
              <Heading fontSize="17px" fontWeight="300" width="100%">
                Ваше имя
              </Heading>
              <Input placeholder="" background="#E8E8E8" width="100%" />
            </Box>
  
            <Box>
              <Heading fontSize="17px" fontWeight="300" width="100%">
                Номер телефона
              </Heading>
              <Input
                placeholder=""
                background="#E8E8E8"
                type="number"
                width="100%"
              />
            </Box>
  
            <Box textAlign="center">
              <br />
              <Button
                colorScheme="#E8E8E8"
                background="#E24C55"
                width={["100%", "375px"]}
              >
                Получить консультацию
              </Button>
              <br />
              <Checkbox
                defaultChecked
                fontWeight="100"
                fontSize="14px"
                marginTop="10px"
              >
                Согласен на обработку персональных данных *
              </Checkbox>
            </Box>
          </Box>
        </Box>
      </div>
    );
  };
  
  export default Footer;
  