const appLocation = () => {
  const dir = __dirname
  .replace('/node_modules/@zjkuang/commonjs-utils', '') // local `npx .`
  .replace('/packages/commonjs-utils', ''); // remote `npx <app-package>`
  return dir;
}

module.exports = {
  appLocation,
}
