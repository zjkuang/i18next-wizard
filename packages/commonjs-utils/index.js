const appLocation = () => {
  const dir = __dirname.replace('/node_modules/@zjkuang/commonjs-utils', '');
  return dir;
}

module.exports = {
  appLocation,
}
