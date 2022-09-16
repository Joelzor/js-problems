// A function that takes a string
//   We cap the first letter
//   We check if there is already a punctuation mark at the end. If so, we return the string
//   If not, we add a full stop

//   return the string

function sentenceCorrector(string) {
  string = string[0].toUpperCase() + string.slice(1)
  if (string.slice(-1) === '.' || string.slice(-1) === '!' || string.slice(-1) === '?') {
    return string
  } else {
    return string + '.'
  }
}

console.log(sentenceCorrector('the weasel had a cup of coffee'))

