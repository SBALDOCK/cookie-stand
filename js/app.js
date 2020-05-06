'use strict';

var hours = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm', 'Daily Location Total'];

function Locations(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomerPerHour = minCustomer;
  this.maxCustomerPerHour = maxCustomer;
  this.avgCookiesPerCustomer = avgCookie;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}

Locations.prototype.calcCustomersPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    var customersThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customersPerHour.push(customersThisHour);
  }
};
// helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Locations.prototype.calcCookiesSoldEachHour = function(){
  for(var i = 0; i < this.customersPerHour.length; i++){
    var wholeCookiesSoldEachHour = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(wholeCookiesSoldEachHour);
    this.totalCookies += wholeCookiesSoldEachHour;
  }
};

// I need to add cookie totals by store, by hour and place in footer
// I need to call the parent element and create footer
// I need to create a for loop that loops through each opening hour and totals pre-existing cookies per hour data
// Create a function that add cookiesPerHour for all locations and totals them


Locations.prototype.render = function(){
  this.calcCustomersPerHour();
  this.calcCookiesSoldEachHour();
  var tableElement = document.getElementById('table');
  // var rowtimes = document.createElement('thead');
  var rowElement = document.createElement('tr');
  var rowHeader = document.createElement('th');


  rowHeader.textContent = this.name;
  rowElement.appendChild(rowHeader);
  for(var i = 0; i < hours.length; i++){
    var rowData = document.createElement('td');
    rowData.textContent = this.cookiesPerHour[i];
    rowElement.appendChild(rowData);
  }
  rowData = document.createElement('td');
  rowData.textContent = this.totalCookies;
  rowElement.appendChild(rowData);

  tableElement.appendChild(rowElement);
};

var seattle = new Locations('Seattle', 23, 65, 6.3);
var tokyo = new Locations('Tokyo', 3, 24, 1.2);
var dubai = new Locations('Dubai', 11, 38, 3.7);
var paris = new Locations('Paris', 20, 38, 2.3);
var lima = new Locations('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

