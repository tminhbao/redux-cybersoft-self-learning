import React from "react";
import { connect } from "react-redux";

function ThongTinTroChoi(props) {
  let { ketQua, soBanThang, soBanChoi } = props;
  return (
    <>
      <div className="display-4 text-warning">{ketQua}</div>
      <div className="display-4 text-success">
        Số bàn thắng <span className="text-warnigg">{soBanThang}</span>
      </div>
      <div className="display-4 text-success">
        Tổng số bàn chơi <span className="text-warnigg">{soBanChoi}</span>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
