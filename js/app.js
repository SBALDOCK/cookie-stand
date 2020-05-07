'use strict';
var tableElement = document.getElementById('table');
var hours = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm', 'Daily Location Total'];
var allLocations = [];

function Locations(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomerPerHour = minCustomer;
  this.maxCustomerPerHour = maxCustomer;
  this.avgCookiesPerCustomer = avgCookie;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesForDay = 0;
  allLocations.push(this);
}

Locations.prototype.calcCustomersPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    var customersThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customersPerHour.push(customersThisHour);
  }
};


Locations.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersPerHour();
  for(var i = 0; i < this.customersPerHour.length; i++){
    var wholeCookiesSoldEachHour = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer);
    this.cookiesPerHour.push(wholeCookiesSoldEachHour);
    this.totalCookiesForDay += wholeCookiesSoldEachHour;
  }
};

// Only for the body of the table
Locations.prototype.render = function(){
  this.calcCookiesSoldEachHour ();
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
  rowData.textContent = this.totalCookiesForDay;
  rowElement.appendChild(rowData);

  tableElement.appendChild(rowElement);
};

function renderFooterRow(){
  var totalOfAllTotals = 0;
  //create tr
  var rowElement = document.createElement('tr');
  //create td
  var rowData = document.createElement('td');
  rowData.textContent = 'Hourly Total';
  //append td
  rowElement.appendChild(rowData);
  //append to parent
  tableElement.appendChild(rowElement);


  for(var i=0; i<hours.length; i++){

    var sum = 0;

    for(var j=0; j<allLocations.length; j++){
      sum += allLocations[j].cookiesPerHour[i];
    }

    totalOfAllTotals += sum;
    // create a td
    rowData = document.createElement('td');
    // fill it with sum
    rowData.textContent = sum;
    rowElement.appendChild(rowData);

  }

  rowData = document.createElement('td');
  rowData.textContent = totalOfAllTotals;
  rowElement.appendChild(rowData);
  // append to the table tow
  rowElement.appendChild(rowData);

  tableElement.appendChild(rowElement);

}

// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
renderFooterRow();









