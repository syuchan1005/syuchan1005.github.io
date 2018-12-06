/* eslint-disable */
const fsExtra = require('fs-extra');
const fs = require('fs');

try {
  fs.accessSync(process.argv[2]);
  fsExtra.moveSync(process.argv[2], process.argv[3]);
} catch (e) {
  /* ignored */
}
