import { Flex } from "@chakra-ui/react";
import React from "react";
import About from "../modules/components/About";
import AppLayout from "../modules/components/AppLayout/AppLayout";
import { Resume } from "../modules/components/Resume";

export default function IndexPage() {
  return (
    <AppLayout head="Resume">
      <Resume/>
    </AppLayout>
  );
}
