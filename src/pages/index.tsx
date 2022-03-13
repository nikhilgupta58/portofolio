import { calc, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import * as React from "react";
import AppLayout from "../modules/components/AppLayout/AppLayout";
import { IoSparkles } from "react-icons/io5";
import { Home } from "../modules/components/Home";
import ExploreCTA from "../modules/components/Home/components/ExploreCTA";
import About from "../modules/components/About";
import { Project } from "../modules/components/Project";
// markup
const IndexPage = () => {
  return (
    <AppLayout head="Home">
      <Flex 
        w="100%" 
        h='calc(100vh - 100px)' 
        direction="column"
      >
        <Home/>
        <ExploreCTA/>
      </Flex>
      <About/>
      <Flex id="project">
      <Project/>
      </Flex>
    </AppLayout>
  );
};

export default IndexPage;
