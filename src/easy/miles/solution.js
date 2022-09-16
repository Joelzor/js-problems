// function that takes in the km value
//   we return the conversion, rounded to the nearest full num

function kmToMileConverter(km) {
  return Math.round(km / 1.6)
}

console.log(kmToMileConverter(2.4))