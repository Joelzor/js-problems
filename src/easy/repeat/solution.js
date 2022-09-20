// Given a string, create the same string where each character is repeated once. For example:

// ```text
// "String" ➞ "SSttrriinngg"
// "Hello World!" ➞ "HHeelllloo  WWoorrlldd!!"
// "1234!_ " ➞ "11223344!!__  "
// ```

const charRepeater = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i]
  }

  return newStr
}

console.log(charRepeater('String'))
console.log(charRepeater('Hello World!'))
