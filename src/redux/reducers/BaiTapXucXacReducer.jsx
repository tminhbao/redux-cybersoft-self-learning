const initialState = {
  taiXiu: true, // true: tài (3 --> 11), false: xỉu (> 12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/dice1.png" },
    { ma: 1, hinhAnh: "./img/dice1.png" },
    { ma: 1, hinhAnh: "./img/dice1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapXucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      // Xử lí random xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Mỗi lần lặp random số ngẫu nhiên từ 1 -->6
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = {
          ma: randomNumber,
          hinhAnh: `./img/dice${randomNumber}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // Gán state mảng
      state.mangXucXac = mangXucXacNgauNhien;
      // Xử lí tăng bàn chơi
      state.tongSoBanChoi++;
      // Xử lí win game
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && !state.taiXiu)
      )
        state.soBanThang++;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapXucXacReducer;
