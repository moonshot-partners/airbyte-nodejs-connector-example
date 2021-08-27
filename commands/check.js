module.exports = async function (config) {
  const success = JSON.stringify(
    { 
      type: 'CONNECTION_STATUS', 
      connectionStatus: {
        status: 'SUCCEEDED'
      }
    }
  );

  // const failed = JSON.stringify(
  //   { 
  //     type: 'CONNECTION_STATUS', 
  //     connectionStatus: {
  //       status: 'FAILED',
  //       message: 'failed'
  //     }
  //   }
  // );

  console.log(success);
}
