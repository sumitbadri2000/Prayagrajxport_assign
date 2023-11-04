import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Best from "./Components/Bestseller";
import Carousel from "./Components/Carousel";
import Category from "./Components/Category";
import Diwali from "./Components/Diwali";
import Footer from "./Components/Footer";
import Navbar from "./Components/topScrol";
const App = () => {
  return (
    <>
      <Navbar />
      {/* {/* <Carousel /> */}
      <Diwali />
      <Best />
      <Category />
      <Banner />
      <About />
      <Footer />
    </>
  );
};

export default App;
