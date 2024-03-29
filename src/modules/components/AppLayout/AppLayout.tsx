import { calc, Flex, FlexProps, Spacer } from "@chakra-ui/react";
import * as React from "react";
import { Helmet } from "react-helmet";
import "../../../components/layout.css";
import Footer from "./components/Footer";
import Heading from "./components/Header";
// markup
const AppLayout = ({
  head,
  children,
}: {
  head: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Helmet>
        <title>{head} | Nikhil Gupta</title>
      </Helmet>
      <Flex
        direction={"column"}
        minHeight={"100vh"}
        minW="100vw"
        overflow={"hidden"}
        bg={`
            linear-gradient(90deg, hsl(0, 0%, 100%) 21px, transparent 1%) center,
            linear-gradient(hsl(0, 0%, 100%) 21px, transparent 1%) center,
            hsl(0, 0%, 50%);
      `}
        bgSize="22px 22px"
        zIndex="-2"
        fontFamily={"'Raleway', sans-serif"}
      >
        <Flex direction={"column"} w="100%" minH='100vh'>
          <Heading />
          <Flex  direction='column'>
            {children}
          </Flex>
        </Flex>
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};

export default AppLayout;
