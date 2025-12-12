// src/utils/colorUtils.js

// Convert RGB → HEX
export function rgbToHex(r, g, b) {
  const toHex = (c) => {
    const h = c.toString(16).padStart(2, "0");
    return h;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Get contrasting text color based on brightness
export function getContrastColor(r, g, b) {
  // Perceived luminance formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
}

// Generate a complementary color
export function getComplementaryColor(r, g, b) {
  return {
    r: 255 - r,
    g: 255 - g,
    b: 255 - b
  };
}
