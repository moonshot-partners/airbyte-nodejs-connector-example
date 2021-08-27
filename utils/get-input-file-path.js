const path = require('path');

module.exports = function getInputFilePath(filePath) {
  if (path.isAbsolute(filePath)) {
    return filePath;
  } else {
    return path.join(process.cwd(), filePath);
  }
}
