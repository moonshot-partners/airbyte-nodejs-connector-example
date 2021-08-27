module.exports = async function discover() {
  const catalog = {
    streams: [
      {
        name: 'example',
        supported_sync_modes: ['full_refresh'],
        json_schema: {
          properties: {
            message: {
              type: 'string',
            },
            output: {
              type: 'string',
            }
          },
        },
      },
    ],
  };

  const airbyte_message = { type: 'CATALOG', catalog };
  console.log(JSON.stringify(airbyte_message));
}
