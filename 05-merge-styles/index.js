const fs = require('fs').promises,
  path = require('path'),
  wayPath = path.join(__dirname, 'styles');
let arr = [],
  resultArr = [];

async function bundleStyle() {
  fs.readdir(wayPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach((file) => {
        if (file.isFile()) {
          if (path.extname(file.name) === '.css') {
            arr.push(file.name);
          }
        }
      });
      arr.forEach((sample) => {
        resultArr.push(
          fs.promises.readFile(path.join(wayPath, sample), 'utf8'),
        );
      });
      Promise.all(resultArr)
        .then((data) => {
          fs.promises.writeFile(
            path.join(__dirname, 'project-dist', 'bundle.css'),
            data.join(' '),
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
bundleStyle();
