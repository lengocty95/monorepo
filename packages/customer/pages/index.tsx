import React from "react";
import Router from "next/router";
import { ButtonCustom, BannerCover } from "shared/components";

const CustomerPage = () => {
  return (
    <div className="titleWrapper">
      <div className="textStyle">
        Trang cá nhân:{" "}
        <span
          style={{ color: "pink", cursor: "pointer" }}
          onClick={() => Router.push("/detail")}
        >
          Le Ngoc Ty
        </span>
      </div>
      <ButtonCustom onClick={() => Router.push("../")} buttonType="next">
        Trang chủ
      </ButtonCustom>
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

export default CustomerPage;
