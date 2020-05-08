'use strict';
var tableElement = document.getElementById('table');
var hours = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm'];
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

// // Add times to top of table
function renderHeaderRow(){
  var rowElement = document.createElement('tr');
  var rowData = document.createElement('td');
  rowElement.appendChild(rowData);
  for(var i = 0; i < hours.length; i++){
    rowData = document.createElement('td');
    rowData.textContent = hours[i];
    rowElement.appendChild(rowData);
  }
  rowData = document.createElement('td');
  rowData.textContent = 'Daily Location Total';
  rowElement.appendChild(rowData);
  tableElement.appendChild(rowElement);
}
//Column totals
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



//event listener
var formEl = document.getElementById('newcookiestand');
formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
  event.preventDefault();
  // formEl.textContent = '';

  if(event.target){
    console.log('The event.target is ', event.target);
    console.log('The event.target.cookiestand is ', event.target.cookiestand);
    console.log('The event.target.cookiestand.value is ', event.target.cookiestand.value);
    console.log('The event.target.minimum is ', event.target.minimum);
    console.log('The event.target.minimum.value is', event.target.minimum.value);
    console.log('The event.target.maximum is ', event.target.maximum);
    console.log('The event.target.maximum.value is ', event.target.maximum.value);
    console.log('The event.target.average is ', event.target.average);
    console.log('The event.target.average.value is ', event.target.average.value);
    var cookiestand = event.target.cookiestand.value;
    var minimum = event.target.minimum.value;
    var maximum = event.target.maximum.value;
    var average = event.target.average.value;
  }
  //   var cookiestand = event.target.cookiestand.value;
  //   var minimum = event.target.minimum.value;
  //   var maximum = event.target.maximum.value;
  //   var average = event.target.average.value;
  // }
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

renderHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterRow();
// handleFormSubmit();