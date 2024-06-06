// Example test case
test("Example", function (assert) {
    assert.propEqual(convertRomanToInteger("I"), { value: 1, message: '', result: true }, "TC-1");
});

// Test cases from task #4
test("TC-1", function (assert) {
    assert.propEqual(convertIntegerToRoman(1), { value: 'I', message: '', result: true }, "TC-1");
});

test("TC-2", function (assert) {
    assert.propEqual(convertIntegerToRoman('X'), { value: 0, message: 'Please enter a valid integer', result: false }, "TC-2");
});

test("TC-3", function (assert) {
    assert.propEqual(convertRomanToInteger('X'), { value: 10, message: '', result: true }, "TC-3");
});

test("TC-4", function (assert) {
    assert.propEqual(convertRomanToInteger('111'), { value: 0, message: 'Please enter a valid roman', result: false }, "TC-4");
});

test("TC-5", function (assert) {
    assert.propEqual(convertIntegerToRoman(3999), { value: 'MMMCMXCIX', message: '', result: true }, "TC-5");
});

test("TC-6", function (assert) {
    assert.propEqual(convertIntegerToRoman(0), { value: 0, message: 'Out of range (1-3999)', result: false }, "TC-6");
});

test("TC-7", function (assert) {
    assert.propEqual(convertIntegerToRoman(4000), { value: 0, message: 'Out of range (1-3999)', result: false }, "TC-7");
});

test("TC-8", function (assert) {
    assert.propEqual(convertRomanToInteger('IIII'), { value: 0, message: 'Please enter a valid roman', result: false }, "TC-8");
});

test("TC-9", function (assert) {
    assert.propEqual(convertRomanToInteger(''), { value: 0, message: 'Please enter a valid roman', result: false }, "TC-9");
});

test("TC-10", function (assert) {
    assert.propEqual(convertRomanToInteger('MMMDCCCLXXXVIII'), { value: 3888, message: '', result: true }, "TC-10");
});

test("TC-11", function (assert) {
    assert.propEqual(convertIntegerToRoman(58), { value: 'LVIII', message: '', result: true }, "TC-11");
});

test("TC-12", function (assert) {
    assert.propEqual(convertRomanToInteger('LVIII'), { value: 58, message: '', result: true }, "TC-12");
});

test("TC-13", function (assert) {
    assert.propEqual(convertIntegerToRoman(399), { value: 'CCCXCIX', message: '', result: true }, "TC-13");
});

test("TC-14", function (assert) {
    assert.propEqual(convertRomanToInteger('CCCXCIX'), { value: 399, message: '', result: true }, "TC-14");
});
