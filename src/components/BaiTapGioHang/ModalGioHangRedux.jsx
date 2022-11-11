import React, { useState } from "react";

// Kết nối redux (reactComponent vs reactStore)
import { connect } from "react-redux";

function ModalGioHangRedux(props) {
  console.log(props);
  const { gioHang, xoaGioHangIndex, tangGiamSoLuong } = props;
  const renderGioHang = (props) =>
    props.gioHang.map((spGH, index) => (
      <tr key={index}>
        <td>{spGH.maSP}</td>
        <td>{spGH.tenSP}</td>
        <td>
          <img src="https://picsum.photos/50/50"></img>
        </td>
        <td>{spGH.giaBan}</td>
        <td>
          <button onClick={() => tangGiamSoLuong(index, true)}>+</button>
          {spGH.soLuong}
          <button onClick={() => tangGiamSoLuong(index, false)}>-</button>
        </td>
        <td>{spGH.giaBan * spGH.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => xoaGioHangIndex(index)}
          >
            Xóa
          </button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Ảnh</th>
            <th>Giá Bán</th>
            <th>Số Lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{renderGioHang(props)}</tbody>
        <tfoot>
          <tr>
            <td colSpan={5}></td>
            <td>Tổng tiền</td>
            <td>
              {gioHang.reduce((tongTien, spGH, index) => {
                return (tongTien += spGH.soLuong * spGH.giaBan);
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// state là store tổng => truy xuất đến GioHangReducer => biến state trên GioHangReducer
const mapStateToProps = (state) => ({
  gioHang: state.GioHangReducer.gioHang,
});

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };

      // Đưa action lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
