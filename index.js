const spec = require('./commands/spec');
const check = require('./commands/check');
const discover = require('./commands/discover');
const read = require('./commands/read');
const commandParser = require('./commnad-parser');
const readJson = require('./utils/read-json');
const getInputFilePath = require('./utils/get-input-file-path');

async function run(args) {
  const { parsedArgs, command } = await commandParser(args);

  // https://docs.airbyte.io/understanding-airbyte/airbyte-specification
  
  if (command === 'spec') {
    await spec();
  } else if (command === 'check') {
    const config = await readJson(getInputFilePath(parsedArgs.config));
    await check(config);
  } else if (command === 'discover') {
    await discover();
  } else if (command === 'read') {
    const config = await readJson(getInputFilePath(parsedArgs.config));
    const configuredCatalog = await readJson(getInputFilePath(parsedArgs.catalog));
    await read(config, configuredCatalog);
  }
}

// initialize

run(process.argv.slice(2)).catch((reason) => console.log(reason))
