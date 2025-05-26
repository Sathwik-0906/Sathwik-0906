const fs = require('fs');
const path = './dist/github-contribution-grid-snake-dark.svg';

try {
  let svg = fs.readFileSync(path, 'utf8');
  svg = svg.replace(/fill:#000000/g, 'fill:#39FF14'); // green color
  fs.writeFileSync(path, svg, 'utf8');
  console.log('Commit dots recolored successfully.');
} catch (err) {
  console.error('Failed to recolor dots:', err);
  process.exit(1);
}
