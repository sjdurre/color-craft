import React, { useState } from "react";
import RandomColorButton from "./components/RandomColorButton";
import ClearButton from "./components/ClearButton";
import SubmitButton from "./components/SubmitButton";
import ColorInput from "./components/ColorInputs";

function App() {
  const [color, setColor] = useState({r: 120, g: 120, b: 120 });

  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b}`;

  //Handle manual input
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    //Prevent values outside 0-255
    if (value < 0 || value > 255) return;

    setColor((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  //Generate Random color
  const handleRandom = () => {
    setColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  };

  //Clear/reset color
  const handleClear = () => {
    setColor({ r: 120, g: 120, b: 120 });
  };

  //Submit Color
  const handleSubmit = () => {
    console.log("Submitted:", rgbString);
    alert(`Submitted color: ${rgbString}`);
  };

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>ColorCraft: RGB Color Generator</h1>

      {/* Color Preview Box */}
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: rgbString,
          borderRadius: "10px",
          border: "2px solid white",
          marginBottom: "20px",
        }}
      >
      </div>

      <p>Current Color: {rgbString}</p>

      <ColorInput color={color} onInputChange={handleInputChange} />

      {/* Button Components */}
      <RandomColorButton onRandom={handleRandom} />
      <ClearButton onClear={handleClear} />
      <SubmitButton onSubmit={handleSubmit} />
    </div>
  );
}

export default App;