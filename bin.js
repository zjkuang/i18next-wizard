#!/usr/bin/env node

import {py} from './src/python-shell/index.js';
import {appLocation} from 'utils';

console.log('bin.js > Hello, world!');

console.log(`utils > appLocation: ${appLocation()}`);

py();
