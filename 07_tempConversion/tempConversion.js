const convertToCelsius = function(farTemp) {
  let celsius = 0;

  celsius = (farTemp - 32) * (5/9);
  let celRound = celsius.toFixed(1);
  let result1 = parseFloat(celRound);
  return result1;

};

const convertToFahrenheit = function(celTemp) {

  let fahrenheit = 0;
  fahrenheit = (celTemp * (9/5) + 32);
  let fahrRound = fahrenheit.toFixed(1);
  let result2 = parseFloat(fahrRound);
  return result2;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
