import styled from "styled-components";
import Filter from "../components/Filter";
import Product from "../components/Product";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SearchProps {
  props: string;
}

const Store = ({ props }: SearchProps) => {
  const [search, setSearch] = useState<string>("");

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
      <Filter props={{ search, setSearch }} />
      <Product props={{ search }} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 50px 100px 25px 100px;
  display: grid;
  grid-column-gap: 20px;
  grid-auto-flow: column;
  justify-content: center;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  z-index: 2;
  @media only screen and (max-width: 850px) {
    padding: 20px;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 10px;
    grid-template-columns: 1fr;
  }
`;

export default Store;
