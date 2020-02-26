import calc from '../calc/index';
import readFile from '../fileUtil/readFile';
import loadFile from '../fileUtil/loadFile';

test('given_km_and_minute_then_price', () => {
  expect(calc(1, 0)).toBe(6);
  expect(calc(3, 0)).toBe(7);
  expect(calc(10, 0)).toBe(13);
  expect(calc(2, 3)).toBe(7);
});
test('given_filepath_then_file', () => {
  expect(loadFile('testData.txt')).toMatch('公里');
});

test('given_filepath_then_err', () => {
  try {
    loadFile('testData1.txt');
  } catch (e) {
    expect(e.toString()).toMatch('no such file or directory');
  }
});

test('given_file_then_priceStr', () => {
  const testStr = '收费6元\n收费7元\n收费13元\n收费7元\n';
  expect(readFile('testData.txt')).toBe(testStr);
});
