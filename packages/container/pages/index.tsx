import React from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { BannerCover } from "shared/components";
import { valueSelector } from "shared/store/reducers/counterSlice";

const HomePage = () => {
  const value = useSelector(valueSelector);

  return (
    <div className="titleWrapper">
      <div className="textStyle">Chào mừng đến trang chủ VuiVui</div>
      <h2
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => Router.push("/product")}
      >
        Danh sách sản phẩm HOT
      </h2>
      <h2
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => Router.push("/customer")}
      >
        Trang cá nhân
      </h2>
      <p>Giá trị của counter: {value}</p>
      <BannerCover />

      <style jsx>
        {`
          .titleWrapper {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 200px;
          }
          .textStyle {
            font-size: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
