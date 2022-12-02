import React from "react";
import "./isLoading.scss";

const IsLoading = () => {
  return (
    <div className="isLoadingContainer">
      <div className="isLoadingName">Open Eye Royal</div>
      {/* <div className="lineContainer"> */}
      <div className="isLoadingOuterLine">
        <div className="isLoadingInnerLine"></div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default IsLoading;
