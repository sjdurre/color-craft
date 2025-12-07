import React from "react";

function ColorInput({ color, onInputChange }) {
    return (
        <div style={{ marginBottom: "20px" }}>>
            <label>
                R:{" "}
                <input 
                    type="number"
                    name="r"
                    min="0"
                    max="255"
                    value={color.r}
                    onChange={onInputChange}
                />
            </label>

            <label style={{ marginLeft: "10px" }}>
                G:{" "}
                <input 
                    type="number"
                    name="g"
                    min="0"
                    max="255"
                    value={color.g}
                    onChange={onInputChange}
                />
            </label>

            <label style={{ marginLeft: "10px" }}>
                B:{" "}
                <input 
                    type="number"
                    name="b"
                    min="0"
                    max="255"
                    value={color.b}
                    onChange={onInputChange}
                />
            </label>
        </div>
    );
}

export default ColorInput;