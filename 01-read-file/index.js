let fs = require('fs'),
  stream = new fs.ReadStream('text.txt', 'utf-8'),
  data = '';
stream
  .on('data', function (chunk) {
    data += chunk;
  })
  .on('end', function () {
    console.log(data);
  });
