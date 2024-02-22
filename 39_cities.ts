// Question 39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  const city1 = city_country('Lahore', 'Pakistan');
  const city2 = city_country('Paris', 'France');
  const city3 = city_country('New York', 'USA');
  
  console.log(city1);
  console.log(city2);
  console.log(city3);

//   In this code, we have a function city_country() that accepts two parameters: city and country. 
//   Inside the function, we use string concatenation to format the city and country 
//   name together with a comma in between.

//   The function returns the formatted string.

//   We then call the city_country() function multiple times to create strings 
//   representing different city-country pairs. The resulting strings are assigned to the 
//   variables city1, city2, and city3.

//   Finally, we use console.log() to print the values of city1, city2, and city3, 
//   which represent the formatted city-country strings.

