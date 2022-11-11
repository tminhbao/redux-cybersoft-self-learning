import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { RootReducer } from "./redux/reducers/RootReducer";
import BaiTapGameXucXac from "./components/BaiTapGameXucXac/BaiTapGameXucXac";
import BaiTapBurger from "./components/BaiTapBurger/BaiTapBurger";
import BaiTapGioHangRedux from "./components/BaiTapGioHang/BaiTapGioHangRedux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="baitapgiohang" element={<BaiTapGioHangRedux />} />
          <Route path="baitapburger" element={<BaiTapBurger />} />
          <Route path="baitapxucxac" element={<BaiTapGameXucXac />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
