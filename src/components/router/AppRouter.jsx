import React from "react";

import CartContent from "../cart/CartContent";

import { Route,  Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
