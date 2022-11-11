import React from "react";
import { connect } from "react-redux";

function ThongTinTroChoi(props) {
  const { soBanThang, taiXiu, tongSoBanChoi } = props;

  return (
    <div>
      <div className="display-4 text-white m-4">
        BẠN CHỌN:
        <span className="text-danger">{taiXiu ? "Tài" : "Xỉu"}</span>
      </div>
      <div className="display-4 text-white m-4">
        BÀN THẮNG: <span className="text-success">{soBanThang}</span>
      </div>
      <div className="display-4 text-white m-4">
        TỔNG SỐ BÀN CHƠI: <span className="text-success">{tongSoBanChoi}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state, action) => {
  return {
    soBanThang: state.BaiTapXucXacReducer.soBanThang,
    taiXiu: state.BaiTapXucXacReducer.taiXiu,
    tongSoBanChoi: state.BaiTapXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
