import React, { createContext, Reducer, useReducer } from "react";
import { ProductType } from "../Types";

export const StoreContext = createContext<any>({});

export enum StoreAction {
  GET = "get",
  ADD_TO_CART = "addToCart",
  REMOVE_TO_CART = "removeToCart",
  INCREMENT_PRODUCT_CART = "incrementProductCart",
  DECREMENT_PRODUCT_CART = "decrementProductCart",
}

interface State {
  products: ProductType[] | null | {};
  cart: ProductType[] | null | {};
}

interface Action {
  type: StoreAction;
  payload: ProductType[] | null;
  cart: ProductType;
}

const StoreReducer = (state: State, action: Action) => {
  switch (action.type) {
    case StoreAction.GET:
      return {
        ...state,
        products: action.payload,
      };
    case StoreAction.ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...(state.cart as [])],
      };
    case StoreAction.REMOVE_TO_CART:
      return {
        ...state,
        cart: (state.cart as []).filter((prod: ProductType) => {
          return prod.id !== action.cart.id;
        }),
      };
    case StoreAction.INCREMENT_PRODUCT_CART:
      return {
        ...state,
        cart: (state.cart as []).map((prod: ProductType) => {
          return prod.id === action.cart.id
            ? { ...prod, qty: prod.qty++ }
            : prod;
        }),
      };
    case StoreAction.DECREMENT_PRODUCT_CART:
      return {
        ...state,
        cart: (state.cart as []).map((prod: ProductType) => {
          return prod.id === action.cart.id
            ? { ...prod, qty: prod.qty - 1 }
            : prod;
        }),
      };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(StoreReducer, {
    products: null,
    cart: [],
  });

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
