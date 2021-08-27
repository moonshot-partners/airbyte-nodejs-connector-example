const path = require('path');
const readJson = require('../utils/read-json');

module.exports = async function () {
  // Read the file named spec.json from the module directory as a JSON file
  const specPath = path.join(path.dirname(__filename), '../spec.json');
  const specification = await readJson(specPath);

  // form an Airbyte Message containing the spec and print it to stdout
  const airbyteMessage = { type: 'SPEC', spec: specification };

  console.log(JSON.stringify(airbyteMessage));
}
