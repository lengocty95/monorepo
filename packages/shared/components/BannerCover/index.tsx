import React from "react";

type ButtonType = "primary" | "default";

export const BannerCover: React.FC = () => {
  return (
    <>
      <div className="banner">Black Pink in your area</div>

      <style jsx>
        {`
          .banner {
            padding: 20px;
            width: 100%;
            height: 200px;
            background: pink;
            color: black;
            border: 1px solid #ffffff;
            border-radius: 15px;
            cursor: pointer;
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
};
