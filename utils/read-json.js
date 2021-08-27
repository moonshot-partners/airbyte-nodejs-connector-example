const fs = require('fs');

module.exports = async function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}
