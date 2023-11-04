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
      width={"90%"}
      margin={"auto"}
      textAlign={"center"}
      background={"rgb(255,255,255)"}
      marginTop={"80px"}>
      <Heading>Discover Categories</Heading>
      <Box width="7%" margin="auto" borderBottom="4px solid yellow" />

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        mt={"50px"}
        gap={6}
        fontSize="22px"
        fontWeight="bolder">
        <Box height={"80%"} ref={images.image1}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="sweets"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQa_acT_A7zEpQG-yhBTKJPcGa_zWcdWwqTYD4LMJSgMqYk9REb"
          />
          <Text m={5}>Sweets</Text>
        </Box>
        <Box height={"80%"} ref={images.image2}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="navkeen"
            src="https://www.sartajonline.com/cdn/shop/products/AjmeriMixture_1000x1000.jpg?v=1618312159"
          />
          <Text m={5}>Naveen</Text>
        </Box>
        <Box height={"80%"} ref={images.image3}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="beverages"
            src="https://www.mynestle.in/media/wysiwyg/recipie_landing_page-10.jpg"
          />
          <Text m={5}>Beverages</Text>
        </Box>
        <Box height={"80%"} ref={images.image4}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="cookies"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
          />
          <Text m={5}>Cookies</Text>
        </Box>
        <Box height={"80%"} ref={images.image5}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="eat"
            src="https://www.haldirams.com/media/wysiwyg/5_ready_1.jpg"
          />
          <Text m={5}>Ready to eat</Text>
        </Box>
        <Box height={"80%"} ref={images.image6}>
          <Image
            width={"100%"}
            height={"100%"}
            alt="festive"
            src="https://www.haldirams.com/media/wysiwyg/6_gifting_1.jpg"
          />
          <Text m={5}>Festive Pack/Gift Boxes</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Category;
