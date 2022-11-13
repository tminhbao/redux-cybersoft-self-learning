import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <div>
      <header className="bg-dark text-white p-3 nav">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/baitapgiohang"
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Bài Tập Giỏ Hàng
        </NavLink>
        <NavLink
          to="/baitapburger"
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Bài Tập Burger
        </NavLink>
        <NavLink
          to="/baitapxucxac"
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Bài Tập Xúc Xắc
        </NavLink>
        <NavLink
          to="/baitapoantuxi"
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Bài Tập Oẳn Tù Xì
        </NavLink>
        <NavLink
          to="/purecomponent"
          className={({ isActive }) =>
            isActive ? "nav-link bg-white text-dark" : "nav-link"
          }
        >
          Bài Tập Pure Component
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
}
