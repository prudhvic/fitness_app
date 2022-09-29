import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const BackBtn = ({ className }) => {
  let navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(-1)}>
      <MdKeyboardBackspace />
    </button>
  );
};

export default BackBtn;
