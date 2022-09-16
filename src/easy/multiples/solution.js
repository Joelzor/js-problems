// function definition, takes num and length params
//   define a new array that will store the multiples
//   loop from 0 to the passed in length. 
//     In each iteration, we need to push a new multiple to our array (i * num)

//   we return the array

function createListOfMultiples(num, length) {
  multiples = []
  for (let i = 1; i <= length; i++) {
    multiples.push(i * num)
  }

  return multiples
}

console.log(createListOfMultiples(12, 10))
