// Khởi tạo giá trị ban đầu của state
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Điện thoại IPHONE",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
    {
      maSP: 2,
      tenSP: "Điện thoại REDMI",
      soLuong: 1,
      giaBan: 2200,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xử lý logic thêm giỏ hàng
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong++;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      // Xóa giỏ hảng dựa vào index
      gioHangCapNhat.splice(action.index, 1);
      // Gán giỏ hàng mới cho state.gioHang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];
      const { index, tangGiam } = action;
      if (tangGiam) {
        gioHangCapNhat[index].soLuong++;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong--;
        } else {
          alert("Không thể xóa sản phẩm");
        }
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
