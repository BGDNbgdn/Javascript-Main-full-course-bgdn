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

//Short circuiting && and ||
//Use any data type, return ANY data type, short circuiting

console.log('' || undefined || 0 || 'Jonas' || 23); //returns Jonas since the first values are falsy

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // guests = 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //returns 23 since its a true value, othervise if numGuests didnt exist we would get 10, doesnt work if number of guests is 0, we can use it to set default values, see the next part to solve this

//AND Operator
console.log(0 && 'Jonas'); // returns 0, it returns the first falsy value found, if all operants are true returns the last truthy one, so Jonas

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
} // returns since restaurant.orderPizza exists

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //another way to call a ufnction, if orderPizza exists, the && operator will return the last truthy value, so it will execute code in the second operant if the first one is true.

//THE NULLISH COALESCING OPERATOR
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

//Nullish : null and undefined (NOT 0 or '')
// ?? is same as || but in this case accepts 0 or '' as truthy values
const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);
