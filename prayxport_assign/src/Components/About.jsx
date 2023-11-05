import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { gsap } from "gsap";

function About() {
  const imageRef = useRef(null);

  const textRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const textTl = gsap.timeline({ repeat: -1 });
    textTl.from(textRef.current, {
      x: 60,
      opacity: 0,
      duration: 10,
      stagger: 0.5,
    });
    const imageTl = gsap.timeline({ repeat: -1 });
    imageTl.from(imageRef.current, {
      x: -40,
      duration: 10,
    });
    textTl.from(titleRef.current, {
      opacity: 0,
      x: -20,
      duration: 5,
    });

    textTl.from(underlineRef.current, {
      width: 0,
      duration: 3,
    });
  }, []);

  return (
    <Box className="about" bg="white" width="90%" margin="auto" padding="20px">
      <Heading
        // ref={titleRef}
        as="h1"
        textAlign={{ base: "center", sm: "center", md: "left", xl: "left" }}
        fontSize="28px"
        mt="20px"
        fontFamily={"Dancing Script"}
        fontWeight={"extrabold"}
        mb="10px">
        ABOUT US
      </Heading>
      <Box
        width="10%"
        margin={{ base: "auto", sm: "auto", md: "0", xl: "0" }}
        borderBottom="4px solid yellow"
        ref={underlineRef}
      />
      <Flex
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        gap={"20px"}>
        <Box
          mt={-15}
          border={"1px solid red"}
          ref={textRef}
          fontSize="20px"
          textAlign="left"
          width={{ base: "100%", sm: "50%" }}>
          <Text>
            Wherever celebrations and good times happen, the LAY'S® brand will
            be there just as it has been for more than 75 years. With flavors
            almost as rich as our history, we have a chip or crisp flavor
            guaranteed to bring a smile on your face.
          </Text>
          <Text>
            At Lay’s we get it – and you may be closer to a farm than you think.
            So go ahead and discover what makes Lay’s oh so delicious. Every bag
            of Lay's Potato Chips in the US is made from our very own
            chip-perfecting potatoes grown on over 100 farms across the US and a
            handful in Canada. Stay tuned for more information about our farms
            across North America and to hear from some of our farmers!
          </Text>
        </Box>
        <Box
          width={{ base: "100%", sm: "50%" }}
          // mt={{ base: "0px", sm: "0" }}
          ref={imageRef}>
          <Image
            alt=""
            width="100%"
            height="360px"
            src="https://www.lays.com/sites/lays.com/themes/lays/img/img-aboutus.jpg"></Image>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
