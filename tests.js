const { convertRomanToInteger, convertIntegerToRoman } = require('./romans.js');

test('Example', () => {
  expect(convertRomanToInteger('I')).toEqual({ value: 1, message: '', result: true });
});

test('TC-1', () => {
  expect(convertIntegerToRoman(1)).toEqual({ value: 'I', message: '', result: true });
});

test('TC-2', () => {
  expect(convertIntegerToRoman('X')).toEqual({ value: 0, message: 'Please enter a valid integer', result: false });
});

test('TC-3', () => {
  expect(convertRomanToInteger('X')).toEqual({ value: 10, message: '', result: true });
});

test('TC-4', () => {
  expect(convertRomanToInteger('111')).toEqual({ value: 0, message: 'Please enter a valid roman', result: false });
});

test('TC-5', () => {
  expect(convertIntegerToRoman(3999)).toEqual({ value: 'MMMCMXCIX', message: '', result: true });
});

test('TC-6', () => {
  expect(convertIntegerToRoman(0)).toEqual({ value: 0, message: 'Out of range (1-3999)', result: false });
});

test('TC-7', () => {
  expect(convertIntegerToRoman(4000)).toEqual({ value: 0, message: 'Out of range (1-3999)', result: false });
});

test('TC-8', () => {
  expect(convertRomanToInteger('IIII')).toEqual({ value: 0, message: 'Please enter a valid roman', result: false });
});

test('TC-9', () => {
  expect(convertRomanToInteger('')).toEqual({ value: 0, message: 'Please enter a valid roman', result: false });
});

test('TC-10', () => {
  expect(convertRomanToInteger('MMMDCCCLXXXVIII')).toEqual({ value: 3888, message: '', result: true });
});

test('TC-11', () => {
  expect(convertIntegerToRoman(58)).toEqual({ value: 'LVIII', message: '', result: true });
});

test('TC-12', () => {
  expect(convertRomanToInteger('LVIII')).toEqual({ value: 58, message: '', result: true });
});

test('TC-13', () => {
  expect(convertIntegerToRoman(399)).toEqual({ value: 'CCCXCIX', message: '', result: true });
});

test('TC-14', () => {
  expect(convertRomanToInteger('CCCXCIX')).toEqual({ value: 399, message: '', result: true });
});
