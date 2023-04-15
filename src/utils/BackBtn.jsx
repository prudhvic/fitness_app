import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const BackBtn = ({ className }) => {
  let navigate = useNavigate();
  return (
    <div>

      <button className={className} onClick={() => navigate(-1)}>
        <MdKeyboardBackspace />
      </button>
    </div>
  );
};

export default BackBtn;
