import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"bolder"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const socialIconRefs = {
    facebook: useRef(null),
    instagram: useRef(null),
    twitter: useRef(null),
    youtube: useRef(null),
    pinterest: useRef(null),
    text1: useRef(null),
    text2: useRef(null),
    text3: useRef(null),
    text4: useRef(null),
  };
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const t1 = gsap.timeline({ repeat: -1 });
    const t2 = gsap.timeline({ repeat: -1 });
    const t3 = gsap.timeline({ repeat: -1 });
    const t4 = gsap.timeline({ repeat: -1 });

    t1.from(socialIconRefs.text1.current, {
      x: -20,
      duration: 3,
    });
    t2.from(socialIconRefs.text2.current, {
      x: -20,
      duration: 3,
    });
    t3.from(socialIconRefs.text3.current, {
      x: -20,
      duration: 3,
    });
    t4.from(socialIconRefs.text4.current, {
      x: -20,
      duration: 3,
    });
    tl.from(socialIconRefs.facebook.current, {
      x: -20,
      duration: 3,
    })
      .from(socialIconRefs.instagram.current, {
        opacity: 0,
        duration: 3,
        x: -20,
        stagger: 0.2,
      })
      .from(socialIconRefs.twitter.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 3,
      })
      .from(socialIconRefs.youtube.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 3,
      })
      .from(socialIconRefs.pinterest.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 3,
      });
    const text = gsap.timeline({ repeat: -1 });

    text.from(titleRef.current, {
      x: -20,
      duration: 6,
    });

    text.from(underlineRef.current, {
      width: 0,
      duration: 9,
    });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <Box
      width={"90%"}
      margin="auto"
      bg="rgb(51,51,51)"
      paddingTop={8}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Flex
        width={{ base: "50%", sm: "40%", md: "30%", xl: "20%" }}
        margin={"auto"}
        justifyContent={"space-around"}>
        <Box
          ref={socialIconRefs.facebook}
          borderRadius={"50%"}
          border="1px solid rgb(234,32,6)"
          bg={"rgb(234,32,6)"}
          padding={1.5}>
          <AiFillFacebook fontSize={"25px"} color="white" />
        </Box>

        <Box
          ref={socialIconRefs.instagram}
          borderRadius={"50%"}
          border="1px solid rgb(234,32,6)"
          bg={"rgb(234,32,6)"}
          padding={1.5}>
          <AiFillInstagram fontSize={"25px"} color="white" />
        </Box>

        <Box
          ref={socialIconRefs.twitter}
          borderRadius={"50%"}
          border="1px solid rgb(234,32,6)"
          bg={"rgb(234,32,6)"}
          padding={1.5}>
          <AiOutlineTwitter fontSize={"25px"} color="white" />
        </Box>

        <Box
          ref={socialIconRefs.youtube}
          borderRadius={"50%"}
          border="1px solid rgb(234,32,6)"
          bg={"rgb(234,32,6)"}
          padding={1.5}>
          <AiFillYoutube fontSize={"25px"} color="white" />
        </Box>

        <Box
          ref={socialIconRefs.pinterest}
          borderRadius={"50%"}
          border="1px solid rgb(234,32,6)"
          bg={"rgb(234,32,6)"}
          padding={1.5}>
          <BiLogoPinterest fontSize={"25px"} color="white" />
        </Box>
      </Flex>
      <Box py={10}>
        <Flex
          borderBottom="4px solid grey"
          margin="auto"
          ref={underlineRef}
          width={"50%"}></Flex>
        <Text
          ref={titleRef}
          pt={6}
          fontSize={"sm"}
          textAlign={"center"}
          color="white">
          Copyright © 2023 Haldiram's India Pvt Ltd <span> |</span> All rights
          reserved
        </Text>
      </Box>
    </Box>
  );
}
