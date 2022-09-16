// function that takes in a string
//   define a reversed string variable as an empty string
//   for loop - loop backwards, starting with the .length value of the string and going down to 0
//     add each character into the new string

//   return reversed string

function reverseAString(string) {
  let reversedString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }

  return reversedString
}

console.log(reverseAString("123456789"))