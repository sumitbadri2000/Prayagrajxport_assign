import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoPinterest } from "react-icons/bi";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"bolder"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const socialIconRefs = {
    facebook: useRef(null),
    instagram: useRef(null),
    twitter: useRef(null),
    youtube: useRef(null),
    pinterest: useRef(null),
    text1: useRef(null),
    text2: useRef(null),
    text3: useRef(null),
    text4: useRef(null),
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const t1 = gsap.timeline({ repeat: -1 });
    const t2 = gsap.timeline({ repeat: -1 });
    const t3 = gsap.timeline({ repeat: -1 });
    const t4 = gsap.timeline({ repeat: -1 });

    t1.from(socialIconRefs.text1.current, {
      x: -20,
      duration: 3,
    });
    t2.from(socialIconRefs.text2.current, {
      x: -20,
      duration: 3,
    });
    t3.from(socialIconRefs.text3.current, {
      x: -20,
      duration: 3,
    });
    t4.from(socialIconRefs.text4.current, {
      x: -20,
      duration: 3,
    });
    tl.from(socialIconRefs.facebook.current, {
      opacity: 0,
      x: -20,
      stagger: 0.2,
    })
      .from(socialIconRefs.instagram.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
      })
      .from(socialIconRefs.twitter.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
      })
      .from(socialIconRefs.youtube.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
      })
      .from(socialIconRefs.pinterest.current, {
        opacity: 0,
        x: -20,
        stagger: 0.2,
      });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <Box
      position={"sticky"}
      bg="rgb(247,247,247)"
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"8xl"} py={10} fontSize={"18px"}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={9}>
          <Stack align={"flex-start"} ref={socialIconRefs.text1}>
            <ListHeader>QUICK LINKS</ListHeader>
            <Box as="a" href={"#"}>
              Overview
            </Box>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Box as="a" href={"#"}>
                About Us
              </Box>
            </Stack>
            <Box as="a" href={"#"}>
              Our Process
            </Box>
            <Box as="a" href={"#"}>
              CSR Activities
            </Box>
            <Box as="a" href={"#"}>
              Recipes
            </Box>
            <Box as="a" href={"#"}>
              Offices
            </Box>
            <Box as="a" href={"#"}>
              Retail Stores & Restaurants
            </Box>
          </Stack>
          <Stack align={"flex-start"} ref={socialIconRefs.text2}>
            <ListHeader>OUR SERVICES</ListHeader>
            <Box as="a" href={"#"}>
              Bulk Orders
            </Box>
            <Box as="a" href={"#"}>
              Careers
            </Box>
            <Box as="a" href={"#"} mb={6}>
              Contact Us
            </Box>
            <ListHeader>VIDEOS</ListHeader>
            <Box as="a" href={"#"}>
              Brand Videos
            </Box>
            <Box as="a" href={"#"}>
              Recipe Videos
            </Box>
          </Stack>
          <Stack align={"flex-start"} ref={socialIconRefs.text3}>
            <ListHeader>OUR POLICES</ListHeader>
            <Box as="a" href={"#"}>
              Cancellation & Refund
            </Box>
            <Box as="a" href={"#"}>
              Shipping
            </Box>
            <Box as="a" href={"#"}>
              Payments
            </Box>
            <Box as="a" href={"#"}>
              Terms & Conditions
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Quality Assurance
            </Box>
            <Box as="a" href={"#"}>
              Certification & Accolades
            </Box>
          </Stack>
          <Stack align={"flex-start"} ref={socialIconRefs.text4}>
            <ListHeader>REACH US</ListHeader>
            <Box as="a" href={"#"}>
              Email : support@haldirams.com
            </Box>
            <Box as="a" href={"#"}>
              Call : +91 712-2779451
            </Box>
            <Box as="a" href={"#"}>
              Customer : 10:00 AM - 6:00 PM
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Flex gap={2}>
              <Box
                ref={socialIconRefs.facebook}
                borderRadius={"50%"}
                border="1px solid rgb(234,32,6)"
                bg={"rgb(234,32,6)"}
                padding={1.5}>
                <AiFillFacebook fontSize={"20px"} color="white" />
              </Box>
              <Box mt={1} as="a" href={"#"}>
                Facebook
              </Box>
            </Flex>
            <Flex gap={2}>
              <Box
                ref={socialIconRefs.instagram}
                borderRadius={"50%"}
                border="1px solid rgb(234,32,6)"
                bg={"rgb(234,32,6)"}
                padding={1.5}>
                <AiFillInstagram fontSize={"20px"} color="white" />
              </Box>
              <Box mt={1} as="a" href={"#"}>
                Instagram
              </Box>
            </Flex>
            <Flex gap={2}>
              <Box
                ref={socialIconRefs.twitter}
                borderRadius={"50%"}
                border="1px solid rgb(234,32,6)"
                bg={"rgb(234,32,6)"}
                padding={1.5}>
                <AiOutlineTwitter fontSize={"20px"} color="white" />
              </Box>
              <Box mt={1} as="a" href={"#"}>
                Twitter
              </Box>
            </Flex>
            <Flex gap={2}>
              <Box
                ref={socialIconRefs.youtube}
                borderRadius={"50%"}
                border="1px solid rgb(234,32,6)"
                bg={"rgb(234,32,6)"}
                padding={1.5}>
                <AiFillYoutube fontSize={"20px"} color="white" />
              </Box>
              <Box mt={1} as="a" href={"#"}>
                YouTube
              </Box>
            </Flex>
            <Flex gap={2}>
              <Box
                ref={socialIconRefs.pinterest}
                borderRadius={"50%"}
                border="1px solid rgb(234,32,6)"
                bg={"rgb(234,32,6)"}
                padding={1.5}>
                <BiLogoPinterest fontSize={"20px"} color="white" />
              </Box>
              <Box mt={1} as="a" href={"#"}>
                Pinterest
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex borderBottom="1px solid grey"></Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          Copyright © 2023 Haldiram's India Pvt Ltd | Powered By Graas
        </Text>
      </Box>
    </Box>
  );
}
