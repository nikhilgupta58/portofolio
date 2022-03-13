import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function ExploreCTA() {
  const MotionFlex = motion<FlexProps>(Flex);
  const hoverMotion = {
    hover: {
      scale: 1.2,
    }
  };
  return (
    <>
    <Flex 
        w="100%" 
        mt={'2.5%'}
        alignItems={"center"} 
        justifyContent="center"
    >
      <MotionFlex
        direction={"column"}
        rowGap={"2rem"}
        whileHover={"hover"}
        cursor="pointer"
        alignItems={'center'}
      >
        <MotionFlex
          p="0.5em 1em"
          fontWeight={"700"}
          color="white"
          borderRadius={"0.5em"}
          bgSize="200% 200%"
          variants={hoverMotion}
          letterSpacing={"1px"}
          fontSize="1.2rem"
          backgroundImage='linear-gradient(-45deg,#84ffdc,#dc84ff)'
          animate={{
            backgroundPosition:['0% 50%','100% 50%','0% 50%'],
            transition:{repeat:Infinity, duration:10}
          }}
        >
          <a href="#project">Explore!</a>
        </MotionFlex>
        <Flex
          w={"50px"}
          h="50px"
          alignItems={"center"}
          justifyContent="center"
          borderRadius={"100%"}
          bgColor="hsl(43, 100%, 76%)"
          color={"white"}
          fontSize="28px"
        >
          <ChevronDownIcon />
        </Flex>
      </MotionFlex>
    </Flex>
    </>
  );
}
