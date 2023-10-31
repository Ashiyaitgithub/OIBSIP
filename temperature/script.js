

function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("input-temperature").value);
  const selectedUnit = document.getElementById("temperature-unit").value;
  let result;

  if (isNaN(inputTemperature)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  if (selectedUnit === "celsius") {
    result = {
      celsius: inputTemperature,
      fahrenheit: (inputTemperature * 9/5) + 32,
      kelvin: inputTemperature + 273.15,
    };
  } else if (selectedUnit === "fahrenheit") {
    result = {
      celsius: (inputTemperature - 32) * 5/9,
      fahrenheit: inputTemperature,
      kelvin: (inputTemperature - 32) * 5/9 + 273.15,
    };
  } else if (selectedUnit === "kelvin") {
    result = {
      celsius: inputTemperature - 273.15,
      fahrenheit: (inputTemperature - 273.15) * 9/5 + 32,
      kelvin: inputTemperature,
    };
  }

  document.getElementById("result").innerText = `Converted Temperature: ${result.celsius.toFixed(2)}°Celsius , ${result.fahrenheit.toFixed(2)}°Fahrenheit, ${result.kelvin.toFixed(2)}Kelvin`;
 
}
