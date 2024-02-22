// Question 38

function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('Karachi'); // City in the default country (Pakistan)
  describe_city('Paris', 'France'); // City in a non-default country (France)
  describe_city('New York', 'USA'); // City in a non-default country (USA)


//   In this code, we have a function describe_city() that accepts two parameters: city and country. 
//   The country parameter has a default value of 'Pakistan'.

//   Inside the function, we use console.log() to print a simple sentence that describes the city and its country.
//   We use string interpolation to include the values of city and country in the sentence.

//   We then call the describe_city() function multiple times to describe different cities:

//   The first call describe_city('Karachi') describes the city 'Karachi' in the default country (Pakistan).
// The second call describe_city('Paris', 'France') describes the city 'Paris' in the non-default country (France).
// The third call describe_city('New York', 'USA') describes the city 'New York' in the non-default country (USA).