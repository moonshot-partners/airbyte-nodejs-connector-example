const { ArgumentParser } = require('argparse');

// extracted from https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-plaid

module.exports = function(args) {
  const parentParser = new ArgumentParser({ add_help: false });
  const mainParser = new ArgumentParser({ add_help: false });
  const subparsers = mainParser.add_subparsers({ title: 'commands', dest: 'command' });

  // Accept the spec command
  subparsers.add_parser('spec', {
    help: 'outputs the json configuration specification',
    parents: [parentParser],
  });

  // Accept the check command
  const checkParser = subparsers.add_parser('check', {
    help: 'checks the config used to connect',
    parents: [parentParser],
  });

  const requiredCheckParser = checkParser.add_argument_group('required named arguments');
  requiredCheckParser.add_argument('--config', {
    type: 'str',
    required: true,
    help: 'path to the json configuration file',
  });

  // Accept the discover command
  const discover_parser = subparsers.add_parser('discover', {
    help: "outputs a catalog describing the source's schema",
    parents: [parentParser],
  });
  const requiredDiscoverParser = discover_parser.add_argument_group('required named arguments');
  requiredDiscoverParser.add_argument('--config', {
    type: 'str',
    required: true,
    help: 'path to the json configuration file',
  });

  // Accept the read command
  const readParser = subparsers.add_parser('read', {
    help: 'reads the source and outputs messages to STDOUT',
    parents: [parentParser],
  });
  readParser.add_argument('--state', {
    type: 'str',
    required: false,
    help: 'path to the json-encoded state file',
  });
  const requiredReadParser = readParser.add_argument_group('required named arguments');
  requiredReadParser.add_argument('--config', {
    type: 'str',
    required: true,
    help: 'path to the json configuration file',
  });
  requiredReadParser.add_argument('--catalog', {
    type: 'str',
    required: true,
    help: 'path to the catalog used to determine which data to read',
  });

  const parsedArgs = mainParser.parse_args(args);
  const command = parsedArgs.command;

  return { parsedArgs, command}
}
