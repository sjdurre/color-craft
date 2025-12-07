import React from "react";
import Button from "./Button";

const RandomColorButton = ({ onRandom }) => {
    return <Button onClick={onRandom}>Random Color</Button>;
};

export default RandomColorButton;