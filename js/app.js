"use strict"

var operatingHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

function Locations(name, minCustomer, maxCustomer, avgCookie) {
  this.name = 'name';
  this.minCustomer = 'minCustomer';
  this.maxCustomer = 'maxCustomer';
  this.avgCookie = 'avgCookie';
  this.cookiesPerHour = [];
  this.customersPerHour = [];
}


Locations.prototype.generateRandom = function(min, max){
  return Math.floor(Math.random() * (max-min +1) + min);
};

new Locations ('Seattle', 23, 65, 6.3);
new Locations ('Tokyo', 3, 24, 1.2);
new Locations ('Dubai', 11, 38, 3.7);
new Locations ('Paris', 20, 38, 2.3);
new Locations ('Lima', 2, 16, 4.6);

// var seattle = new Locations('seattle', 23, 65);

console.log(name.generateRandom(23, 65));


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

