---
title: Guidelines for styling JavaScript code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

The following guidelines cover how to write JavaScript example code for MDN Web Docs. This is a simple list for writing concise examples that will be understandable by as many people as possible. For guidelines that go into more detail, we'd recommend the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript), which is generally compatible with our guidelines.

## General guidelines for JavaScript code examples

### Syntax style

- We use expanded syntax for JavaScript - each line of JavaScript on a new line, the opening brace of a block on the same line as its associated statement, and the closing brace on a new line. This maximizes readability and promotes consistency on MDN Web Docs.

  Follow this style for writing JavaScript code:

  ```js example-good
  function myFunc() {
    console.log('Hello!');
  };
  ```

  Don't use this style for writing JavaScript code:

  ```js example-bad
  function myFunc() { console.log('Hello!'); };
  ```

- All statements must end with semicolons (";"). Although they're technically optional in JavaScript, we require them in all our code examples because we feel that they convey where each statement ends and make the code clearer.
- Use single quotes in JavaScript, wherever single quotes are needed in syntax.

### Spacing

- There should be a space between a control statement and loop keywords and their opening parenthesis, as in `if () { ... }` and `for (...) { ... }`.
- There should be a space between the opening parenthesis and the opening curly brace in such cases as described in the previous bullet.
- Include spaces between operators and operands, parameters, etc. For example, this is more readable with the spaces:

  ```js example-good
  if (dayOfWeek === 7 && weather === 'sunny') {
    goOnTrip('beach', 'car', ['ice cream', 'bucket and spade', 'beach towel']);
  }
  ```

  than this one without the spaces:

  ```js example-bad
  if (dayOfWeek===7&&weather==='sunny'){
    goOnTrip('beach','car',['ice cream','bucket and spade','beach towel']);
  }
  ```

- Don't include padding spaces after and before opening and closing brackets. For example, use `(myVar)`, not `( myVar )`.

### JavaScript comments

Use JS-style comments to comment code that isn't self-documenting. Also note that you should leave a space between the slashes and the comment.

```js example-good
// This is a JavaScript-style comment
```

Put your comments on separate lines preceding the code they are referring to, like so:

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

### Modern JavaScript features

