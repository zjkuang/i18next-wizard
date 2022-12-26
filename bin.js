#!/usr/bin/env node

import {py} from './src/python-shell/index.js';
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';
import {appLocation} from '@zjkuang/commonjs-utils';

console.log('bin.js > Hello, world!');

const argv = yargs(hideBin(process.argv)).argv;
console.log(`yargs > ${JSON.stringify(argv)}`);

console.log(`utils > appLocation: ${appLocation()}`);

py();
