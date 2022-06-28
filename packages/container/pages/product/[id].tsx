import React from "react";
import { ButtonCustom } from "shared/components";
import { useRouter } from "next/router";
import Router from "next/router";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <ButtonCustom onClick={() => Router.push("/product")}>
        Quay lại
      </ButtonCustom>
      <main>
        <h1>Thông tin sản phẩm: </h1>
        <p>Mã sản phẩm: {router.query.id}</p>
        <p>Tên sản phẩm: Sản phẩm {router.query.id}</p>
      </main>
    </div>
  );
};

export default ProductDetailPage;
