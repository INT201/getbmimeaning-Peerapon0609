const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  let bmi = calculateBMI(weight, height)
  let result = (bmi < 18.5?console.log("Underweight"):bmi>18.5&&bmi<24.9?console.log("Normal weight"):console.log("Overweight"))
  return result
}
module.exports = getBMIMeaning
