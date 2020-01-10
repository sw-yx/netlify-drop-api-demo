// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const fetch = require('node-fetch');
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World';
    const temp = await fetch('https://api.netlify.com/api/v1/drop/token', {
      method: 'POST'
    }).then((x) => x.json());
    console.log({ temp });
    return {
      statusCode: 200,
      body: JSON.stringify({ temp })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
