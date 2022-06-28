import React from "react";
import { ButtonCustom } from "shared";
import Link from "next/link";
import Router from "next/router";

const ProductPage = () => {
  return (
    <div className="titleWrapper">
      <p className="textStyle">Danh sách sản phẩm</p>
      <Link href="/product/1">Sản phẩm 1</Link>
      <Link href="/product/2">Sản phẩm 2</Link>
      <Link href="/product/3">Sản phẩm 3</Link>
      <Link href="/product/4">Sản phẩm 4</Link>
      <Link href="/product/5">Sản phẩm 5</Link>
      <ButtonCustom onClick={() => Router.push("/")}>Trang chủ</ButtonCustom>
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

export default ProductPage;
