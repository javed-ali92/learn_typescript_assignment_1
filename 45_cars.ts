// Question 45

function carInfo(manufacturer: string, model: string, ...options: any[]): object {
    const car: any = {
      manufacturer,
      model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  const car = carInfo("Honda", "Civic", "color", "black", "year", 2022, "sunroof", true);
  console.log(car);

//   In this code, we have a function carInfo() that accepts a manufacturer and model as required parameters. 
//   It also accepts an arbitrary number of keyword arguments using the rest parameter syntax (...options: any[]).

//   Inside the function, we create an empty object car. We then store the manufacturer and model as properties of the car object.

//   Next, we iterate over the options array using a for loop. 
//   We increment the loop counter by 2 in each iteration because we expect the keyword arguments 
//   to be provided in pairs: the key (e.g., "color", "year", "sunroof") followed by the corresponding valu

//   Within each iteration, we extract the key and value from the options array and assign them 
//   as properties to the car object.

//   Finally, we return the car object.

//   We then call the carInfo() function, passing the required manufacturer and model parameters, 
//   followed by additional name-value pairs representing optional information about the car 
//   (e.g., "color", "red", "year", 2022, "sunroof", true).

//   The returned car object is stored in the car variable, and we print it using console.log() 
//   to verify that all the information was stored correctly.