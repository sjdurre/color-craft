import React from "react";

const Button = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 20px",
                margin: "5px",
                cursor: "pointer",
                fontSize: "16px",
                borderRadius: "5px",
            }}
        >
            {children}
        </button>
    );
};

export default Button;