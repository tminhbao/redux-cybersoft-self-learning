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
const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BaiTapGioHangRedux />
  </Provider>
);

reportWebVitals();
