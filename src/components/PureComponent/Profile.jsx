import React, { memo } from "react";

function Profile(props) {
  return (
    <div className="card text-white bg-dark text-center">
      <img
        className="card-img-top"
        src="https://genk.mediacdn.vn/2019/12/10/top-3-guong-mat-hotgirl-so-huu-vong-1-do-so-e488fe0e-15759551559061339513563.jpg"
        alt="Title"
        style={{ objectFit: "contain", width: "300px" }}
      />
      <div className="card-body">
        <p className="text-success">Số lượng tim: {props.like}</p>
        <h4 className="card-title">Họ tên: Lê Thị A</h4>
        <p className="card-text">Tuổi: 18</p>
      </div>
    </div>
  );
}

export default memo(Profile);
