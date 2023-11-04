import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

function About() {
  const imageRef = useRef(null);

  const textRef = useRef(null);

  useEffect(() => {
    const textTl = gsap.timeline({ repeat: -1 });
    textTl.from(textRef.current, {
      x: 60,
      opacity: 0,
      duration: 5,
      stagger: 0.5,
    });
    const imageTl = gsap.timeline({ repeat: -1 });
    imageTl.from(imageRef.current, {
      x: -40,
      duration: 10,
    });
  }, []);

  return (
    <Box
      className="about"
      mt={8}
      bg="white"
      width="90%"
      margin="auto"
      padding="20px">
      <Heading as="h1" textAlign="left" fontSize="28px" mt="20px" mb="10px">
        ABOUT US
      </Heading>
      <Flex flexDirection={{ base: "column", sm: "row" }} alignItems="center">
        <Box
          ref={textRef}
          fontSize="20px"
          textAlign="left"
          width={{ base: "100%", sm: "50%" }}>
          <Text mt="20px">
            Over the course of eight decades, a lot has changed about us. We
            have relocated, undergone expansion, developed new product lines &
            added segments, opened retail chains & stores across India and
            embraced new markets overseas.
          </Text>
          <Text>
            One thing hasn’t changed - we’re still a tight-knit family business,
            committed to serving the most authentic taste of India through our
            products. Our origins can be traced back to a small namkeen shop in
            Bikaner founded by Ganga Bishan Agarwal (Haldiram Ji). This modest
            shop quickly gained popularity and scaled up to meet a booming
            demand for its unique-tasting bhujia. Building on this legacy, his
            grandson, our pioneer Mr. Shiv Kishan Agrawal steered the business
            towards the heights it has tasted today.
          </Text>
        </Box>
        <Box
          width={{ base: "100%", sm: "50%" }}
          mt={{ base: "20px", sm: "0" }}
          ref={imageRef}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6nP2kxxJiKU?si=9R4xBxR1NPLwNQGW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
