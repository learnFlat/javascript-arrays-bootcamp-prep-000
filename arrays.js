var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element) {
  var newArr = [element, ...array]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  arr.unshift(element)
  return arr
}


function addElementToEndOfArray(array, element) {
  var newArr = [...arr, element]
  return newArr
}

function destructivelyAddElementToEndOfArray() {
  arr.push(element)
  return arr
}