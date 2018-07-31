function addElementToBeginningOfArray(arr, element) {
  var newArr = [element, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
  return arr
}


function addElementToEndOfArray() {
  var newArr = []
}

function destructivelyAddElementToEndOfArray() {
  arr.push(element)
  return arr
}