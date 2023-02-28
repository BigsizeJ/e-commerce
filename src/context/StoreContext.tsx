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
}

export enum StoreAction {
  GET = "get",
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
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(StoreReducer, {
    products: null,
  });

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
