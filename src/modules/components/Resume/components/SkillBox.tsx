import { Flex } from "@chakra-ui/react";
import React from "react";

export default function SkillBox({text}:{text:string}){
    return(
        <Flex
            p='0.25rem 0.65rem'
            mr='0.5rem'
            mt='0.5rem'
            borderRadius={'0.5rem'}
            lineHeight={1.7}
            bgColor='hsl(43, 100%, 76%)'
            color={'white'}
            fontWeight='500'
        >
            {text}
        </Flex>
    )
}