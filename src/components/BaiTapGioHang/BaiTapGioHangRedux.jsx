import React from "react";
import ModalGioHangRedux from "./ModalGioHangRedux";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";

export default function BaiTapGioHangRedux() {
  return (
    <div className="container">
      <h3 className="text-danger text-center">Bài tập Giỏ hàng Redux</h3>
      <ModalGioHangRedux />
      <DanhSachSanPhamRedux />
    </div>
  );
}
