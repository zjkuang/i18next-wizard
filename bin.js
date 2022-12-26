#!/usr/bin/env node

import {py} from './src/python-shell/index.js';
import path from 'path';
import url from 'url';

console.log('bin.js > Hello, world!');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`__filename=${__filename}`);
console.log(`__dirname=${__dirname}`);

py();
