window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {

   document.getElementById("convertButton").addEventListener("click", function() {
      let cInput = document.getElementById("cInput");
      let fInput = document.getElementById("fInput");

      let tempInCelcius = 0;
      let tempInFahrenheit = 0;

      if (cInput.value != "") {
         // Calculate Fahrenheit


         tempInCelcius = parseFloat(cInput.value);
         if (isNaN(tempInCelcius)) {
            document.getElementById("errorMessage").innerHTML = cInput.value + " is not a number";
         }
         else {
            tempInFahrenheit = convertCtoF(tempInCelcius);
            fInput.value = tempInFahrenheit;
            document.getElementById("errorMessage").innerHTML = "";
         }
      }
      else {
         // Calculate Celcius
         tempInFahrenheit = parseFloat(fInput.value);
         if (isNaN(tempInFahrenheit)) {
            document.getElementById("errorMessage").innerHTML = fInput.value + " is not a number";
         }
         else {
            tempInCelcius = convertFtoC(tempInFahrenheit);
            cInput.value = tempInCelcius;
            document.getElementById("errorMessage").innerHTML = "";
         }
      }

      updateImage( tempInFahrenheit );
   });

   document.getElementById("cInput").addEventListener("input", function() {
      fInput.value = "";
   });

   document.getElementById("fInput").addEventListener("input", function() {
      cInput.value = "";
   });

}

function updateImage( degreesFahrenheit) {
   let image = "";
   if (degreesFahrenheit < 32) {
      image = "cold.png";
   }
   else if (degreesFahrenheit >= 32 && degreesFahrenheit <= 50) {
      image = "cool.png";
   }
   else {
      image = "warm.png";
   }

   document.getElementById("weatherImage").src = image;
}

function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9/5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9;
}
