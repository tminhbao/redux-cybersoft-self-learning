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
import Home from "./components/Home/Home";
import BaiTapOanTuXi from "./components/BaiTapOanTuXi/BaiTapOanTuXi";
import PureComponent from "./components/PureComponent/PureComponent";
const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<Home />} />
          <Route path="baitapgiohang" element={<BaiTapGioHangRedux />} />
          <Route path="baitapburger" element={<BaiTapBurger />} />
          <Route path="baitapxucxac" element={<BaiTapGameXucXac />} />
          <Route path="baitapoantuxi" element={<BaiTapOanTuXi />} />
          <Route path="purecomponent" element={<PureComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
