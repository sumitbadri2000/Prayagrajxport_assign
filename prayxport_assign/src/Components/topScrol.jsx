import React, { useRef, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { TimelineMax, Power1, gsap } from "gsap";
import { AiFillTag } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import SecondNav from "./SecondNav";
import ThirdNav from "./ThirdNav";

const Navbar = () => {
  const textRef = useRef(null);
  const traRef = useRef(null);

  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1 });
    tl.from(textRef.current, 2, { x: -400, duration: 5 }).to(
      textRef.current,
      2,
      { x: 20, duration: 1 }
    );
    var t2 = gsap.timeline({ repeat: -1 });
    t2.from(traRef.current, 2, { x: -400, duration: 5 }).to(traRef.current, 2, {
      x: 20,
      duration: 1,
    });
    return () => {
      t2.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* //first navbar */}
      {/* <Flex
        justifyContent="space-around"
        alignItems="center"
        background="rgb(250, 196, 75)">
        <Text
          ref={textRef}
          fontWeight="bold"
          color="black"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          fontSize={{ base: "8px", sm: "12px", md: "14px", xl: "16px" }}>
          Delivering PAN India || Orders placed after 1st of November may get
          delayed and might be delivered shortly.
        </Text>

        <Flex gap={5} ref={traRef}>
          <Flex
            alignItems="center"
            justifyContent="center"
            border="none"
            bg="red"
            px={4}
            py={2}
            borderRadius="30px"
            color="white"
            fontWeight="bold"
            fontSize={{ base: "8px", sm: "12px", md: "14px", xl: "20px" }}>
            <FaMapMarkerAlt
              fontSize={{ base: "12px", sm: "14px", md: "18px", xl: "18px" }}
            />
            <Text ml={1}>Track Order</Text>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            border="none"
            bg="red"
            px={4}
            py={2}
            borderRadius="30px"
            color="white"
            fontWeight="bold"
            fontSize={{ base: "8px", sm: "12px", md: "14px", xl: "20px" }}>
            <AiFillTag
              fontSize={{ base: "12px", sm: "14px", md: "18px", xl: "18px" }}
            />
            <Text ml={1}>E-Coupons</Text>
          </Flex>
        </Flex>
      </Flex> */}
      {/* //second navbar */}
      {/* <SecondNav /> */}

      {/* third nav */}
      <ThirdNav />
    </>
  );
};

export default Navbar;
