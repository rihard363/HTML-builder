let fs = require('fs'),
  path = require('path');
const wayPath = path.join(__dirname, 'secret-folder');
fs.promises
  .readdir(wayPath, { withFileTypes: true })
  .then((files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        let filePath = path.join(wayPath, file.name);
        let fileName = path.parse(filePath).name,
          fileType = path.extname(filePath).replace('.', '');
        fs.promises
          .stat(filePath)
          .then((sample) => {
            console.log(`${fileName} - ${fileType} - ${sample.size / 1000} Kb`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
