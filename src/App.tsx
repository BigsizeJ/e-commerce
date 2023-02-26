import styled from "styled-components";
import Navbar from "./components/Navbar";
import { FontStyle } from "./styles/GlobalStyles";
import wave from "./assets/wave.png";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <Wrapper>
      <FontStyle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <img className="wave" src={wave} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  main {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .wave {
    z-index: -1;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 40%;
  }
  font-family: Poppins;
`;

export default App;
