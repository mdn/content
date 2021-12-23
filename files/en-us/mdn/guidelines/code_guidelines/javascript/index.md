---
title: JavaScript guidelines
slug: MDN/Guidelines/Code_guidelines/JavaScript
tags:
  - Code
  - Guide
  - Guidelines
  - JavaScript
  - MDN Meta
---
{{MDNSidebar}}

The following guidelines cover how to write JavaScript for MDN code examples.

The following is a fairly simple set of JavaScript guidelines. We could go a lot deeper on this, but essentially we want to provide simple guidelines for writing concise examples that will be understandable by as many people as possible, rather than detailed guidelines for writing complex web apps. If you want something that goes into more detail, we'd recommend the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript), which is generally compatible with our guidelines.

## In this article

- [General JavaScript guidelines](#general_javascript_guidelines)

  - [Use expanded syntax](#use_expanded_syntax)
  - [JavaScript comments](#javascript_comments)
  - [Use modern JS features](#use_modern_js_features)

- [Variables](#variables)

  - [Variable naming](#variable_naming)
  - [Declaring variables](#declaring_variables)

- [Operators and comparison](#operators_and_comparison)

  - [Ternary operators](#ternary_operators)
  - [Use strict equality](#use_strict_equality)
  - [Use shortcuts for boolean tests](#use_shortcuts_for_boolean_tests)

- [Control statements](#control_statements)
- [Strings](#strings)

  - [Use template literals](#use_template_literals)
  - [Use textContent, not innerHTML](#use_textcontent_not_innerhtml)

- [Conditionals](#conditionals)

  - [General purpose looping](#general_purpose_looping)
  - [Switch statements](#switch_statements)

- [Functions and objects](#functions_and_objects)

  - [Function naming](#function_naming)
  - [Defining functions](#defining_functions)
  - [Creating objects](#creating_objects)
  - [Object classes](#object_classes)
  - [Object naming](#object_naming)

- [Arrays](#arrays)

  - [Creating arrays](#creating_arrays)
  - [Adding to an array](#adding_to_an_array)

- [Error handling](#error_handling)

## General JavaScript guidelines

### Use expanded syntax

For JavaScript we use expanded syntax, with each line of JS on a new line, the opening brace of a block on the same line as its associated statement, and the closing brace on a new line. This maximizes readability, and again, promotes consistency on MDN.

Do this

```js example-good
function myFunc() {
  console.log('Hello!');
};
```

Not this

```js example-bad
function myFunc() { console.log('Hello!'); };
```

We also have a few specific rules around spacing inside language features. You should include spaces between operators and operands, parameters, etc.

This is more readable

```js example-good
if(dayOfWeek === 7 && weather === 'sunny') {
  goOnTrip('beach', 'car', ['ice cream', 'bucket and spade', 'beach towel']);
}
```

than this

```js example-bad
if(dayOfWeek===7&&weather==='sunny'){
  goOnTrip('beach','car',['ice cream','bucket and spade','beach towel']);
}
```

In addition, keep these specifics in mind:

- Don't include padding spaces after opening brackets or before closing brackets — `(myVar)`, not `( myVar )`.
- All statements must end with semicolons (";"). We require them in all of our code samples even though they're technically optional in JavaScript because we feel that it leads to code that is clearer and more precise about where each statement ends.
- Use single quotes in JavaScript, wherever single quotes are needed in syntax.
- There should be no space between a control statement keyword, function, or loop keyword and its opening parenthesis (e.g. `if() { ... }`, `function myFunc() { ... }, for(...) { ... }`).
- There should be a space between the parentheses and the opening curly brace in such cases as described in the previous bullet.

### JavaScript comments

Use JS-style comments to comment code that isn't self-documenting:

```js example-good
// This is a JavaScript-style comment
```

Put your comments on separate lines preceding the code they are referring to:

```js example-good
function myFunc() {
  // Output the string 'Hello' to the browser's JS console
  console.log('Hello');
  // Create a new paragraph, fill it with content, and append it to the <body>
  let para = document.createElement('p');
  para.textContent = 'My new paragraph';
  document.body.appendChild(para);
}
```

Also note that you should leave a space between the slashes and the comment, in each case.

### Use modern JS features

For general usage, you can use modern well-supported JS features (such as [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)/[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals), and [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) in MDN examples. We include them in many places in these guidelines, as we believe the web industry has generally gotten to the point where such features are familiar enough to be understandable. And for those that don't use them yet, we'd like to play our part in helping people to evolve their skills.

> **Note:** By "general usage", we mean general example writing. Reference pages covering specific JS features obviously need to use the features they are documenting!

## Variables

### Variable naming

For variable names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.

Do this:

```js example-good
let playerScore = 0;

let speed = distance / time;
```

Not this:

```js example-bad
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;

let s = d/t;
```

> **Note:** The only place where it is OK to not use human-readable semantic names is where a very common recognized convention exists, such as using `i`, `j`, etc. for loop iterators.

### Declaring variables

When declaring variables and constants, use the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) keywords, not [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var).

If a variable will not be reassigned, prefer `const`:

```js example-good
const myName = 'Chris';
console.log(myName);
```

Otherwise, use `let`:

```js example-good
let myAge = '40';
myAge++;
console.log('Happy birthday!');
```

This example uses `let` where it should prefer `const`. It will work but should be avoided in MDN code examples:

```js example-bad
let myName = 'Chris';
console.log(myName);
```

This example uses const for a variable that gets reassigned. The reassignment will throw an error:

```js example-bad
const myAge = '40';
myAge++;
console.log('Happy birthday!');
```

This example uses `var`, which should be avoided in MDN code examples unless it is really needed:

```js example-bad
var myAge = '40';
var myName = 'Chris';
```

## Operators and comparison

### Ternary operators

Ternary operators should be put on a single line:

```js example-good
let status = (age >= 18) ? 'adult' : 'minor';
```

Not nested:

```js example-bad
let status = (age >= 18)
  ? 'adult'
  : 'minor';
```

This is much harder to read.

### Use strict equality

Always use strict equality and inequality.

Do this:

```js example-good
name === 'Chris';
age !== 25;
```

Not this:

```js example-bad
name == 'Chris';
age != 25;
```

### Use shortcuts for boolean tests

Use shortcuts for boolean tests — use `x` and `!x`, not `x === true` and `x === false`.

## Control statements

Write control statements like this:

```js example-good
if(iceCream) {
  alert('Woo hoo!');
}
```

Not this:

```js example-bad
if (iceCream){
  alert('Woo hoo!');
}
```

Also bear in mind:

- There should be _no space_ between a control statement keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

## Strings

### Use template literals

For inserting values into strings, use string literals.

Do this:

```js example-good
let myName = 'Chris';
console.log(`Hi! I'm ${myName}!`);
```

Not this:

```js example-bad
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

### Use textContent, not innerHTML

When inserting strings into DOM nodes, use {{DOMxRef("Node.textContent")}}:

```js example-good
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.textContent = text;
```

Not {{DOMxRef("Element.innerHTML")}}:

```js example-bad
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.innerHTML = text;
```

`textContent` is a lot more efficient, and less error-prone than `innerHTML`.

## Conditionals

### General purpose looping

When [loops](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, feel free to choose an appropriate loop out of the available ones ([`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while), etc.) Just make sure to keep the code as understandable as possible.

When using `for`/`for...of` loops, make sure to define the initializer properly, with a `let` keyword:

```js example-good
let cats = ['Athena', 'Luna'];
for(let i of cats) {
  console.log(i);
}
```

Not

```js example-bad
let cats = ['Athena', 'Luna'];
for(i of cats) {
  console.log(i);
}
```

Also bear in mind:

- There should be _no space_ between a loop keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

### Switch statements

Format switch statements like this:

```js example-good
let expr = 'Papayas';
switch(expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}`);
}
```

## Functions and objects

### Function naming

For function names use lowerCamelCasing, and use concise, human-readable, semantic names where appropriate.

Do this:

```js example-good
function sayHello() {
  alert('Hello!');
};
```

Not these:

```js example-bad
function SayHello() {
  alert('Hello!');
};

function notVeryObviousName() {
  alert('Hello!');
};
```

### Defining functions

Where possible, use the `function` declaration to define functions over function expressions:

Do this:

```js example-good
function sum(a, b) {
  return a + b;
}
```

Not this:

```js example-bad
let sum = function(a, b) {
  return a + b;
}
```

When using anonymous functions inside a method that requires a function as a parameter, it is acceptable (although not required) to use an arrow function to make the code shorter and cleaner.

So instead of this:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce(function(a, b) {
  return a + b;
});
```

you could write this:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) =>
  a + b
);
```

Also bear in mind:

- There should be _no space_ between a function name and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

### Creating objects

Use literals — not constructors — for creating general objects (i.e., when classes are not involved):

Do this:

```js example-good
let myObject = { };
```

Not this:

```js example-bad
let myObject = new Object();
```

### Object classes

Use ES class syntax for objects, not old-style constructors.

For example:

```js example-good
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
}
```

Use `extends` for inheritance:

```js example-good
class Teacher extends Person {
  ...
}
```

### Object naming

When defining an object class (as seen above), use UpperCamelCasing (also known as PascalCasing) for the class name, and lowerCamelCasing for the object property and method names.

When defining an object instance, either a literal or via a constructor, use lowerCamelCase for the instance name:

```js example-good
let hanSolo = new Person('Han Solo', 25, 'male');

let hanSolo = {
  name: 'Han Solo',
  age: 25,
  gender: 'male'
}
```

## Arrays

### Creating arrays

Use literals — not constructors — for creating arrays:

Do this:

```js example-good
let myArray = [ ];
```

Not this:

```js example-bad
let myArray = new Array(length);
```

### Adding to an array

When adding items to an array, use [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), not direct assignment. Given the following array:

```js
const pets = [];
```

do this:

```js example-good
pets.push('cat');
```

not this:

```js example-bad
pets[pets.length] = 'cat';
```

## Error handling

If certain states of your program throw uncaught errors, they will halt execution and potentially reduce the usefulness of the example. You should therefore catch errors using a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block:

```js example-good
try {
  console.log(results);
}
catch(e) {
  console.error(e);
}
```

## Good JavaScript examples on MDN

You can find good, concise, meaningful JavaScript snippets at the top of our [JavaScript language reference](/en-US/docs/Web/JavaScript/Reference) pages — browse through it to find some.

Our interactive (and other) examples are generally written to follow the above guidelines, although be aware that they may differ in some places as they were mostly written before the guidelines were newly written.

For API examples, we'd like to highlight a few examples we think are good:

- [`fetch()` examples](/en-US/docs/Web/API/fetch#examples)
- [`fillRect()` examples](/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect#examples) (the Canvas 2D examples are generally good, although they still use old-style `var`).
- [Payment Request API `show()`](/en-US/docs/Web/API/PaymentRequest/show) (The {{DOMxRef("PaymentRequest")}} examples are generally quite good).
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) (general good practices for HTML, CSS, and JavaScript, and a good demonstration of how to use snippets and link to full examples elsewhere).
- [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API) (more general good practices for using code snippets in a guide).
