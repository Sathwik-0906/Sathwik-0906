const fs = require("fs");
const path = "./dist/github-contribution-grid-snake-dark.svg";

// Read the SVG
let svg = fs.readFileSync(path, "utf-8");

// Replace black dots with green (#39FF14)
svg = svg.replace(/fill="#000000"/g, 'fill="#39FF14"');

// Save the modified SVG
fs.writeFileSync(path, svg);

console.log("✅ Recolored dots to green!");
