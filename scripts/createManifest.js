const fs = require('fs');
const path = require('path');
// indexファイルはアイコンでないので除外する
const exclusionList = ['index.ts'];
// 対象dirを読む
const files = fs.readdirSync(path.resolve(process.cwd(), `./src`));
// (必要であれば)種類ごとにfieldを分けてdataを作成します。
const data = {
  Icons: files
    .filter((file) => !exclusionList.includes(file))
    .map((file) => file.replace('.tsx', '')),
};
// jsonに書き出します。
fs.writeFileSync('./src/stories/manifest.json', JSON.stringify(data, null, '    '));
