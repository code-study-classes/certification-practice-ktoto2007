export const incrementIfPositive = (num) => (num > 0 ? num + 1 : num);

export const getIndexOfSmallerNumber = (x1, x2) => (x1 <= x2 ? 1 : 2);

export const findMiddleNumber = (x1, x2, x3) => {
  if (x2 > x1 && x2 < x3) {
    return x2;
  }
  if (x1 > x2 && x1 < x3) {
    return x1;
  }
  return x3;
};

export const findUniqueNumber = (x1, x2, x3) => {
  if (x1 !== x2 && x1 !== x3) {
    return 1;
  }
  if (x2 !== x1 && x2 !== x3) {
    return 2;
  }
  if (x3 !== x1 && x3 !== x2) {
    return 3;
  }
  return 4;
};

export const calculateF = (x) => {
  if (x < 0) {
    return 0;
  }
  if ((x >= 0 && x < 1) || (x >= 2 && x < 3)) {
    return 1;
  }
  return -1;
};

export const describeNumber = (num) => {
  const isEven = num % 2 === 0 ? 'четное' : 'нечетное';
  let digits = num >= 100 ? 'трехзначное' : 'двузначное';
  if (num < 10) {
    digits = 'однозначное';
  }
  return `${isEven} ${digits} число`;
};

export const getDayName = (num) => {
  switch (num) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day number.';
  }
};

export const convertToMeters = (unitNumber, num) => {
  switch (unitNumber) {
    case 1: return num * 0.1;
    case 2: return num * 1000;
    case 3: return num;
    case 4: return num * 0.001;
    case 5: return num * 0.01;
    default: return null;
  }
};

export const describeAge = (num) => {
  const tens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят'];
  const ones = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
  let result = ''
  switch (num.toString()[0]) {
    case '2': result += `${tens[0]}`
    case '3': result += `${tens[1]}`
    case '4': result += `${tens[2]}`
    case '5': result += `${tens[3]}`
    case '6': result += `${tens[4]}`
  }
  switch (num.toString()[1]) {
    case '1': result += ` ${ones[0]}`
    case '2': result += ` ${ones[1]}`
    case '3': result += ` ${ones[2]}`
    case '4': result += ` ${ones[3]}`
    case '5': result += ` ${ones[4]}`
    case '6': result += ` ${ones[5]}`
    case '7': result += ` ${ones[6]}`
    case '8': result += ` ${ones[7]}`
    case '9': result += ` ${ones[8]}`
  }
  switch (num.toString()[1]) {
    case '1': result += 'год'
    case '2': result += 'года'
    case '3': result += 'года'
    case '4': result += 'года'
    case '5': result += 'лет'
    case '6': result += 'лет'
    case '7': result += 'лет'
    case '8': result += 'лет'
    case '9': result += 'лет'
  }
  return result
};
