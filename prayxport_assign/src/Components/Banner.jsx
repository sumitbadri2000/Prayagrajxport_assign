import { Box, Flex, Image } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Banner() {
  const images = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

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
    <Box width={"90%"} margin={"auto"} mt={12}>
      <Flex
        gap={6}
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
            src="https://www.haldirams.com/media/wysiwyg/Minute_Khana_1.png"
            alt="first"
          />
        </Box>
        <Box
          ref={images.image3}
          width={{ base: "100%", sm: "100%", md: "100%", xl: "50%" }}>
          <Image
            width={"100%"}
            src="https://www.haldirams.com/media/wysiwyg/Dry_Fruit_2.png"
            alt="sec"
          />
        </Box>
      </Flex>
      <Box mt={6}>
        <Image
          ref={images.image2}
          src="https://www.haldirams.com/media/wysiwyg/India_s_Most_Trusted_Brand.png"
          alt="banner"
        />
      </Box>
    </Box>
  );
}

export default Banner;