In MDN Web Docs code examples, you can use the modern and well-supported JavaScript features, such as [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)/[`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals), and [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). We have used them in many places in these guidelines. We believe that the web industry has gotten to the point where such features are familiar enough to be understandable. And for those that don't use them yet, we'd like to play our part in helping people to evolve their skills.

## Arrays

### Array creation

For creating arrays, use literals and not constructors.

Create arrays like this:

```js example-good
let myArray = [ ];
```

Don't do this while creating arrays:

```js example-bad
let myArray = new Array(length);
```

### Item addition

When adding items to an array, use [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) and not direct assignment. Given the following array:

```js
const pets = [];
```

Add items to the array like this:

```js example-good
pets.push('cat');
```

Don't add items to the array like this:

```js example-bad
pets[pets.length] = 'cat';
```

## Conditionals

### Loops

When [loops](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, choose the appropriate one from [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while), etc.

- There should be _a space_ between a loop keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.
- When using the `for` or `for...of` loop, make sure to define the initializer properly with a `let` keyword, as shown below:

  ```js example-good
  let cats = ['Athena', 'Luna'];
  for(let i of cats) {
    console.log(i);
  }
  ```

  The example below does not follow the recommended guidelines for spacing or initialization.

  ```js example-bad
  let cats = ['Athena', 'Luna'];
  for (i of cats) {
    console.log(i);
  }
  ```

### Switch statements

Format switch statements like this:

```js example-good
let expr = 'Papayas';
switch (expr) {
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

## Control statements

- There should be _a space_ between a control statement keyword and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.

Write control statements with proper spacing like this:

```js example-good
if (iceCream) {
  alert('Woo hoo!');
}
```

The example below does not follow the spacing guidelines:

```js example-bad
if (iceCream){
  alert('Woo hoo!');
}
```

## Error handling

If certain states of your program throw uncaught errors, they will halt execution and potentially reduce the usefulness of the example. You should therefore catch errors using a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, as shown below:

```js example-good
try {
  console.log(results);
}
catch(e) {
  console.error(e);
}
```

## Functions

### Function names

For function names, use lowerCamelCasing. Use concise, human-readable, and semantic names where appropriate.

The following is a good example for a function name:

```js example-good
function sayHello() {
  alert('Hello!');
};
```

Don't use function names like these:

```js example-bad
function SayHello() {
  alert('Hello!');
};

function notVeryObviousName() {
  alert('Hello!');
};
```

### Function declarations

- There should be _no space_ between a function name and its opening parenthesis.
- There should be _a space_ between the parentheses and the opening curly brace.
- Where possible, use the `function` declaration to define functions over function expressions:

  This is the recommended way to declare a function:

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  This is not a good way to define a function:

  ```js example-bad
  let sum = function(a, b) {
    return a + b;
  }
  ```

- When using anonymous functions inside a method that requires a function as a parameter, it is acceptable (although not required) to use an arrow function to make the code shorter and cleaner.

  This is the recommended way:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  let sum = array1.reduce((a, b) =>
    a + b
  );
  ```

  Instead of this:

  ```js example-good
  const array1 = [1, 2, 3, 4];
  let sum = array1.reduce(function(a, b) {
    return a + b;
  });
  ```

## Objects

### Object names

When defining an object class, use UpperCamelCasing (also known as PascalCasing) for the class name and lowerCamelCasing for the object property and method names.

When defining an object instance, either a literal or via a constructor, use lowerCamelCase for the instance name, like so:

```js example-good
let hanSolo = new Person('Han Solo', 25, 'male');

let hanSolo = {
  name: 'Han Solo',
  age: 25,
  gender: 'male'
}
```

### Object creation

For creating general objects (i.e., when classes are not involved), use literals and not constructors.

For example, do this:

```js example-good
let myObject = { };
```

Don't create a general object like this:

```js example-bad
let myObject = new Object();
```

### Object classes

Use ES class syntax for objects, not old-style constructors.

For example, this is the recommended way:

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

## Operators

### Conditional operators

[Conditional (or ternary) operators](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) should be put on a single line, as shown below:

```js example-good
let status = (age >= 18) ? 'adult' : 'minor';
```

Don't nest the conditional operators, as shown below, because the code is harder to read:

```js example-bad
let status = (age >= 18)
  ? 'adult'
  : 'minor';
```

### Strict equality operator

Always use the ["strict" equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and inequality operators over the equality and inequality operators.

Use the strict equality and inequality operators like this:

```js example-good
name === 'Chris';
age !== 25;
```

Don't use equality and inequality operators, as shown below:

```js example-bad
name == 'Chris';
age != 25;
```

### Shortcuts for boolean tests

Use shortcuts for boolean tests. For example, use `x` and `!x`, not `x === true` and `x === false`.

## Strings

### Template literals

For inserting values into strings, use [template literals](/en-us/docs/Web/JavaScript/Reference/Template_literals).

This is an example of the recommended way to use template literals:

```js example-good
let myName = 'Chris';
console.log(`Hi! I'm ${myName}!`);
```

Don;t concatenate strings like shown below:

```js example-bad
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

### Text content of a node

When inserting strings into DOM nodes, use {{DOMxRef("Node.textContent")}} and not {{DOMxRef("Element.innerHTML")}}. `textContent` is a lot more efficient and less error-prone than `innerHTML`.

The example below shows the use of `textContent`.

```js example-good
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.textContent = text;
```

Don't use `innerHTML` to insert strings into DOM nodes.

```js example-bad
let text = 'Hello to all you good people';
const para = document.createElement('p');
para.innerHTML = text;
```

## Variables

### Variable names

For variable names, use lowerCamelCasing. Use concise, human-readable, and semantic names where appropriate.

Use variable names like shown here:

```js example-good
let playerScore = 0;

let speed = distance / time;
```

Don't name variables like this:

```js example-bad
let thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;

let s = d/t;
```

> **Note:** The only place where it's OK to not use human-readable, semantic names is where a very commonly recognized convention exists, such as using `i` and `j` for loop iterators.

### Variable declarations

When declaring variables and constants, use the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) keywords, not [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var). The following examples show what's recommended and what's not on MDN Web Docs:

- If a variable will not be reassigned, prefer `const`, like so:

  ```js example-good
  const myName = 'Chris';
  console.log(myName);
  ```

- If a variable will be reassigned, use `let` as shown below:

  ```js example-good
  let myAge = '40';
  myAge++;
  console.log('Happy birthday!');
  ```

- The example below uses `let` where it should prefer `const`. The code will work but this usage should be avoided in MDN Web Docs code examples.

  ```js example-bad
  let myName = 'Chris';
  console.log(myName);
  ```

- The example below uses `const` for a variable that gets reassigned. The reassignment will throw an error.

  ```js example-bad
  const myAge = '40';
  myAge++;
  console.log('Happy birthday!');
  ```

- The example below uses `var`, which should be avoided in code examples on MDN Web Docs.

  ```js example-bad
  var myAge = '40';
  var myName = 'Chris';
  ```

## See also

- [JavaScript language reference](/en-US/docs/Web/JavaScript/Reference) - browse through our JavaScript reference pages to check out some good, concise, meaningful CSS snippets. Our interactive examples in the "Try it" section are generally written to follow the  guidelines described on this page.
- For API examples, you can check out the following:
  - [`fetch()` examples](/en-US/docs/Web/API/fetch#examples)
  - [`fillRect()` examples](/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect#examples)
  - [Payment Request API `show()`](/en-US/docs/Web/API/PaymentRequest/show)
  - [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) - this covers general good practices for HTML, CSS, and JavaScript and also provides a good demonstration of how to use snippets and add links to full examples elsewhere.
  - [Using the Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
