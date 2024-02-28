window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   const convertButton = document.getElementById("convertButton");

   let weatherImage = document.getElementById("weatherImage");
   let errorMessage = document.getElementById("errorMessage");

   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");

   convertButton.addEventListener("click", function () {
      if (cInput.value == "") 
      {
         if (isNaN(parseFloat(fInput.value))) 
         {
            console.log("error2");
            errorMessage.innerHTML = `${fInput.value} is not a number`;
         } 
         
         else 
         {
            // Call FtoC convert function and set the opposite value
            const celsius = convertFtoC(parseFloat(fInput.value));
            console.log(celsius);
            cInput.value = celsius;
            errorMessage.innerHTML = "";
         }
      } 
      
      else if (fInput.value == "") 
      {

         if (isNaN(parseFloat(cInput.value))) 
         {
            console.log("error");
            errorMessage.innerHTML = `${cInput.value} is not a number`;
         } 
         
         else 
         {
            // Call CtoF convert function and set the opposite value
            const farenheit = convertCtoF(parseFloat(cInput.value));
            console.log(farenheit);
            fInput.value = farenheit;
            errorMessage.innerHTML = "";
         }

      }

      // Change image to reflect temperature
      if (parseFloat(fInput.value) < 32) 
      {
         weatherImage.src = "cold.png";
      } 
      
      else if (parseFloat(fInput.value) >= 32 && parseFloat(fInput.value) <= 50) 
      {
         weatherImage.src = "cool.png";
      } 
      
      else if (parseFloat(fInput.value) > 50) 
      {
         weatherImage.src = "warm.png";
      }

   });

   cInput.addEventListener("input", (event) => {
      fInput.value = "";
   });

   fInput.addEventListener("input", (event) => {
      cInput.value = "";
   });


}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return (parseFloat(degreesCelsius) * 9 / 5 + 32);
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return ((parseFloat(degreesFahrenheit) - 32) * 5 / 9);
}
