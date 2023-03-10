# Description
This `commonjs-utils` holds some facilities only available in CommonJS.

# How to use
## Installation
In the root folder of the app (or another module/package that uses `commonjs-utils`),
```
yarn add file:<relative/path/to>/commonjs-utils
```

## Updating
### Option 1: Upgrade the version
(1) Increase the version number in commonjs-utils/package.json
(2) In the root folder of the app (or another module/package that uses `commonjs-utils`),  
```
yarn upgrade @zjkuang/commonjs-utils
```

### Option 2: Uninstall and reinstall
In the root folder of the app (or another module/package that uses `commonjs-utils`),
```
yarn remove @zjkuang/commonjs-utils
yarn add file:<relative/path/to>/commonjs-utils
```
