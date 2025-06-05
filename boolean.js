export const isPositive = (num) => num > 0;

export const isOdd = (num) => num % 2 !== 0;

export const checkInequality = (a, b) => a > 2 && b <= 3;

export const checkInequality2 = (a, b) => a >= 0 || b < -2;

export const checkBetweenNumbers = (a, b, c) => a < b && b < c;

export const checkOddThreeDigitNumber = (num) => num % 2 !== 0 && num >= 100;

export const checkUniqueDigits = (num) => {
  const st = Math.abs(num).toString();
  return st.length === 3 ? (st[0] !== st[1]) && (st[0] !== st[2]) && (st[1] !== st[2]) : false;
};

export const isSecondQuadrant = (x, y) => x < 0 && y > 0;

export const isIsoscelesTriangle = (a, b, c) => (a === b || a === c || b === c) && (a !== 0 || b !== 0 || c !== 0);

export const areSameColorFields = (x1, y1, x2, y2) => {

};
