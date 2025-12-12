import React from "react";

const Button = ({ onClick, children, buttonColor, textColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "5px",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
        backgroundColor: buttonColor,
        color: textColor,
        border: `2px solid ${textColor}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
