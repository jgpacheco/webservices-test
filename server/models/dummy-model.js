module.exports = function(Dummymodel) {

  Dummymodel.remoteMethod(
    'areYouThere',
    {
      'accessType': 'EXECUTE',
      'accepts': [
        {
          'arg': 'message',
          'type': 'string',
          'http': { 'source': 'query' }
        }
      ],
      'returns': {
        'arg': 'message', 'type': 'string', 'root': true
      },
      'http': { 'path': '/areYouThere', 'verb': 'put' }
    }
  );

  Dummymodel.areYouThere = function (message, callback) {
    return callback(null, 'Im here, in i receive this message: "' + message + '".');
  };
};
