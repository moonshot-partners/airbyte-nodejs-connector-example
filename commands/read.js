module.exports = async function (config, catalog) {
  const data = {
    message: 'Hello World',
    output: config.output || 'empty'
  }

  const record = {
    stream: 'example',
    data: data,
    emitted_at: 1
  };

  [
    { type: 'RECORD', record: record }
  ].forEach((record) => {
    console.log(JSON.stringify(record))
  })
}
