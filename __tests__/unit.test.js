// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/* Phone Tests */
//UNIT_TEST_PHONE_1
test('(858) 123-1234 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(858) 123-1234')).toBe(true);
});
//UNIT_TEST_PHONE_2
test('619-321-4321 is a valid phone number', () => {
  expect(functions.isPhoneNumber('619-321-4321')).toBe(true);
});
//UNIT_TEST_PHONE_3
test('123456abcd is not a valid phone number', () => {
  expect(functions.isPhoneNumber('123456abcd')).toBe(false);
});
//UNIT_TEST_PHONE_4
test('1234567890 is not a valid phone number', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});


/* Email Tests */
//UNIT_TEST_EMAIL_1
test('d1lam@ucsd.edu is a valid email', () => {
  expect(functions.isEmail('d1lam@ucsd.edu')).toBe(true);
});
//UNIT_TEST_EMAIL_2
test('123@abc.efg is a valid email', () => {
  expect(functions.isEmail('123@abc.efg')).toBe(true);
});
//UNIT_TEST_EMAIL_3
test('d1lam@ucsd is not a valid email', () => {
  expect(functions.isEmail('d1lam@ucsd')).toBe(false);
});
//UNIT_TEST_EMAIL_4
test('ucsd.edu is not a valid email', () => {
  expect(functions.isEmail('ucsd.edu')).toBe(false);
});


/* Password Tests */
//UNIT_TEST_PASSWORD_1
test('Hauscoffee is a valid password', () => {
  expect(functions.isStrongPassword('Hauscoffee')).toBe(true);
});
//UNIT_TEST_PASSWORD_2
test('strong_password is a valid password', () => {
  expect(functions.isStrongPassword('strong_password')).toBe(true);
});
//UNIT_TEST_PASSWORD_3
test('aBc is an invalid password', () => {
  expect(functions.isStrongPassword('aBc')).toBe(false);
});
//UNIT_TEST_PASSWORD_4
test('1doesnotstartwithletter is an invalid password', () => {
  expect(functions.isStrongPassword('1doesnotstartwithletter')).toBe(false);
});


/* Date Tests */
//UNIT_TEST_DATE_1
test('08/15/2000 is a valid date', () => {
  expect(functions.isDate('08/15/2000')).toBe(true);
});
//UNIT_TEST_DATE_2
test('2/8/2000 is a valid date', () => {
  expect(functions.isDate('2/8/2000')).toBe(true);
});
//UNIT_TEST_DATE_3
test('11/14/00 is an invalid date', () => {
  expect(functions.isDate('11/14/00')).toBe(false);
});
//UNIT_TEST_DATE_4
test('01012000 is an invalid date', () => {
  expect(functions.isDate('01012000')).toBe(false);
});


/* Hex Tests */
//UNIT_TEST_HEX_1
test('#FB607F is a valid hex color', () => {
  expect(functions.isHexColor('#FB607F')).toBe(true);
});
//UNIT_TEST_HEX_2
test('#FF0 is a valid hex color', () => {
  expect(functions.isHexColor('#FF0')).toBe(true);
});
//UNIT_TEST_HEX_3
test('ff20qq is an invalid hex color', () => {
  expect(functions.isHexColor('ff20qq')).toBe(false);
});
//UNIT_TEST_HEX_4
test('#FF20 is an invalid hex color', () => {
  expect(functions.isHexColor('#FF20')).toBe(false);
});