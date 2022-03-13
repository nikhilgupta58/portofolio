import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import DrawerBox from "./DrawerBox";

export default function SideBox() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const iconVariants = {
    opened: {
      opacity: 1,
      rotate: 135,
    },
    closed: {
      opacity: 0,
      rotate: 270,
    },
  };
  const hamIcon = {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const MotionFlex = motion<FlexProps>(Flex);
  return (
    <>
      <Flex
        p="33px 44px"
        fontSize={"40px"}
        display={{
          base: "inherit",
          md: "none",
        }}
        onClick={() => {
          if (isOpen) onClose();
          else onOpen();
        }}
        cursor="pointer"
      >
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size={"lg"}
          placement={"left"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody bgColor="hsl(43, 100%, 76%)">
              <DrawerBox />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <MotionFlex
          variants={hamIcon}
          animate={isOpen ? "opened" : "closed"}
          pos="absolute"
          transition={{ duration: "0.2" }}
          zIndex={1}
          top={'10px'}
          left={'20px'}
        >
          <HamburgerIcon />
        </MotionFlex>
        <MotionFlex
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          pos="absolute"
          transition={{ duration: "0.1" }}
          zIndex={50}
          top={'10px'}
          left={'20px'}
        >
          <AddIcon />
        </MotionFlex>
      </Flex>
    </>
  );
}
