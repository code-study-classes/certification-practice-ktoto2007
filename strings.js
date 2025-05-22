import { words } from "prelude-ls"

export const countUppercaseLetters = (text) => {
    let count = 0
    for (const char of text) {
        if (char.toUpperCase() === char.toLowerCase()) {
            continue
        }
        else if (char === char.toUpperCase()) {
            count += 1
        }
    }
    return count
}

export const combineStrings = (n1, n2, str1, str2) => {
    if (n2 === 0) {
        return str1.slice(0, n1) + ''
    }
    return str1.slice(0, n1) + str2.slice(-n2)
}

export const containsSubstring = (str, substr) => str.includes(substr)

export const replaceSubstring = (str, substr, replacement) => str.replace(substr, replacement)

export const countWordsWithSameLetters = (text) => {
    if (text === '') {
        return 0
    }
    const words = text.toLowerCase().split(' ')
    let count = 0
    for (const word of words) {
        if (word[0] === word.at(-1)) {
            count += 1
        }
    }
    return count
}

export const countWordsWithA = (text) => {
    let count = 0
    const words = text.toLowerCase().split(' ')
    for (const word of words) {
        if (word.includes('a')) {
            count += 1
        }
    }
    return count
}

export const normalizeSpaces = (text) => {
    const norm = text.trim()
    let result = ''
    for (let i = 0; i < norm.length; i += 1) {
        if (norm[i] === ' ' && norm[i + 1] === ' ') {
            continue
        }
        result += norm[i]
    }
    return result
}

export const extractFileName = (path) => path.split('/').at(-1).split('.')[0]

