import { combineReducers } from "redux";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";
import { BurgerReducer } from "./BurgerReducer";

import { GioHangReducer } from "./GioHangReducer";

export const RootReducer = combineReducers({
  BurgerReducer,
  BaiTapXucXacReducer,
  GioHangReducer,
});
