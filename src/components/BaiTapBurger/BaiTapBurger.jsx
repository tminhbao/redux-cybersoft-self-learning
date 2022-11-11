import React from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";

function BaiTapBurger(props) {
  const { burger, total, addBreadMid } = props;

  const renderBreadMid = () => {
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMeat = [];
      for (let i = 0; i < value; i++) {
        breadMeat.push(<div key={index} className={propsBurger}></div>);
      }
      return breadMeat;
    });
  };

  const renderMenu = () => {
    const { menu } = props;
    return Object.entries(menu).map(([propsMenu, price], index) => (
      <tr key={index}>
        <td>{propsMenu}</td>
        <td>
          <button
            className="btn btn-success mx-2"
            onClick={() => addBreadMid(propsMenu, 1)}
          >
            +
          </button>
          {burger[propsMenu]}
          <button
            className="btn btn-success mx-2"
            onClick={() => addBreadMid(propsMenu, -1)}
          >
            -
          </button>
        </td>
        <td>{price}</td>
        <td>{burger[propsMenu] * price}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <h3 className="display-4 text-success">Bài tập Burger Cybersoft</h3>
      <div className="row">
        <div className="col-7">
          <h3 className="text-center text-danger">Bánh Burger của bạn</h3>
          <div className="breadTop"></div>
          {renderBreadMid()}
          <div className="breadBottom"></div>
        </div>
        <div className="col-5">
          <h3 className="text-center text-success">Chọn thức ăn</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Thức ăn</th>
                <th></th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
              </tr>
            </thead>
            <tbody>{renderMenu()}</tbody>
            <tfoot>
              <tr>
                <td colSpan={2}></td>
                <td>Tổng cộng</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

// Lấy state từ store về
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

// Đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      // Tạo ra action
      const action = {
        type: "ADD_BREAD_MID",
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);
