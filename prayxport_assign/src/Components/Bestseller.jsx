import React, { useEffect, useRef } from "react";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

const Best = () => {
  const images = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
    image4: useRef(null),
  };

  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

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
      });

    const text = gsap.timeline({ repeat: -1 });

    text.from(titleRef.current, {
      opacity: 0,
      x: -20,
      duration: 5,
    });

    text.from(underlineRef.current, {
      width: 0,
      duration: 3,
    });
  }, []);

  return (
    <Box
      width={"90%"}
      margin={"auto"}
      textAlign={"center"}
      background={"rgb(255,255,255)"}
      marginTop={"80px"}>
      <Heading ref={titleRef}>Bestsellers</Heading>
      <Box
        width="7%"
        margin="auto"
        borderBottom="4px solid yellow"
        ref={underlineRef}
      />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        mt={"50px"}
        gap={6}
        fontSize="18px">
        <Box height={"80%"} ref={images.image1}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="malai"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/f/r/front-removebg-preview.jpg"
          />
          <Text m={5}>Special Malai Peda (250 gm)</Text>
          <Text>
            ₹176<span style={{ textDecoration: "line-through" }}>₹185</span>{" "}
            <span style={{ color: "red" }}>5% of</span>
          </Text>
        </Box>
        <Box height={"80%"} ref={images.image2}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="orange"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/7/7/77_12.jpg"
          />
          <Text m={5}>Orange Burfee (500 g) with Large Diya</Text>
          <Text>
            ₹455<span style={{ textDecoration: "line-through" }}>₹505</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
        <Box height={"80%"} ref={images.image3}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="moti"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/w/h/whatsapp_image_2022-09-30_at_6.58.35_pm.jpeg"
          />
          <Text m={5}>
            Motichoor Laddu Pack of 2 (500 g x 2) with 2 small Diya
          </Text>
          <Text>₹860</Text>
        </Box>
        <Box height={"80%"} ref={images.image4}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="moong"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/7/7/77_1.jpg"
          />
          <Text m={5}>Moong Burfee (500 g) with small Diya</Text>
          <Text>
            ₹414<span style={{ textDecoration: "line-through" }}>₹460</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Best;
