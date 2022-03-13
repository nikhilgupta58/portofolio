import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Flex
      w="100%"
      direction={"column"}
      justifyContent="start"
      alignItems={"center"}
      // h='100vh'
      my='40px'
    >
      <Text fontSize={"4.25rem"} margin={"2.5rem 0"} fontWeight="800">
        About
      </Text>
      <Flex 
        w="95%" 
        alignItems={"self-start"} 
        h={{
          base:'auto',
          md:'60%'
        }}
      >
        <Flex
          w="100%"
          display={{
            base: "none",
            lg: "inherit",
          }}
        >
          <Image src="https://res.cloudinary.com/dhiu02sfh/image/upload/v1647182180/presentation_seetb3.svg" w="100%" h="100%" />
        </Flex>
        <Flex
          lineHeight={"1.6"}
          direction="column"
          rowGap={"1em"}
          fontSize="1.35rem"
          p="0 2rem"
          alignSelf={"center"}
          minW="300px"
          py={'20px'}
        >
          <Text>
            I'm a developer who has recently started journey as a web developer.
          </Text>
          <Text>
            I am a self-motivated student with a strong organization, time
            management and communication skills.
          </Text>
          <Text>
            I can work independently and participate in a team that pays close
            attention to details.
          </Text>
        </Flex>
        <Flex
          w="100%"
          display={{
            base: "none",
            md: "inherit",
          }}
          alignSelf={{
            md: "center",
            lg: "self-end",
          }}
        >
          <Image src="https://res.cloudinary.com/dhiu02sfh/image/upload/v1647182179/coding_agdoev.svg" w="100%" h="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
}
