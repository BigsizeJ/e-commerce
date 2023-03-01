import { createContext, Reducer, useReducer } from "react";

export const StoreContext = createContext<any>({});

interface Children {
  children: React.ReactNode;
}

interface Product {
  title: string;
  image: string;
  price: string;
}

interface State {
  products: Product[] | null | {};
  cart: Product[] | null | {};
}

export enum StoreAction {
  GET = "get",
  ADD_TO_CART = "addToCart",
}

interface Action {
  type: StoreAction;
  payload: [] | {};
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
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: Children) => {
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