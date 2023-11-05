import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

const Category = () => {
  const images = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
    image4: useRef(null),
    image5: useRef(null),
    image6: useRef(null),
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
      .from(images.image2.current, {
        opacity: 0,
        y: -20,
        duration: 2,
        stagger: 0.2,
      })
      .from(images.image3.current, {
        opacity: 0,
        x: 20,
        duration: 2,
        stagger: 0.2,
      })
      .from(images.image4.current, {
        opacity: 0,
        duration: 2,
        x: -20,
        stagger: 0.2,
      })
      .from(images.image5.current, {
        opacity: 0,
        duration: 2,
        y: -20,
        stagger: 0.2,
      })
      .from(images.image6.current, {
        opacity: 0,
        duration: 2,
        x: 20,
        stagger: 0.2,
      });
  }, []);
  return (
    <Box
      p={4}
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
        Our Business
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        mt={"30px"}
        gap={8}
        fontSize="18px"
        fontWeight="bolder">
        <Box height={"80%"} ref={images.image1}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="sweets"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJURa_z75iC2eHzccGBveoQzhS-5vhXu_ipA&usqp=CAU"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box height={"80%"} ref={images.image2}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="navkeen"
            src="https://m.media-amazon.com/images/I/811dyBVhQeL._UF350,350_QL80_.jpg"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box height={"80%"} ref={images.image3}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="beverages"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8170cMmYMtEWD69c3yhioP2jKgZevYIZz3g&usqp=CAU"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box height={"80%"} ref={images.image4}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="cookies"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJURa_z75iC2eHzccGBveoQzhS-5vhXu_ipA&usqp=CAU"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box height={"80%"} ref={images.image5}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="eat"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfIvC-oiGejdjlTPXpgXo8teMoLJxyZH3aQ&usqp=CAU"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box height={"80%"} ref={images.image6}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="festive"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHPtbNI4t8CsVAMp03uVlEWLOpGzJSBO8CQ&usqp=CAU"
          />
          <Text mt={3}>Lorem</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Category;
