import React from "react";
import data from ".././../data/data.json";
import SanPhamRedux from "./SanPhamRedux";
export default function DanhSachSanPhamRedux() {
  // Viết phương thức render sản phẩm
  const renderSanPham = () => {
    return data.map((sanPham, index) => (
      <div className="col-4" key={index}>
        <SanPhamRedux sanPham={sanPham} />
      </div>
    ));
  };
  return (
    <div className="container">
      <h3 className="text-success text-center">Danh sách sản phẩm</h3>
      <div className="row">{renderSanPham()}</div>
    </div>
  );
}
