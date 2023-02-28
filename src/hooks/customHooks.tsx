import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

export const useStore = () => {
  return useContext(StoreContext);
};
