let fs = require('fs'),
  path = require('path'),
  fileArr = [],
  result = '';
const wayPath = path.join(__dirname, 'secret-folder');
fs.readdir(wayPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (file.isFile()) {
        fileArr.push(file.name);
      }
    });
    fileArr.forEach((sample) => {
      result =
        path.parse(sample).name +
        ' - ' +
        path.extname(sample).replace('.', '') +
        ' - ' +
        fs.statSync(path.join(wayPath, sample)).size / 1000 +
        'Kb';
      console.log(result);
    });
  }
});
