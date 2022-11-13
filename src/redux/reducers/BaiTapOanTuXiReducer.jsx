const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./gameOanTuTi/img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./gameOanTuTi/img/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./gameOanTuTi/img/bao.png", datCuoc: true },
  ],
  ketQua: "I love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./gameOanTuTi/img/keo.png" },
};

const BaiTapOanTuXiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangDatCuocUpdate = [...state.mangDatCuoc];
      mangDatCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) return { ...item, datCuoc: true };
        return { ...item, datCuoc: false };
      });
      //   // tìm ra mã cược để change trạng thái đặt cược
      //   let index = mangDatCuocUpdate.findIndex((qc) => qc.ma === action.maCuoc);
      //   if (index !== -1) mangDatCuocUpdate[index].datCuoc = true;
      // set state của mangDatCuoc ==> render lại giao diện
      state.mangDatCuoc = mangDatCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") state.ketQua = "HÒA";
          else if (computer.ma === "bua") state.ketQua = "Thua SML";
          else state.ketQua = "I LOVE U 3000, YOU WIN";
          break;
        }
        case "bua": {
          if (computer.ma === "keo") state.ketQua = "I LOVE U 3000, YOU WIN";
          else if (computer.ma === "bua") state.ketQua = "HÒA";
          else state.ketQua = "Thua SML";
          break;
        }
        case "bao": {
          if (computer.ma === "keo") state.ketQua = "Thua SML";
          else if (computer.ma === "bua")
            state.ketQua = "I LOVE U 3000, YOU WIN";
          else state.ketQua = "HÒA";
          break;
        }
        default:
          state.ketQua = "I LOVE U 3000, YOU WIN";
          return { ...state };
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
