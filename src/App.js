import React, { useState, useEffect } from "react";
import RandomColorButton from "./components/RandomColorButton";
import ClearButton from "./components/ClearButton";
import SubmitButton from "./components/SubmitButton";
import ColorInput from "./components/ColorInputs";
import Graphics from "./Graphics";

import { rgbToHex, getContrastColor, getComplementaryColor } from "./utils/colorUtils";

function App() {
  const [color, setColor] = useState({ r: 120, g: 120, b: 120 });
  const [colorCount, setColorCount] = useState(0);

  const rgbString = `rgb(${color.r}, ${color.g}, ${color.b})`;
  const hexValue = rgbToHex(color.r, color.g, color.b);
  const textColor = getContrastColor(color.r, color.g, color.b);
  const comp = getComplementaryColor(color.r, color.g, color.b);
  const compColorString = `rgb(${comp.r}, ${comp.g}, ${comp.b})`;

  // Apply background color to body
  useEffect(() => {
    document.body.style.backgroundColor = rgbString;
    document.body.style.color = textColor;
  }, [rgbString, textColor]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (value < 0 || value > 255) return;

    setColor((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleRandom = () => {
    setColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });

    setColorCount((prev) => prev + 1);
  };

  const handleClear = () => {
    setColor({ r: 120, g: 120, b: 120 });
  };

  const handleSubmit = () => {
    alert(`Submitted color: ${rgbString}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: textColor }}>ColorCraft: RGB Color Generator</h1>

      <h2 style={{ color: textColor }}>Current Color</h2>
      <p style={{ fontSize: "1.3rem", color: textColor }}>
        RGB: {rgbString} <br />
        HEX: {hexValue}
      </p>

      <ColorInput 
        color={color} 
        onInputChange={handleInputChange}
        textColor={textColor}
      />

      <div>
        <RandomColorButton onRandom={handleRandom} buttonColor={compColorString} textColor={textColor} />
        <ClearButton onClear={handleClear} buttonColor={compColorString} textColor={textColor} />
        <SubmitButton onSubmit={handleSubmit} buttonColor={compColorString} textColor={textColor} />
      </div>

      <h2 style={{ marginTop: "30px", color: textColor }}>Random Color Chart</h2>

      <Graphics colorCount={colorCount} barColor={compColorString} textColor={textColor} />
    </div>
  );
}

export default App;
