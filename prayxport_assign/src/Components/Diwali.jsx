import React, { useEffect, useRef } from "react";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

const Diwali = () => {
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
      marginTop={"40px"}
      background={"rgb(255,255,255)"}>
      <Heading ref={titleRef}>Diwali Special</Heading>
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
        gap={{ base: "10", sm: "10", md: "6", xl: "6" }}
        fontSize="18px">
        <Box height={"80%"} ref={images.image1}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="orange"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/w/h/whatsapp_image_2022-09-30_at_6.02.53_pm.jpeg"
          />
          <Text m={5}>Orange Burfee (500 g) with Large Diya</Text>
          <Text>
            ₹522<span style={{ textDecoration: "line-through" }}>₹580</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
        <Box height={"80%"} ref={images.image2}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="assor"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/w/h/whatsapp_image_2022-09-30_at_6.20.55_pm.jpeg"
          />
          <Text m={5}>Assorted Peda (500 g) with 2 small Diya</Text>
          <Text>
            ₹518<span style={{ textDecoration: "line-through" }}>₹575</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
        <Box height={"80%"} ref={images.image3}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="kaju"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/7/7/77_13.jpg"
          />
          <Text m={5}>
            Kaju katli (250 g) and Orange Burfee(250g) with Medium Diya
          </Text>
          <Text>
            ₹549<span style={{ textDecoration: "line-through" }}>₹610</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
        <Box height={"80%"} ref={images.image4}>
          <Image
            width={"100%"}
            height={"100%"}
            border={"1px solid lightgray"}
            alt="moong"
            src="https://www.haldirams.com/media/catalog/product/cache/91c328e4e467a384bb2dca2d478e6436/7/7/77_1.jpg"
          />
          <Text m={5}>Moong Burfee (500 g) with Medium Diya</Text>
          <Text>
            ₹482<span style={{ textDecoration: "line-through" }}>₹523</span>{" "}
            <span style={{ color: "red" }}>10% of</span>
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Diwali;
