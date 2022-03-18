import {
  Flex,
  Text,
  Image,
  Box,
  UnorderedList,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import IResume from "../../Types/IResume";
import CustomBox from "./components/CustomBox";
import { useResumeContext } from "./utils/context";
import { GrMail } from "react-icons/gr";
import {
  BsFillTelephoneFill,
  BsFillHouseFill,
  BsGithub,
  BsDot,
} from "react-icons/bs";
import { AiOutlineDesktop, AiFillLinkedin } from "react-icons/ai";
import SkillBox from "./components/SkillBox";

export default function ResumeView() {
  const { data }: { data: IResume } = useResumeContext();
  const textStyle = {
    textDecoration: "underline",
    textDecorationColor: "hsl(43, 100%, 76%)",
    textDecorationThickness: "2px",
    textUnderlineOffset: "2px",
  };
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      m="5em auto 2em auto"
      gridGap={"2em"}
      w={"min(80%, 70rem)"}
    >
      <CustomBox>
        <Flex
          flex={1}
          fontSize={{
            base: "12vw",
            sm: "5vw",
            md: "3vw",
          }}
          fontWeight={"700"}
          direction="column"
          justifyContent={"center"}
        >
          <Text>Nikhil Gupta</Text>
          <Text
            alignSelf={"flex-end"}
            fontSize="10px"
            mt={"-1.5em"}
            ml="1em"
            fontWeight="400"
            style={textStyle}
          >
            Web Developer
          </Text>
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="start"
          rowGap={"5px"}
        >
          <Flex alignItems={"center"} columnGap="5px">
            <GrMail />
            <Text>{data.sanityResume.contact.mail}</Text>
          </Flex>

          <Flex alignItems={"center"} columnGap="5px">
            <BsFillTelephoneFill />
            <Text>{data.sanityResume.contact.phone}</Text>
          </Flex>

          <Flex alignItems={"center"} columnGap="5px">
            <BsFillHouseFill />
            <Text>{data.sanityResume.contact.address}</Text>
          </Flex>

          <Flex alignItems={"center"} columnGap="5px">
            <AiOutlineDesktop />
            <Text>{data.sanityResume.contact.website}</Text>
          </Flex>

          <Flex alignItems={"center"} columnGap="5px">
            <AiFillLinkedin />
            <Text>{data.sanityResume.contact.linkedin}</Text>
          </Flex>

          <Flex alignItems={"center"} columnGap="5px">
            <BsGithub />
            <Text>{data.sanityResume.contact.github}</Text>
          </Flex>
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="flex-start"
          rowGap={"5px"}
        >
          <Text fontSize="1.5em" fontWeight={"bold"}>
            Summary
          </Text>
          <Text>{data.sanityResume.summary}</Text>
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="flex-start"
          rowGap={"5px"}
        >
          <Text fontSize="1.5em" fontWeight={"bold"}>
            Key skills
          </Text>
          <Flex flexWrap={"wrap"}>
            {data.sanityResume.skills.map((skill, id) => (
              <SkillBox text={skill} key={id} />
            ))}
          </Flex>
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="flex-start"
          rowGap={"5px"}
        >
          <Text fontSize="1.5em" fontWeight={"bold"}>
            Work history
          </Text>
          {data.sanityResume.workHistory.map((work, id) => (
            <Flex key={id} direction={"column"}>
              <Flex columnGap={"5px"}>
                <Flex
                  color={"hsl(43, 100%, 76%)"}
                  alignItems={"center"}
                  fontSize="30px"
                >
                  <BsDot />
                </Flex>
                <Text
                  style={textStyle}
                  fontWeight="600"
                  textUnderlineOffset={"1px"}
                >
                  {work.position}
                </Text>
                <Text>
                  at {work.company} -- {work.time}
                </Text>
              </Flex>
              <Flex
                marginInlineStart={"40px"}
                borderLeft={"2px solid hsl(43, 100%, 76%)"}
                mb="2rem"
                ml="0.85rem"
                pl="1.5rem"
              >
                <Text>{work.description}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="flex-start"
          rowGap={"5px"}
        >
          <Text fontSize="1.5em" fontWeight={"bold"}>
            Education
          </Text>
          <UnorderedList>
            {data.sanityResume.education.map((edu, id) => (
              <ListItem key={id}>{edu}</ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </CustomBox>

      <CustomBox>
        <Flex
          flex={1}
          direction="column"
          lineHeight={1.7}
          justifyContent="center"
          alignItems="flex-start"
          rowGap={"5px"}
        >
          <Text fontSize="1.5em" fontWeight={"bold"}>
            Certifications
          </Text>
          <UnorderedList>
            {data.sanityResume.certifcation.map((certificate, id) => (
              <ListItem key={id}>{certificate}</ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </CustomBox>
    </Box>
  );
}
