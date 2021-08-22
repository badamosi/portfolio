import styled from "styled-components";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`;

const IntroShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
    top: 0;
    left: 0;
    z-index: -1;
`;

const FeaturesShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
    background-color: pink;
    top: 0;
    left: 0;
    z-index: -1;
`;

const ServiceShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
    background-color: #f88497;
    top: 0;
    left: 0;
    z-index: -1;
`;


const PriceShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
    background-color: crimson;
    top: 0;
    left: 0;
    z-index: -1;
`;


function App() {

  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Features />
        <FeaturesShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
