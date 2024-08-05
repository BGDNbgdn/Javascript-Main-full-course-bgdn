'use strict';

console.log(this);

const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); //returns indefined, it gets its own this keywork which is just not defined
};
calcAge(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this); // returns window, which is the parent global scope, arrow function doesnt have its own this
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // will point to the object that is calling the method, so Jonas
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // we borowed a method (calcAge (functions in objects are called method), so when we type matilda in console, we can see that she has a method calcage)
matilda.calcAge(); //now when previously method of jonas, is available in matilda, and when is called, this points to the object calling the moethod, so therefore it will point to mathilda./
