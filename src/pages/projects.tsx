import { Flex } from "@chakra-ui/react";
import React from "react";
import About from "../modules/components/About";
import AppLayout from "../modules/components/AppLayout/AppLayout";
import { Project } from "../modules/components/Project";

export default function IndexPage() {
  return (
    <AppLayout head="Projects">
      <Project/>
    </AppLayout>
  );
}
