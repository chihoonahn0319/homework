import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = [
  {
    name: "멋진 바지",
    price: 20000,
    options: [28, 30, 32],
    likes: 100,
  },
  {
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    name: "멋진 신발",
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likes: 300,
  },
];

let 상품들 = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    정렬하자이: (state) => {
      state.sort((a, b) => a.price - b.price);
    },
    리셋하자이: (state) => {
      return initialState;
    },
  },
});

const 장바구니 = createSlice({
  name: "장바구니",
  initialState: [],
  reducers: {
    장바구니추가: (state, action) => {
      state.push(action.payload);
    },
    장바구니삭제: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { 정렬하자이, 리셋하자이 } = 상품들.actions;
export const { 장바구니추가, 장바구니삭제 } = 장바구니.actions;

const store = configureStore({
  reducer: {
    상품들: 상품들.reducer,
    장바구니: 장바구니.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
