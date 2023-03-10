import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Store from "./Store";
import ProductPage from "./ProductPage";

const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
