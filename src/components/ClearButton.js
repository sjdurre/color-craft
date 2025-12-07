import React from "react";
import Button from "./Button";

const ClearButton = ({ onClear }) => {
    return <Button onClick={onClear}>Clear</Button>;
};

export default ClearButton;