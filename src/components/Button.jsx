import React from "react";

function Button({ text, icon, id, func }) {
  return (
    <div className="bouton text-center w-100">
      <button className="btn text-white w-100" id={id} onClick={func}>
        {icon}
        {text}
      </button>
    </div>
  );
}

export default Button;
