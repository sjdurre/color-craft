import React from "react";
import Button from "./Button";

const RandomColorButton = ({ onRandom, buttonColor, textColor }) => {
  return (
    <Button onClick={onRandom} buttonColor={buttonColor} textColor={textColor}>
      Random Color
    </Button>
  );
};

export default RandomColorButton;
