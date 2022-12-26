const appLocation = () => {
  const dir = __dirname
  .replace('/node_modules/@zjkuang/commonjs-utils', '') // local `npx .`
  .replace('/packages/commonjs-utils', ''); // remote `npx <app-package>`
  return dir;
}

const get_argv = () => {
  const yargs = require('yargs/yargs');
  const { hideBin } = require('yargs/helpers');
  const _argv = yargs(hideBin(process.argv)).argv;
  return _argv;
}

module.exports = {
  appLocation,
  get_argv,
}
