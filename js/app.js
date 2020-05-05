'use strict';

var operatingHours = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm'];

function Locations(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
}

Locations.prototype.calcCustomersPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    var customersThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customersEachHour.push(customersThisHour);
  }
};

Locations.prototype.calcCookiesSoldEachHour = function(){
  // multiply the customers by the average cookies each customer buys
  for(var i = 0; i < this.customersEachHour.length; i++){
    var wholeCookiesSoldEachHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(wholeCookiesSoldEachHour);
    this.totalCookies += wholeCookiesSoldEachHour;
  }
};


var seattle = new Locations('Seattle', 23, 65);
var tokyo = new Locations('Tokyo', 3, 24, 1.2);
var dubai = new Locations('Dubai', 11, 38, 3.7);
var paris = new Locations('Paris', 20, 38, 2.3);
var lima = new Locations('Lima', 2, 16, 4.6);

console.log(seattle.generateRandom(23, 65));
console.log(tokyo.generateRandom(3, 24));
console.log(dubai.generateRandom(11, 38));
console.log(paris.generateRandom(20, 38));
console.log(lima.generateRandom(2, 16));





// Locations.prototype.avgCustomersPerHour = function(){
//   for (var i = 0; i <operatingHours.length; i++){
//     this.customersPerHour.push(randomCustomers(this.minCustomer, this.maxCustomer));
//   }
// };
// Locations.prototype.callAllMethods = function(){
//   this.avgCustomersPerHour();
// };

// Locations.prototype.avgCookiesPerHour = function()[
//   for (var i = 0; i <operatingHours.length; i++){
//     this.
//   }
// ]

