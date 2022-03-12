import { Flex, FlexProps, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import HoverMotion from "../../../../HoverMotion";
import { navigate } from "gatsby"

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
        onClick={() => {
          if (data?.title === 'About')
            navigate('/about')
          else if (data?.title === 'Projects')
            navigate('/projects')
          else if (data?.title === 'Resume')
            navigate('/resume')
          else
            window.open(data?.link, "_blank");
        }}
        {...props}
      >
        {data?.icon && <Icon />}
        <Text ml="0.2rem">{data?.title}</Text>
      </Flex>
    </HoverMotion>
  );
}
