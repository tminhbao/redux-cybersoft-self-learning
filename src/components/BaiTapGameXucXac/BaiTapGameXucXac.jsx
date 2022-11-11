import React from "react";
import XucXac from "./XucXac";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";

function BaiTapGameXucXac(props) {
  const { datCuoc, playGame } = props;
  return (
    <div
      className="game"
      style={{
        backgroundImage: "url(./img/casino.jpg)",
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="title-game text-center mt-5 text-white"
        style={{ fontSize: "80px" }}
      >
        Bài tập game xúc xắc
      </div>
      <div className="row text-center">
        <div className="col-4">
          <button className="btnGame" onClick={() => datCuoc(true)}>
            Tài
          </button>
        </div>
        <div className="col-4">
          <XucXac />
        </div>
        <div className="col-4">
          <button className="btnGame" onClick={() => datCuoc(false)}>
            Xỉu
          </button>
        </div>
      </div>
      <div className="text-center">
        <ThongTinTroChoi />
        <button className="btn btn-success p-3 mt-2" onClick={() => playGame()}>
          PlayGame
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      // Gửi lên reducer
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
