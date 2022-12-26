#!/usr/bin/env node

import {py} from './src/python-shell/index.js';
import {appLocation, get_argv} from '@zjkuang/commonjs-utils';

console.log('bin.js > Hello, world!');

console.log(`utils > appLocation: ${appLocation()}`);
console.log(`utils > argv: ${JSON.stringify(get_argv())}`);

py();
