import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.상품들);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <>
              <div>없는 페이지입니다.</div>
              <Link to="/">홈으로 이동</Link>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
