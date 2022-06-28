import React from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCustom } from "shared";
import {
  counterActions,
  valueSelector,
} from "shared/store/reducers/counterSlice";

const CustomerDetailPage = () => {
  const dispatch = useDispatch();
  const value = useSelector(valueSelector);

  return (
    <div className="titleWrapper">
      <span className="textStyle">Thông tin chi tiết</span>
      <div>Tên: Le Ngoc Ty</div>
      <div>Quê quán: Ca Mau</div>
      <ButtonCustom onClick={() => Router.push("/")} buttonType="prev">
        Quay lại
      </ButtonCustom>

      <>
        <div>Counter web test</div>
        <div>
          <button
            className="mr-1 mb-1 rounded bg-pink-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-pink-600"
            onClick={() => dispatch(counterActions.increment())}
          >
            +
          </button>
          <input
            className="border border-solid border-blue-100 text-center"
            value={value}
            onChange={(event) =>
              dispatch(
                counterActions.incrementByAmount(Number(event.target.value))
              )
            }
          />
          <button
            className="mr-1 mb-1 rounded bg-pink-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-pink-600"
            onClick={() => dispatch(counterActions.decrement())}
          >
            -
          </button>
        </div>
      </>

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

export default CustomerDetailPage;
