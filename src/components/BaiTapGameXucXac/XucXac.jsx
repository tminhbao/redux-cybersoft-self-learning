import React from "react";
import { connect } from "react-redux";

function XucXac(props) {
  const { mangXucXac } = props;
  const renderXucXac = () => {
    return mangXucXac.map((item, index) => {
      return (
        <img
          key={index}
          style={{ width: "100px", height: "100px", backgroundColor: "white" }}
          src={item.hinhAnh}
          alt={item.ma}
        />
      );
    });
  };
  return <div>{renderXucXac()}</div>;
}

// Láy state từ product về
const mapStateToProps = (state, action) => {
  return {
    mangXucXac: state.BaiTapXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
