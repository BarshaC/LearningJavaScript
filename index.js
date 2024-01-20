let person1 = {
  name: 'Barsha',
  age: 23
};

//Dot notation
//The name of the person can be changed like this
person1.name = "Nisha";

//Bracket Notation
let selectProperty = 'name';
person1[selectProperty] = 'Meera';

let person2 = {
  name: "BChaudhary",
  age : 14
}

//Function to check if the person can vote
function canVote(person) {
  return person.age >= 18;
}

if (canVote(person1)) {
  console.log(person1.name + ' can vote.');
} else {
  console.log(person1.name, " cannot vote!");
}

if (canVote(person2)) {
  console.log(person2.name + 'can vote.');
} else {
  console.log(person2.name, "cannot vote!");
}


function greet(name) {
  console.log("hello", name);
}

greet("Joy");

//calculating square
function square(number) {
  return number * number;
}

console.log(square(23));
