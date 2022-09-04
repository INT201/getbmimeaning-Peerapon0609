const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height)
  let result = bmi < 18.5?"Underweight":bmi>18.5&&bmi<24.9?"Normal weight":"Overweight"
  return result
}
module.exports = getBMIMeaning
