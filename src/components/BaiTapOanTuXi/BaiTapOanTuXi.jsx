import React from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import Player from "./Player";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";

function BaiTapOanTuXi(props) {
  let { playGame } = props;

  return (
    <div className="gameOanTuXi">
      <div className="row text-center mt-5">
        <div className="col-4">
          <Computer />
        </div>
        <div className="col-4">
          <ThongTinTroChoi />
          <button className="btn btn-info m-3 p-3" onClick={() => playGame()}>
            {" "}
            Play Game
          </button>
        </div>
        <div className="col-4">
          <Player />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 100;
      // Khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 100) clearInterval(randomComputerItem);
        dispatch({
          type: "END_GAME",
        });
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
