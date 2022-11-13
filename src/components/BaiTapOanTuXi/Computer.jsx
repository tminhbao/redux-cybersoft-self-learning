import React from "react";
import { connect } from "react-redux";

function Computer(props) {
  let { computer } = props;
  let keyFrame = `@keyframes randomItem${Date.now()} {
    from {top:0px;}
    to {top:200px;}
  }`;
  return (
    <div className="text-center playerGame">
      <div className="thought" style={{ overflow: "hidden" }}>
        <style>{keyFrame}</style>
        <img
          style={{
            position: "relative",
            animation: `randomItem${Date.now()} 2s`,
          }}
          src={computer.hinhAnh}
          height={160}
          alt=""
        />
      </div>
      <div className="speech-bubble"></div>
      <img src="./gameOanTuTi/img/thanos.png" height={260} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(Computer);
