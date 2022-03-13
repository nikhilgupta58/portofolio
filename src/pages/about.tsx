import { Flex } from "@chakra-ui/react";
import React from "react";
import About from "../modules/components/About";
import AppLayout from "../modules/components/AppLayout/AppLayout";

export default function IndexPage() {
  return (
    <AppLayout head="About">
      <About />
    </AppLayout>
  );
}
