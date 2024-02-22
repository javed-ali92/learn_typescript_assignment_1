// Question 38


function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi'); // City in the default country (Pakistan)
describe_city('Paris', 'France'); // City in a non-default country (France)
describe_city('New York', 'USA'); // City in a non-default country (USA)
