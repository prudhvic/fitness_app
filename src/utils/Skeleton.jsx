import React from "react";

const Skeleton = () => {
  return (
    <div className="card-loader">
      <div className="img-loader"></div>
      <div className="flex">
        <div className="title-loader"></div>
        <div className="title-loader"></div>
      </div>
      <div className="text-loader"></div>
    </div>
  );
};

export default Skeleton;
