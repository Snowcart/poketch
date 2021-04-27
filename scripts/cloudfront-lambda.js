exports.handler = async (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const { uri } = request;

  const htmlExtRegex = /(.*)\.html?$/;
  const periodExtRegex = /\./;
  if (htmlExtRegex.test(request.uri) || !periodExtRegex.test(request.uri)) {
    request.uri = '/index.html';
  }

  callback(null, request);
};
