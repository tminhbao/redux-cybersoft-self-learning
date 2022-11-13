import React from "react";
import { connect } from "react-redux";

function Player(props) {
  let { mangDatCuoc, datCuoc } = props;
  return (
    <div className="text-center playerGame">
      <div className="thought">
        <img
          src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
          height={160}
          alt=""
        />
      </div>
      <div className="speech-bubble"></div>
      <img src="./gameOanTuTi/img/ironman.png" height={300} alt="" />
      <div className="row">
        {mangDatCuoc.map((item, index) => {
          // Xét giá trị đặt cược, thêm viền cho item được chọn
          let border = {};
          if (item.datCuoc) border = { border: "3px solid red" };
          return (
            <div className="col-4" key={index}>
              <button
                style={border}
                className="btnItem"
                onClick={() => datCuoc(item.ma)}
              >
                <img src={item.hinhAnh} alt="" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
