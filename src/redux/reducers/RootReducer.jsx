import { combineReducers } from "redux";
import BaiTapXucXacReducer from "./BaiTapXucXacReducer";
import { BurgerReducer } from "./BurgerReducer";
import { GioHangReducer } from "./GioHangReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";

export const RootReducer = combineReducers({
  BurgerReducer,
  BaiTapXucXacReducer,
  GioHangReducer,
  BaiTapOanTuXiReducer,
});
