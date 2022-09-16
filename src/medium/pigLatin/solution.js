// function that takes a string
//   convert string to an array - split method
//   define an empty array

//   for loop- through the array. In each iteration, we push a slice 

function pigLatinConverter(string) {
  const arr = string.toLowerCase().split(' ')
  const pig = []

  for (let i = 0; i < arr.length; i++) {
    pig.push(arr[i].slice(1) + arr[i][0] + 'ay')
  }

  const pigString = pig.join(' ')
  return pigString[0].toUpperCase() + pigString.slice(1) 
}

console.log(pigLatinConverter('The quick brown fox'))