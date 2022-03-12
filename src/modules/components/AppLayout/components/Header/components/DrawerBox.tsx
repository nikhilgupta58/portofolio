import { Flex } from "@chakra-ui/react";
import React from "react";
import { Items } from "../../../../../../utils/Items";
import { Link } from "../../../../../../utils/Link";
import HoverMotion from "../../../../HoverMotion";
import ItemLayout from "./ItemLayout";

export default function DrawerBox() {
  return (
    <Flex
      w="100%"
      h="80%"
      justifyContent="center"
      rowGap={"20px"}
      alignItems={"center"}
      direction="column"
    >
      <Flex
        fontWeight={"800"}
        letterSpacing="0.5px"
        fontSize={"2rem"}
        fontFamily={"'Nanum Pen Script', cursive;"}
        mb="20px"
      >
        <HoverMotion>{"<nikhi/>"}</HoverMotion>
      </Flex>
      {Items.map((item, id) => (
        <ItemLayout data={item} key={id} />
      ))}

      <Flex
        mt={"20px"}
        whiteSpace={"nowrap"}
        flexWrap="nowrap"
        columnGap={"15px"}
      >
        {Link.map((item, id) => (
          <ItemLayout data={item} key={id} />
        ))}
      </Flex>
    </Flex>
  );
}
