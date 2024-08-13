'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function (
    { starterIndex = 1, mainIndex = 0, time = '20:00', address } //use curly braces  in function arguments so it can destructure it
  ) {
    console.log(
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      address
    );
  },

  orderPizza: function (mainIngridient, ...otherIngredients) {
    console.log(mainIngridient);
    console.log(otherIngredients);
  },
};

//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assignment operator
//rest1.numberGuests = rest1.numGuests || 10;
//rest2.numberGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10; //numGuests 10 since numGuests is 0
rest2.numGuests ||= 10; //numGuests 10 since numGuests is falsy bcs doesnt exist

//Nullish assignment operator
rest1.numGuests ??= 10; //numGuests 0 since numGuests is 0 and considered as truthy value
rest2.numGuests ??= 10; //numGuests 10 since numGuests is falsy bcs doesnt exist

//AND assignment operator
rest1.owner &&= 'ANONYMOUS'; //assigns a value to a variable if its truthy, so rest1.owner doenst exist, so no creation and no assigment
rest2.owner &&= 'ANONYMOUS'; // rest2.owner became ANONYMOUS since it exists
