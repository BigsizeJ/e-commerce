import styled from "styled-components";
import Navbar from "./components/Navbar";
import { FontStyle } from "./styles/GlobalStyles";
import wave from "./assets/wave.png";
import AnimatedRoute from "./page/AnimatedRoute";

const App = () => {
  return (
    <Wrapper>
      <FontStyle />
      <Navbar />
      <AnimatedRoute />
      <img className="wave" src={wave} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  flex-direction: column;
  background-attachment: fixed;
  .wave {
    z-index: -1;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 40%;
  }
  font-family: Poppins;

  @media only screen and (max-width: 800px) {
    .wave {
      height: 15%;
    }
  }
`;

export default App;
