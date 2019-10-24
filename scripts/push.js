const { execSync } = require('child_process');
const version = require('../package.json').version;
const name = require('../package.json').name;

execSync(
  `adb push dist/${name}-${version}.auto.js storage/emulated/0/Documents/`,
  {
    stdio: 'inherit'
  }
);
