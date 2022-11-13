import React, { useState } from "react";
import Profile from "./Profile";

export default function PureComponent() {
  const [like, setLike] = useState(0);
  return (
    <div className="container">
      <h3 className="text-center">Profile Lê Thị A</h3>
      <Profile like={like} />
      <br />
      <div className="card text-white bg-success">
        <h3 style={{ color: "pink" }}>Số tym: {like}</h3>
        <div className="card-body">
          <button
            className="btn text-red"
            onClick={() => {
              let newLike = like;
              newLike++;
              setLike(newLike);
            }}
            style={{ color: "red" }}
          >
            Thả tym
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
