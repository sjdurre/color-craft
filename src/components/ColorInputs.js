import React from "react";

function ColorInput({ color, onInputChange, textColor }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {["r", "g", "b"].map((channel) => (
        <label key={channel} style={{ marginRight: "10px", color: textColor }}>
          {channel.toUpperCase()}:{" "}
          <input
            type="number"
            name={channel}
            min="0"
            max="255"
            value={color[channel]}
            onChange={onInputChange}
            style={{
              width: "60px",
              padding: "4px",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: "4px",
            }}
          />
        </label>
      ))}
    </div>
  );
}

export default ColorInput;
