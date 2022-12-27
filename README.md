# i18next-wizard

This package generates [i18next](https://yarnpkg.com/package/i18next) strings for your app.

## How to use

(1) Create a folder `yaml` in your app, and define your strings in yaml file(s) in this `yaml` folder.  
(2) Run this package as an npx command, providing the input and output path as command line arguments. (The input path defaults to './yaml' and the output path defaults to './generated')

## Example

The yaml script for generating i18next strings should be looking like this:  
`statements.yaml`
```
group: Statements
entries:
  - key: ICameFrom
    translations:
      en: I came from Canada.
      zh_CN: 我来自大陆。
      zh_HK: 我來自香港。
      zh_TW: 我來自台灣。
  - key: ISawGoose
    args:
      - name: count
        type: number
    counted: true
    zero:
      translations:
        en: I saw no goose.
        zh_CN: 我没有看到鹅。
        zh_HK: 我沒有看到鵝。
        zh_TW: 我沒有看到鵝。
    one:
      translations:
        en: I saw a goose.
    other:
      translations:
        en: I saw ${count} geese.
    pluraless:
      translations:
        zh_CN: 我看到${count}只鹅。
        zh_HK: 我看到${count}隻鵝。
        zh_TW: 我看到${count}隻鵝。
```

Note that
```
For languages in which a noun has different forms for singular and plural, (e.g. in English the word "book" has its singular form "book" and plural form "books",) define `zero`, `one`, `other` for each case.

For languages (such as Chinese) in which a noun has the same form for singular and plural, define `zeor` and `pluraless` for each case.
```

Now suppose I have saved this statements.yaml file in `$APP_ROOT/src/assets/strings/yaml`.

To generate the i18next strings, I could run this package from `$APP_ROOT`:
```
npx @zjkuang/i18next-wizard --input src/assets/strings/yaml --output src/assets/strings/generated
```

If everything goes well, you will find the generated i18next strings and functions in the output folder. (`src/assets/strings/generated` for the above example.) The generated folder `.../generated/translations/` contains files for different languages. There is a single file `.../generated/i18nextStrings.ts` looking like this:
```
// Generated file. Don't edit.

import i18next from 'i18next';

export const i18nextStrings = {
  Greetings: {
    HelloWorld: () => {
      return i18next.t('Greetings.HelloWorld');
    },
    GreetingTo: (greeting: string, whom: string) => {
      return i18next.t('Greetings.GreetingTo', {
        greeting,
        whom,
      });
    },
  },
  Statements: {
    ICameFrom: () => {
      return i18next.t('Statements.ICameFrom');
    },
    ISawGoose: (count: number) => {
      return i18next.t('Statements.ISawGoose', {
        count,
      });
    },
  },
};
```

Then in your app, you can use them simply by
```
i18nextStrings.Statements.ICameFrom()
```
or
```
i18nextStrings.Statements.ISawGoose(numberOfGeese)
```

The first time you run this npx command, you will be asked
```
Need to install the following packages:
  @zjkuang/i18next-wizard@0.0.14
Ok to proceed? (y) 
```
and you will have to press Enter for the default answer `yes`. But if you are doing a CI/CD, this keyboard interaction will break the automation. To avoid answering the default `yes`, you can do
```
echo y | npx @zjkuang/i18next-wizard
```
And here is an example of adding this npx command to the app's `package.json` "script"
package.json
```
{
  ...
  "scripts": {
    ...
    "string-gen": "cd src/assets/strings && echo y | npx @zjkuang/i18next-wizard && cd ../../..",
    ...
  },
  ...
}
```

## Trouble-shooting

### (1) npx is running the old version
Clean npx cache by
```
rm -rf ~/.npm/_npx
```
