import { Flex } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Navbar from "./Components/ThirdNav";

const App = () => {
  return (
    <Flex flexDirection={"column"} gap={10} bg="rgb(255,226,2)" pt={4}>
      <Navbar />
      <Carousel />
      <About />
      <Category />
      <Banner />
      <Footer />
    </Flex>
  );
};

export default App;
