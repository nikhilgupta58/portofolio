import { Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function CustomBox({ children }: { children: React.ReactNode }) {
  const MotionFlex = motion<FlexProps>(Flex);
  return (
    <MotionFlex
      bgColor={"white"}
      padding="1.5em"
      borderRadius={"1em"}
      boxShadow={
        "0.3px 0.5px 0.7px hsl(0 0% 63% / 0.34), 0.4px 0.8px 1px -1.2px hsl(0 0% 63% / 0.34), 1px 2px 2.5px -2.5px hsl(0 0% 63% / 0.34)"
      }
      whileHover={{
        boxShadow:
          "0.3px 0.5px 0.7px hsl(0 0% 63% / 0.36), 0.8px 1.6px 2px -0.8px hsl(0 0% 63% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(0 0% 63% / 0.36), 5px 10px 12.6px -2.5px hsl(0 0% 63% / 0.36)",
        transition: { duration: 1, type: "spring" },
        border: "1px solid hsl(43, 100%, 76%)",
      }}
    >
      {children}
    </MotionFlex>
  );
}
