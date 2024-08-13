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

//this object will be destructured by the oredrdelivery function, now 4 different arguments, but 1 argumenty separated into
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del corso',
  mainIndex: 2,
  starterIndex: 2,
});

//The rest operator, is written on the left of = sign
//The rest operator stores all values left in an array when destructuring

const [a, b, ...others] = [1, 2, 3, 4, 5]; //we create a new array called others
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects with rest operator
const { sat, ...weekdays } = restaurant.openingHours; //we put saturday in Sat, so the rest is thu and fri
console.log(weekdays); // ==> {thu: {open: 12, close: 22}, fri: {open: 11, close: 23}}
console.log(sat);

//functions  with rest operator
const add = function (...numbers) {
  console.log(numbers); // this syntax (...number) packs all the arguments into an array (called rest arguments)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 1, 5, 1);

const x = [23, 5, 7];
add(...x); //the spread operator will spread the array into this function, and they will be collected into numbers array by the rest parameters.

//additional method for object restaurant : orderPizza: function (mainIngridient, ...otherIngredients) {
    console.log(mainIngridient);
    console.log(otherIngredients);
  },


restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
