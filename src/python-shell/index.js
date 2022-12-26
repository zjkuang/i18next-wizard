import {PythonShell} from 'python-shell';

export function py() {
  // PythonShell.runString('print("PythonShell > Hello, world!")', null, function(err) {
  //   if (err) { throw err; }
  //   console.log('PythonShell > Success!');
  // });

  PythonShell.run('hello.py', null, function(err, result) {
    if (err) { throw err; }
    console.log(`PythonShell.run('hello.py') result: ${result}`);
    console.log('PythonShell > Success!');
  });
};
