import { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  props: {
    cart: boolean;
    showCart: Dispatch<SetStateAction<boolean>>;
  };
}

const Cart = ({ props }: Props) => {
  return (
    <Wrapper
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw", transition: { delay: 0.5, duration: 1 } }}
      transition={{ duration: 1 }}
    >
      <CartModal
        initial={{ x: "110vw" }}
        animate={{ x: 0 }}
        exit={{ x: "110vw", transition: { duration: 1 } }}
        transition={{ duration: 1.5 }}
      >
        <h1>Hello</h1>

        <button onClick={() => props.showCart(false)}>Close</button>
      </CartModal>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  z-index: 99;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  inset: 0 0 0 0;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CartModal = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 20px;
  width: 25%;
  button {
    background-color: black;
    font-family: PoppinsBold;
    color: White;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 200ms ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export default Cart;
