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
  this.customersPerHour = [];
  for(var i = 0; i < hours.length; i++){
    var customersThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);
    this.customersPerHour.push(customersThisHour);
  }
};

Locations.prototype.calcCookiesSoldEachHour = function(){
  this.cookiesPerHour = [];
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

  // render cookies sold each hour
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

//  Add hours to top of table
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

//event handler
var formEl = document.getElementById('newcookiestand');

function handleFormSubmit(event){
  event.preventDefault();

  var cookiestand = event.target.cookiestand.value;
  var minimum = parseInt(event.target.minimum.value);
  var maximum = parseInt(event.target.maximum.value);
  var average = parseInt(event.target.average.value);

  new Locations(cookiestand, minimum, maximum, average);

  tableElement.textContent = '';

  renderHeaderRow();

  for(var i = 0; i<allLocations.length; i++){
    allLocations[i].render();
  }

  renderFooterRow();

}

//add event listener
formEl.addEventListener('submit', handleFormSubmit);

// helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//allLocations

new Locations('Seattle', 23, 65, 6.3);
new Locations('Tokyo', 3, 24, 1.2);
new Locations('Dubai', 11, 38, 3.7);
new Locations('Paris', 20, 38, 2.3);
new Locations('Lima', 2, 16, 4.6);

