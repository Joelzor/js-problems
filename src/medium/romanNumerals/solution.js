const values = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function romanToArabic(string) {
  // Declaring the result variable- this will hold the eventual function output
  let result = 0

  // Looping through the string and checking the value of the first character
  for (let i = 0; i < string.length; i++) {
    const digit1 = values[string[i]] 

    // Checking if there's more than one digit - if there isn't, we append digit 1 to result and exit loop
    if (i + 1 < string.length) { // is 1 less than string.length (3 here)? Yes, so we enter this if condition. 2nd i: still yes
      // If true, we get the value of the next digit
      const digit2 = values[string[i + 1]] // 1 
      // Testing for the rules listed in problem.md
      if (digit1 >= digit2) { 
        result = result + digit1 
      } else {
        result = result + digit2 - digit1 
        i++
      }

    } else {
      result = result + digit1 
    }
  }

  return result
}

console.log(romanToArabic('IV'))

