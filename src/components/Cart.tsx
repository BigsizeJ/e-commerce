import { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useStore } from "../hooks/customHooks";
import { StoreAction } from "../context/StoreContext";
import { ProductType } from "../Types";

interface Props {
  props: {
    showCart: boolean;
    setShowCart: Dispatch<SetStateAction<boolean>>;
  };
}

const Cart = ({ props }: Props) => {
  const { cart, dispatch } = useStore();
  const [subTotal, setSubtotal] = useState<number>(0);

  const sumSubTotal = () => {
    setSubtotal(
      cart.reduce(
        (total: number, prod: ProductType) =>
          (total + parseFloat(prod.price)) * prod.qty,
        0
      )
    );
  };

  const handleCartChange = (product: ProductType, type: string) => {
    if (type === "increment") {
      return dispatch({
        type: StoreAction.INCREMENT_PRODUCT_CART,
        cart: product,
      });
    } else if (type === "decrement") {
      const decrement = product.qty - 1;
      if (decrement <= 0) {
        return dispatch({ type: StoreAction.REMOVE_TO_CART, cart: product });
      } else {
        return dispatch({
          type: StoreAction.DECREMENT_PRODUCT_CART,
          cart: product,
        });
      }
    }
  };

  useEffect(() => {
    sumSubTotal();
    return () => {};
  }, [cart]);

  return (
    <Wrapper
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw", transition: { delay: 0.5, duration: 1 } }}
      transition={{ duration: 1 }}
    >
      <CartModal
        initial={{ x: "110vw" }}
        animate={{ x: 0, transition: { delay: 0.5, duration: 1 } }}
        exit={{ x: "110vw" }}
        transition={{ duration: 1 }}
      >
        <h1>Your shopping cart</h1>
        {cart.length <= 0 ? (
          <FaShoppingCart />
        ) : (
          <div className="cart-list">
            {cart.map((prod: ProductType) => {
              return (
                <div className="cart-item" key={prod.id}>
                  <div className="prod-left">
                    <button
                      className="decrease"
                      onClick={() => handleCartChange(prod, "decrement")}
                    >
                      -
                    </button>
                    <p className="qty">{prod.qty}</p>
                    <button
                      className="increase"
                      onClick={() => handleCartChange(prod, "increment")}
                    >
                      +
                    </button>
                    <img className="prod-cart-image" src={prod.image} />
                  </div>
                  <div className="prod-info">
                    <p className="prod-cart-name">{prod.title}</p>
                    <p>{prod.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {cart.length > 0 && (
          <p className="cart-subtotal">
            Subtotal: <span>PHP {subTotal.toLocaleString("en-US")}</span>
          </p>
        )}
        <div className="btn-ctn">
          {cart && <button className="cart-checkout">checkout</button>}
          <button className="close" onClick={() => props.setShowCart(false)}>
            Close
          </button>
        </div>
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
  @media only screen and (max-width: 850px) {
    padding: 20px;
    align-items: center;
    div {
      height: 60%;
      width: 100%;
    }
  }
`;

const CartModal = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 20px;
  width: 25%;
  @media only screen and (max-width: 850px) {
    padding: 20px;
  }
  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-family: PoppinsBold;
    text-align: center;
    @media only screen and (max-width: 850px) {
      font-size: 1.5rem;
    }
  }
  svg {
    color: #e5e5e5;
    margin: auto;
    inset: 0 0 0 0;
    font-size: 10rem;
    position: absolute;
  }
  .btn-ctn {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .close,
    .cart-checkout {
      border: none;
      background-color: black;
      font-family: PoppinsBold;
      color: White;
      font-size: 1.5rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: 200ms ease-in-out;
    }
    .cart-checkout {
      background-color: #00ffd1;
    }
  }
  .cart-subtotal {
    padding: 10px 0px;
    font-family: PoppinsBold;
    text-transform: uppercase;
    font-size: 1.3rem;
    span {
      font-family: Poppins;
    }
  }
  .cart-list {
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(60px, 1fr));
    grid-row-gap: 35px;
    padding: 20px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    .cart-item {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 10px;
      .prod-left {
        width: min-content;
        gap: 10px;
        display: flex;
        align-items: center;
        .decrease,
        .increase {
          align-items: center;
          justify-content: center;
          display: flex;
          width: 1.5rem;
          height: 1.5rem;
          font-size: 1.5rem;
          border: none;
          cursor: pointer;
        }
        .prod-cart-image {
          width: 50px;
        }
      }
      .prod-info {
        .prod-cart-name {
          font-family: PoppinsBold;
          white-space: nowrap;
          overflow: hidden;
          width: 190px;
          text-overflow: ellipsis;
          @media only screen and (max-width: 850px) {
            width: 160px;
          }
        }
      }
    }
  }
`;

export default Cart;
