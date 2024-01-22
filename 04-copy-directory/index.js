const fs = require('fs'),
  path = require('path'),
  wayPath = path.join(__dirname, 'files-copy');

function createDir(wayPath) {
  let dir = '';
  fs.mkdir(path.join(wayPath), { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
    dir = wayPath;
    return dir;
  });
}

async function unlinkDir(wayPath) {
  let dir = await createDir(wayPath);
  console.log(dir);
  fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < files.length; i++) {
        fs.unlink(
          path.join(path.join(__dirname, 'files-copy'), files[i]),
          (err) => {
            console.log(err);
          },
        );
      }
    }
  });
}

async function copyDir() {
  let dir = await createDir(wayPath);
  console.log(dir);
  let clearDir = await unlinkDir(wayPath);
  console.log(clearDir);
  fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < files.length; i++) {
        fs.copyFile(
          path.join(path.join(__dirname, 'files'), files[i]),
          path.join(path.join(__dirname, 'files-copy'), files[i]),
          (err) => {
            console.log(err);
          },
        );
      }
    }
  });
}
copyDir();
