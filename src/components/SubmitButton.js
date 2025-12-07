import React from "react";
import Button from "./Button"

const SubmitButton = ({ onSubmit }) => {
    return <Button onClick={onSubmit}>Submit Color</Button>;
};

export default SubmitButton;