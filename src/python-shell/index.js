import {PythonShell} from 'python-shell';
import {appLocation} from '@zjkuang/commonjs-utils';

export function py() {
  // PythonShell.runString('print("PythonShell > Hello, world!")', null, function(err) {
  //   if (err) { throw err; }
  //   console.log('PythonShell > Success!');
  // });

  const script = appLocation() + '/src/python-shell/scripts/hello.py';
  console.log(`py() :: script: ${script}`);

  PythonShell.run(script, null, function(err, result) {
    if (err) { throw err; }
    console.log(`PythonShell.run('hello.py') result: ${result}`);
    console.log('PythonShell > Success!');
  });
};
