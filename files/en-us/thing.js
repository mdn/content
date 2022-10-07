const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

const input = prompt("Get name or age?");

if (Object.keys(person).includes(input)) {
  console.log(person[input]);
} else {
}
