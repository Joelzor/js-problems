// function that takes the num array 
//   return array.max - array.min - added - doesn't work without spread operator

function findTheDifference(arrayOfNums) {
  return Math.max(...arrayOfNums) - Math.min(...arrayOfNums)
}

function findTheDifference2(arrayofNums) {
  let max = arrayofNums[0]
  let min = arrayofNums[0]

  for (let i = 0; i < arrayofNums.length; i++) {
    if (arrayofNums[i] > max) max = arrayofNums[i]
    if (arrayofNums[i] < min) min = arrayofNums[i]
  }

  return max - min
}

console.log(findTheDifference2([100, 4, 40, 32, 98]))

