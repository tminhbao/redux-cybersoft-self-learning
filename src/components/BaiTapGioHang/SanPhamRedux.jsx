import React from "react";
import { connect } from "react-redux";
// Kết nối với reducerGioHang

function SanPhamRedux(props) {
  const { sanPham, themGioHang } = props;

  return (
    <div className="card text-white bg-primary m-2">
      <img
        className="card-img-top"
        src="https://picsum.photos/50/50"
        alt="Title"
        width={150}
        height={250}
      />
      <div className="card-body">
        <h4 className="card-title">{sanPham.tenSP}</h4>
        <p className="card-text">{sanPham.giaBan}</p>
        <button
          className="btn btn-success"
          onClick={() => themGioHang(sanPham)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

// Xây dựng hàm tạo ra prop là hàm xử lý sự kiện =>  đưa dữ liệu lên store

const mapDispatchToProps = (dispatch) => {
  return {
    // Tạo ra prop component (là function => đưa dữ liệu lên store)
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: sanPham.soLuong,
      };
      // Tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG", // Bắt buộc
        spGioHang: spGioHang,
      };
      // Dùng hàm dispatch để đưa dữ liệu lên
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
