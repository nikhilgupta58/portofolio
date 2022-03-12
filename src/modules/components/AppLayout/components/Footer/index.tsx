import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ItemLayout from "../Header/components/ItemLayout";

const Items = [
  {
    title: "Linkedin",
    link: "",
  },
  {
    title: "GitHub",
    link: "",
  },
];

export default function Footer() {
  return (
    <Flex
      lineHeight={"1.15rem"}
      w="100%"
      alignItems={"center"}
      justifyContent="center"
      direction={"column"}
      m="1rem"
      boxSize={'border-box'}
    >
      <Flex columnGap={'30px'} >
        {Items.map((item, id) => (
          <Flex mb="1rem" key={id}>
            <ItemLayout data={item} fontWeight="400" />
          </Flex>
        ))}
      </Flex>
      <Flex fontSize="80%">
        <Text>
          © 2022-Current All Rights Reserved, Made by
          <span
            style={{
              marginLeft: "5px",
              fontFamily: "Nanum Pen Script",
            }}
          >
            {"<nikhi/>"}
          </span>
        </Text>
      </Flex>
    </Flex>
  );
}
