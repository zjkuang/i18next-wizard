import {PythonShell} from 'python-shell';
import yargs from 'yargs/yargs';
import {hideBin} from 'yargs/helpers';
import {appLocation} from '@zjkuang/commonjs-utils';

export function py() {
  // appLocation() returns the path to where npx installs this package (app)
  // To get the current directory where this app is running, use process.cwd()
  const script = appLocation() + '/src/python-shell/scripts/trans-gen.py';

  const argv = yargs(hideBin(process.argv)).argv;
  const args = [];
  if (argv.input) {
    args.push('--input');
    args.push(argv.input);
  }
  if (argv.output) {
    args.push('--output');
    args.push(argv.output);
  }

  PythonShell.run(script, {args}, function(err, _result) {
    if (err) { throw err; }
    // console.log(`PythonShell.run(${script}) result: ${_result}`);
    console.log(`PythonShell.run(${script}): Done!`);
  });
};
