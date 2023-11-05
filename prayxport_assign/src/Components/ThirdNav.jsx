"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Links = [
  "Product",
  "Abouts Us",
  "Recipes",
  "Golden Grows Here",
  "Where to Buy",
];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "orange",
      }}
      href={"#"}>
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({ repeat: -1 });
    t1.to(boxRef1.current, { x: -60, duration: 8, ease: "power2.inOut" });
    const t2 = gsap.timeline({ repeat: -1 });
    t2.to(boxRef2.current, {
      x: 60,
      duration: 8,
      ease: "power2.inOut",
    });

    return () => {
      t1.kill();
      t2.kill();
    };
  }, []);
  return (
    <Box
      bg="rgb(250,196,75)"
      px={4}
      width={"90%"}
      margin="auto"
      position={"sticky"}
      zIndex={2}
      top={"0"}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          color={"black"}
          bg={"white"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={10}
          margin={"auto"}
          alignItems={"center"}
          fontSize={{ md: "14px", xl: "18px" }}
          fontWeight={"400"}>
          <Image
            ref={boxRef1}
            src="https://www.lays.com/sites/lays.com/themes/lays/img/logo-lays.png?v=2"
            alt="haldiram"
            height={"80px"}
            width={"fit-content"}
          />
          <HStack
            fontWeight={"500"}
            as={"nav"}
            spacing={10}
            display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Flex
              ref={boxRef2}
              mt={0}
              gap={5}
              fontSize={"30px"}
              _hover={{ cursor: "pointer" }}>
              <RiAccountCircleLine />
              <AiOutlineHeart />
              <HiOutlineShoppingBag />
            </Flex>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
