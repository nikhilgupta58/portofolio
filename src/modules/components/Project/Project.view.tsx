import { Box, Flex, FlexProps, Image, Spacer, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import IProject from "../../Types/IProject";
import { useProjectContext } from "./utils/context";

export default function ProjectView() {
  const { data }: { data: IProject } = useProjectContext();
  const MotionFlex = motion<FlexProps>(Flex);
  return (
    <>
      <Flex
        w="100%"
        direction={"column"}
        justifyContent="start"
        alignItems={"center"}
        mt="40px"
        mb="20px"
      >
        <Text fontSize={"4.25rem"} margin={"2.5rem 0"} fontWeight="800">
          Projects
        </Text>
        <Box
          gridGap="2.5em"
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          justifyItems="center"
        >
          {data.allSanityProjects.nodes.map((project, id) => (
            <MotionFlex
              key={id}
              maxW={"min(80vw, 25em)"}
              boxShadow={
                "0.3px 0.5px 0.7px hsl(0 0% 63% / 0.34), 0.4px 0.8px 1px -1.2px hsl(0 0% 63% / 0.34), 1px 2px 2.5px -2.5px hsl(0 0% 63% / 0.34)"
              }
              whileHover={{
                boxShadow:
                  "0.3px 0.5px 0.7px hsl(0 0% 63% / 0.36), 0.8px 1.6px 2px -0.8px hsl(0 0% 63% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(0 0% 63% / 0.36), 5px 10px 12.6px -2.5px hsl(0 0% 63% / 0.36)",
                transition: { duration: 1, type: "spring" },
                scale: 1.1,
              }}
              borderRadius="1rem"
              direction={"column"}
              overflow="hidden"
              bgColor={"white"}
            >
              <Flex
                maxW="400px"
                h="250px"
                justifyContent={"center"}
                alignItems="center"
              >
                <Image
                  src={project.thumbnail}
                  w="100%"
                  h="100%"
                  objectFit={"contain"}
                />
              </Flex>
              <Flex
                p="1.5em"
                direction={"column"}
                justifyContent="space-between"
                lineHeight={1}
              >
                <Text fontWeight={"bold"} fontSize="20px">
                  {project.name}
                </Text>
                <Text lineHeight={1.7} my="16px">
                  {project.description}
                </Text>
              </Flex>
              <Spacer />
              <Flex px="1.5em" pb="1.5em" columnGap={"20px"}>
                <Flex
                  p="0.5rem 0.75rem 0.5rem 1rem"
                  alignItems={"center"}
                  fontWeight="bold"
                  color={"white"}
                  bgColor="black"
                  borderRadius={"9999px"}
                  cursor={"pointer"}
                  minW="130px"
                  onClick={() => {
                    window.open(project.live, "_blank");
                  }}
                >
                  Live Demo
                </Flex>

                <Flex
                  p="0.5rem 0.75rem 0.5rem 1rem"
                  alignItems={"center"}
                  fontWeight="bold"
                  color={"white"}
                  bgColor="black"
                  borderRadius={"9999px"}
                  cursor={"pointer"}
                  minW="100px"
                  onClick={() => {
                    window.open(project.github, "_blank");
                  }}
                >
                  GitHub
                </Flex>
              </Flex>
            </MotionFlex>
          ))}
        </Box>
      </Flex>
    </>
  );
}
