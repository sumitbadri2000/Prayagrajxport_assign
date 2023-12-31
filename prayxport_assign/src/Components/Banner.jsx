import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Banner() {
  const images = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
  };
  const underlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(underlineRef.current, {
      width: 0,
      duration: 1,
    });
    tl.from(images.image1.current, {
      opacity: 0,
      duration: 2,
      x: -20,
      stagger: 0.2,
    })

      .from(images.image3.current, {
        opacity: 0,
        x: 20,
        duration: 2,
        stagger: 0.2,
      })
      .from(images.image2.current, {
        opacity: 0,
        y: 20,
        duration: 2,
        stagger: 0.2,
      });
  }, []);

  return (
    <Box
      p={6}
      width={"90%"}
      margin={"auto"}
      textAlign={"center"}
      background={"white"}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize="28px"
        mt="20px"
        fontFamily={"Dancing Script"}
        fontWeight={"extrabold"}
        mb={{ base: "2px", sm: "4px", md: "6px", xl: "10px" }}>
        Our Brands
      </Heading>
      <Box
        width="10%"
        margin="auto"
        marginBottom={{ base: "16px", sm: "14px", md: "12px", xl: "0" }}
        borderBottom="4px solid yellow"
        ref={underlineRef}
      />
      <Text mt={4}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        aperiam soluta, earum officiis accusantium laboriosam.
      </Text>
      <Flex
        mt={"20px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          xl: "row",
        }}>
        <Box
          ref={images.image1}
          width={{ base: "100%", sm: "100%", md: "100%", xl: "50%" }}>
          <Image
            width={"100%"}
            src="https://www.lays.com/sites/lays.com/files/2019-09/CheddarSC_0.png"
            alt="first"
          />
        </Box>
        <Box
          ref={images.image3}
          width={{ base: "100%", sm: "100%", md: "100%", xl: "50%" }}>
          <Image
            width={"100%"}
            src="https://www.lays.com/sites/lays.com/files/2019-09/Lightly%20Salted%20Classic.png"
            alt="sec"
          />
        </Box>
        <Box
          ref={images.image3}
          width={{ base: "100%", sm: "100%", md: "100%", xl: "50%" }}>
          <Image
            width={"100%"}
            src="https://www.lays.com/sites/lays.com/files/2021-07/HERO_Smooth%20Ranch%20Dip.png"
            alt="sec"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Banner;
