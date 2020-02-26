import loadFile from './loadFile';
import calc from '../calc/index';

function giveTextThenPriceStr(line) {
  const obj = line.split(',等待');
  return `收费${calc(parseInt(obj[0], 0), parseInt(obj[1], 0))}元\n`;
}

function giveFIleThenReadLine(fileText) {
  let priceStr = '';
  fileText.split('\n').forEach(val => {
    priceStr += giveTextThenPriceStr(val);
  });
  return priceStr;
}

export default function givenFileThenPrice(fileName) {
  return giveFIleThenReadLine(loadFile(fileName));
}
