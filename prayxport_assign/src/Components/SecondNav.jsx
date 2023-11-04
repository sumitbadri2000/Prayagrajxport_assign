import { Box, Flex, IconButton, Image, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function SecondNav() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({ repeat: -1 });
    t1.to(boxRef1.current, { x: -60, duration: 2, ease: "power2.inOut" });
    const t2 = gsap.timeline({ repeat: -1 });
    t2.to(boxRef2.current, {
      x: 60,
      duration: 2,
      ease: "power2.inOut",
    });

    return () => {
      t1.kill();
      t2.kill();
    };
  }, []);
  return (
    <>
      <Flex
        justifyContent={"space-around"}
        mt={1}
        display={{ base: "none", sm: "none", md: "flex", xl: "flex" }}>
        <Flex mt={5} ref={boxRef1}>
          <Input
            type="text"
            fontSize={"20px"}
            placeholder={"Search here..."}
            height={14}
            bg={"rgb(247,247,247)"}
          />
          <IconButton
            mt={-0}
            ml={-0}
            aria-label="Search database"
            icon={<SearchIcon />}
            height={14}
            fontSize={24}
            padding={"15px"}
            color={"white"}
            bg={"rgb(234,32,6)"}
          />
        </Flex>
        <Image
          src="https://www.haldirams.com/static/version1698855975/frontend/Shoptimize/theme-hnagpur/en_US/images/logo.svg"
          alt="haldiram"
          height={"100px"}
          width={"fit-content"}
        />
        <Flex
          ref={boxRef2}
          mt={5}
          gap={5}
          fontSize={"50px"}
          _hover={{ cursor: "pointer" }}>
          <RiAccountCircleLine />
          <AiOutlineHeart />
          <HiOutlineShoppingBag />
        </Flex>
      </Flex>
    </>
  );
}
