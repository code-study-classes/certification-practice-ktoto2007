export const countUppercaseLetters = (text) => {
  let count = 0;
  for (const char of text) {
    if (char.toUpperCase() === char.toLowerCase()) {
      count += 0;
    } else if (char === char.toUpperCase()) {
      count += 1;
    }
  }
  return count;
};

export const combineStrings = (n1, n2, str1, str2) => {
  if (n2 === 0) {
    return `${str1.slice(0, n1)}`;
  }
  return str1.slice(0, n1) + str2.slice(-n2);
};

export const containsSubstring = (str, substr) => str.includes(substr);

export const replaceSubstring = (str, substr, replacement) => str.replace(substr, replacement);

export const countWordsWithSameLetters = (text) => (text.length > 1 ? text
  .toLowerCase()
  .split(' ')
  .filter((word) => word[0] === word.at(-1)).length : 0);

export const countWordsWithA = (text) => text.toLowerCase().split(' ').filter((word) => word.includes('a')).length;

export const normalizeSpaces = (text) => {
  const norm = text.trim();
  let result = '';
  for (let i = 0; i < norm.length; i += 1) {
    if (!(norm[i] === ' ' && norm[i + 1] === ' ')) {
      result += norm[i];
    }
  }
  return result;
};

export const extractFileName = (path) => path.split('/').at(-1).split('.')[0];

export const encryptSentence = (text) => {
  let result = '';
  for (let i = 1; i < text.length; i += 2) {
    result += text[i];
  }
  if (text.length % 2 === 0) {
    for (let i = 2; i <= text.length; i += 2) {
      result += text.at(-i);
    }
  } else {
    for (let i = 1; i <= text.length; i += 2) {
      result += text.at(-i);
    }
  }
  return result;
};

export const checkBrackets = (str) => {
  const openingSymbols = ['(', '[', '{', '<'];
  const closingSymbols = [')', ']', '}', '>'];
  const stack = [];
  for (const symbol of str) {
    if (openingSymbols.includes(symbol)) {
      stack.push(symbol);
    } else if (closingSymbols.includes(symbol)) {
      const pop = stack.pop();
      if (!pop) {
        return str.indexOf(symbol);
      }
      if (openingSymbols.indexOf(pop) !== closingSymbols.indexOf(symbol)) {
        return str.indexOf(symbol);
      }
    }
  }
  return stack.length === 0 ? 0 : -1;
};
