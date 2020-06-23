const webp = require('webp-converter');
const fs = require('fs');
const path = require('path');
const currentPath = process.cwd();
const arrExtensions = ['.jpg', '.png', '.jpeg', '.JPG'];

fs.readdir(currentPath, (err, files) => {
  if (err) {
    return console.error(err);
  }
  for (let filename of files) {
    const extension = path.extname(filename);
    console.log(filename);
    if (arrExtensions.includes(extension)) {
      const basename = path.basename(filename, extension);
      webp.cwebp(path.join(currentPath, basename + extension), path.join(currentPath, basename + '.webp'), '-q 80', function(status, error) {
        if (status === '100') {
          console.log('Conversion successful\n');
        } else {
          console.log(status, error);
        }
      });
    }
  }
});