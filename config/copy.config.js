const path = require('path');
const fs = require('fs-extra');
const srcPath = '../content-player';
const destinationPath = '../www/content-player';

fs.readdir(srcPath, function (err, files) {
    if (err) {
        // return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if (file === 'canvas-interface.js' || file === 'canvas-telemetry-interface.js'
            || file === 'polyfills.js' || file === 'preview.html') {
             //   console.log(file);
            fs.copy(path.join(srcPath, file), path.join(destinationPath, file), (err) => {
                if (err) throw err;
            //    console.log('File was copied to destination');
            });
        }
    });
});

