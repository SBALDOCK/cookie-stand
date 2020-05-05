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
]



var seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  operatingHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesPerHour: [],
  customersPerHour: function(){
    for (var i = 0; i < this.operatingHours.length; i++){
      var randomCustomers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
      return {}
    }
  },
  cookieSalesPerHour: function(){
    for (var i = 0; i < this.operatingHours.length; i++){
      return this.avgCookie * this.customersPerHour();
    }
  },
  render: function(){
    var parent = document.getElementById('seattle');
    var listItem = document.createElement('li');
    listItem.textContent = this.cookiesPerHour;
    parent.appendChild(listItem);
  },
};

// customersPerHour();
// cookiesSalesPerHour();
seattle.render();



// var tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookie: 1.2,
//   render: function(){
//     var parent = document.getElementById('tokyo');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.name;
//     parent.appendChild(listItem);
//   }
// };

// var dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookie: 3.7
// };

// var paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookie: 2.3
// };

// var lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookie: 4.6
// };




