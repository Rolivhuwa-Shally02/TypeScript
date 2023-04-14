function convertPoundsToKg(Pounds: number): number{

    return Pounds * 0.4535;
    
    };
    console.log("pounds to kilogram = " + convertPoundsToKg(500));
    
 function convertInchesToCm(Inches: number): number{
    return Inches * 2.54;

 };
 console.log("Inches to centimeters = " +convertInchesToCm(50));
    
 function fahrenheitToCelsius(Fahrenheit: number): number {
    return  (( Fahrenheit - 32) * 5/9) ;
  };

  console.log("Fahrenheit to Celsius = " + fahrenheitToCelsius(75) );

  function feetToMeters(Feet: number): number{
  return Feet * 0.3048;

  };
  console.log("Feet to Meters = " + feetToMeters(10));