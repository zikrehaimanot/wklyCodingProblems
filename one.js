// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.


var addDigits = function(num) {

  let numToString = num.toString();
  if (numToString.length === 1) {
    return num;
  }
  let result = 0;
  for (let i = 0; i < numToString.length; i++) {
    result += parseInt(numToString[i]);
  }
  return addDigits(result);
}
