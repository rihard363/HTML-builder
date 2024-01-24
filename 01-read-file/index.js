let fs = require('fs'),
  path = require('path'),
  stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8'),
  data = '';
stream
  .on('data', function (chunk) {
    data += chunk;
  })
  .on('end', function () {
    console.log(data);
  });
