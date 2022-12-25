#!/usr/bin/env node

const ps = require('./src/python-shell');

console.log('bin.js > Hello, world!');

// __dirname returns where npx cache the installation
console.log(`bin.js > __dirname=${__dirname}`); // __dirname=/Users/kuang/.npm/_npx/06be232737db8544/node_modules/@zjkuang/i18next-wizard
// process.cwd() returns the folder where the npx command is running
console.log(`bin.js > process.cwd()=${process.cwd()}`); // process.cwd()=/Users/kuang

ps.py();
