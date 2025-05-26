#!/usr/bin/env node
// scripts/colorize-dots.js
//
// Usage: node scripts/colorize-dots.js path/to/your.svg

const fs = require('fs');
const [ , , filePath ] = process.argv;
if (!filePath) {
  console.error('Error: SVG path required');
  process.exit(1);
}

// GitHub contribution colors by level:
const COLORS = {
  '0': '#161b22',   // no commits (dark background)
  '1': '#0e4429',   // 1–9 commits
  '2': '#006d32',   // 10–19 commits
  '3': '#26a641',   // 20–29 commits
  '4': '#39d353'    // 30+ commits
};

let svg = fs.readFileSync(filePath, 'utf8');

// Replace every <rect … data-level="X" … fill="…"> with the proper color:
svg = svg.replace(
  /<rect([^>]*?)data-level="([0-4])"([^>]*?)fill="[^"]*"/g,
  (_, before, lvl, after) => `<rect${before}data-level="${lvl}"${after}fill="${COLORS[lvl]}"`
);

fs.writeFileSync(filePath, svg, 'utf8');
console.log(`✔️  Colored dots in ${filePath}`);
