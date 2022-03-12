import { Flex, FlexProps, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import HoverMotion from "../../../../HoverMotion";

interface IItem extends FlexProps {
  data: {
    title: string;
    link: string;
    icon?: any;
  };
}

export default function ItemLayout({ data, ...props }: IItem) {
  const Icon = data.icon;
  return (
    <HoverMotion>
      <Flex
        alignItems={"center"}
        fontSize="1rem"
        fontWeight={"800"}
        letterSpacing="0.5px"
        cursor={"pointer"}
        mb="5px"
        {...props}
      >
        {data?.icon && <Icon />}
        <Text ml="0.2rem">{data?.title}</Text>
      </Flex>
    </HoverMotion>
  );
}
