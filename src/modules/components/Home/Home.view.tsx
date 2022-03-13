import { Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'
import { IoSparkles } from 'react-icons/io5'

export default function HomeView(){
    return(
        <Flex
          h="80%"
          gap="4rem"
          justifyContent={{
            base:'center',
            lg:"space-evenly"
          }}
          alignItems="center"
          flexWrap={"wrap"}
          direction={{
            base:'column',
            lg:'row'
          }}
        >
          <Flex
            fontSize={"4rem"}
            fontWeight="800"
            lineHeight={"0.9"}
            direction="column"
          >
            <Flex>
              <Text>Hello.</Text>
              <Flex color={"#f7ae60"} ml="10px">
                <IoSparkles />
              </Flex>
            </Flex>
            <Text>I am Nikhil</Text>
            <Text
              fontSize={"0.935rem"}
              letterSpacing="-0.0025em"
              fontWeight={"400"}
              fontStyle="italic"
              ml={"8px"}
            >
              I design {"&"} build things for the web.
            </Text>
          </Flex>

          <Flex maxW={'22.5rem'}>
            <Image 
              src={'https://res.cloudinary.com/dhiu02sfh/image/upload/v1647182179/laptop_zinixw.svg'}
              w={'100%'}
              h='100%'
            />
          </Flex>
        </Flex>
    )
}