import { Flex } from "@chakra-ui/react";
import React from "react";
import ItemLayout from "./components/ItemLayout";
import HoverMotion from "../../../HoverMotion";
import SideBox from "./components/SideBox";
import { Items } from "../../../../../utils/Items";
import { Link } from "../../../../../utils/Link";

export default function Heading() {
  return (
    <>
    <SideBox/>
    <Flex
      p="33px 44px"
      alignItems={"center"}
      w="100%"
      justifyContent="space-between"
      display={{
        base:'none',
        sm:'none',
        md:'inherit',
      }}
    >
      <Flex
        fontWeight={"800"}
        letterSpacing="0.5px"
        fontSize={"1.6rem"}
        fontFamily={"'Nanum Pen Script', cursive;"}
      >
        <HoverMotion>{"<nikhi/>"}</HoverMotion>
      </Flex>

      <Flex
        whiteSpace={"nowrap"}
        flexWrap="nowrap"
        columnGap={'30px'}
      >
        {Items.map((item, id) => (
          <ItemLayout data={item} key={id} />
        ))}
      </Flex>

      <Flex
        whiteSpace={"nowrap"}
        flexWrap="nowrap"
        columnGap={'15px'}
      >
        {Link.map((item, id) => (
          <ItemLayout data={item} key={id} />
        ))}
      </Flex>
    </Flex>
    </>
  );
}
