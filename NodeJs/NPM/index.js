// var generateName = require("sillyname");
import generateName from "sillyname"; // generate random names
import {randomSuperhero} from "superheroes"; // generate random superheroes names
var sillyName = generateName();
var superHeroName = randomSuperhero();
console.log(`My name is ${sillyName}`);
console.log(`I am ${superHeroName}`);