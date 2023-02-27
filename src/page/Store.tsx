import styled from "styled-components";
import Filter from "../components/Filter";
import Product from "../components/Product";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Store = () => {
  useEffect(() => {
    const wave = document.querySelector(".wave") as HTMLElement;
    wave.style.display = "none";

    return () => {};
  }, []);
  return (
    <Wrapper
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <Filter />
      <Product />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  padding: 50px 100px 25px 100px;
  display: grid;
  grid-column-gap: 20px;
  grid-auto-flow: column;
  justify-content: center;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  z-index: 2;
`;

export default Store;
