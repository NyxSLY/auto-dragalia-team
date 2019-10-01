const { execSync } = require('child_process');
const version = require('../package.json').version;

execSync(`adb push dist/auto-dragalia-${version}.auto.js /Documents/`, {
  stdio: 'inherit'
});
