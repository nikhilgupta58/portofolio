import { Flex, FlexProps, transition } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function HoverMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const MotionFlex = motion<FlexProps>(Flex);
  const hoverMotion = {
    hover: {
      opacity: 1,
      width:'95%',
      transition: {
        duration: 0.5,
        type: "spring",
        ease: "easeIn",
      },
    },
  };
  return (
    <MotionFlex direction={"column"} whileHover="hover">
      {children}
      <MotionFlex
        h="2.5px"
        width={'0%'}
        bgColor={"currentcolor"}
        variants={hoverMotion}
        opacity="0"
        borderRadius={"9999px"}
      />
    </MotionFlex>
  );
}
