const fs = require('fs');
const path = require('path');

export default function loadFile(fileName) {
  const filePath = `${path.resolve('./')}/src/fixtures/${fileName}`;
  return fs.readFileSync(filePath, 'utf8');
}
