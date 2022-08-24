---
title: Guidelines for styling JavaScript code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

The following guidelines cover writing JavaScript example code for MDN Web Docs. This article is a list of rules for writing concise examples that will be understandable by as many people as possible.

## Principles

### Choosing a format

Opinions on correct indentation, whitespace, or splitting long lines have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.

A single writing convention is helpful for consistency, and consistent code examples are easier to read and understand.

We have decided to use [Prettier](https://prettier.io/) as a code formatter to avoid off-topic discussions and keep code style consistent. We plan to run Prettier automatically on our code snippets and enforce consistency throughout MDN. Reviewers may ask you to follow Prettier conventions, but we plan for CI to format your code example through automated Prettier runs regardless.

Prettier deals with formatting, but not with what is the best JavaScript feature to use or doesn't judge if a comment is helpful or not. That's why we have additional conventions.

To learn about the convention in detail, read the [Prettier documentation](https://prettier.io/docs/en/index.html).

### Modern JavaScript features

You can use the modern and well-supported JavaScript features in MDN Web Docs code examples.

You can use new methods once every major browser supports them. You can use new syntax once every major browser supports them and two years have elapsed.

Don't use experimental features. In all cases, readability is more important than shaving a few characters.

## Generic syntax style

Prettier formats and styles all the code. Nevertheless, there are a few additional rules that you need to follow.

### One line per statement

In general, we use expanded syntax for JavaScript, meaning that:

- Each line of JavaScript is on a new line.
- The opening brace of a block on the same line as its associated statement, separated with a space from it.
- The closing brace on a new line.

For example, a function definition will look like this:

```js example-good
function myFunc() {
  console.log("Hello!");
};
```

Don't use this style:

```js example-bad
function myFunc() { console.log("Hello!"); };
```

Note that this style will be [enforced by Prettier](https://prettier.io/docs/en/index.html).

There are two exceptions to the rule:

- Early returns after a condition (using `return`, `break`, or `continue`) allow for writing more readable code. The braces and indentation are useless as there is only one statement.

  ```js example-bad
  function myMethod(myParam) {
    actionList = init(myParam);
    if (actionList.length === 0) {
      return 0;
    }

    // No error, we continue
    // …
  }
  ```

  Shortening the `if` statement renders the example easier to understand:

  ```js example-good
  function myMethod(myParam) {
    actionList = init(myParam);
    if (actionList.length === 0) return 0;

    // No error, we continue
    // …
  }
  ```
  
- Tests before logging some information.

  You can write:

  ```js example-good
  if (testIsValid) console.log("The test is valid!");
  ```

  The use of braces would be cumbersome:

  ```js example-bad
  if (testIsValid) {
    console.log("The test is valid!");
  }
  ```

All statements must end with semicolons (`;`). Although they're technically optional in JavaScript, we require them in all our code examples because we feel that they convey where each statement ends and make the code clearer. [Enforced by Prettier.](https://prettier.io/docs/en/index.html)

### Spacing

Both spacing and indentation are [enforced by Prettier](https://prettier.io/docs/en/index.html). In particular, follow the following rules:

- Separate A control or a loop statement from its opening parenthesis with a space. E.g., `if () { ... }` and `for (...) { ... }`. There should also be a space between its closing parenthesis and the opening curly brace.
- Include spaces between operators and operands, parameters, etc. For example, this is more readable:

  ```js example-good
  if (dayOfWeek === 7 && weather === "sunny") {
    goOnTrip("beach", "car", ["ice cream", "bucket and spade", "beach towel"]);
  }
  ```

  Without spaces, the code is difficult to grasp:

  ```js example-bad
  if (dayOfWeek===7&&weather==='sunny'){
    goOnTrip('beach',"car",['ice cream','bucket and spade','beach towel']);
  }
  ```

There are a few rules about where to add spaces inside the different kinds of brackets ([Prettier](https://prettier.io/docs/en/index.html) enforces these):

- Don't include padding spaces after and before opening and closing parentheses. For example, use `(myVar)`, not `( myVar )`.
- Don't include padding spaces after and before opening and closing square brackets. For example `["red", "green"]`, not `[ "red", "green" ]`.
- But do include padding spaces after and before opening and closing braces. For example `open(data, { option1: "now" })`.

### Indentation and end-of-line character

Mark indentation with _2 spaces_. No tabulation. The end-of-line character is `\n`, the Unix convention. To help you, we have included an [`.editorConfig`](https://editorconfig.org/) file in the repository, and many editors read its content and use it to configure their behavior.

Indentation is [enforced by Prettier](https://prettier.io/docs/en/index.html).

## Comments

Comments are critical to writing good code examples. They clarify the intent of the code and help developers understand it. Pay special attention to them.

Add a comment if the code isn't obvious or self-documenting. A code is self-documenting, for example, when calling a function with an explicit name: `closeConnection();` doesn't need a comment `// Closing the connection`.

A comment should describe the intention of the author rather than merely describe the code:

```js example-bad
let total = 0;

// For loop from 1 to 4
for (let i = 0; i < 4; i++ ){
  // Add value to the total
  total += arr[i];
}
```

Describing the intention makes the example clearer:

```js example-good
let total = 0;

// Calculate the sum of the four first elements of arr
for (let i = 0; i < 4; i++ ){
  total += arr[i];
}
```

### Use JS-style comments

JS-style comments are marked with `//`, in opposition to C-style comments enclosed between `/* … */`.

In general, use JS-style comments to comment code. There is a mark on each line, so it is easier to notice a commented-out line. In addition, this convention allows using `/* …*/` to comment out a section of code while debugging.

Leave a space between the slashes and the comment. Start with a capital letter, like if it was a sentence, but don't end the comment with a period.

```js example-good
// This is a well-written JavaScript-style comment
```

Don't write:

```js example-bad
// poor comment
```

Add an empty line if the comment doesn't start immediately after a new indentation. It will create a code block, making it obvious what the comment refers to.

Put your comments on separate lines preceding the code they are referring to, like:

```js example-good
function myFunc() {
  // Output the string 'Hello' to the browser's JS console
  console.log("Hello");

  // Create and append a new paragraph to the document
  const para = document.createElement('p');
  para.textContent = "My new paragraph";
  document.body.appendChild(para);
}
```

### Use comments to mark ellipsis

Skipping code is necessary to keep examples short. We should do it carefully, as developers want to copy & paste our example inside their code base. We should try to have our code samples be valid JavaScript.

In JavaScript, you should put the ellipses (`…`) in a comment. When possible, indicate what action somebody reusing this snippet is expected to add. Don't write:

```js example-bad
function exampleFct() {
  …
}
```

Using a comment will be more explicit, preventing errors when a developer copies & pasties the example:

```js example-good
function exampleFct() {
  // Add your specific behavior here
  // …
}
```

### Commenting out parameters

When writing code, you usually omit parameters you don't need. But in some code examples, you want to demonstrate that you didn't use some possible parameters.

To do so, you use `/* … */` in the parameter list. It is an exception to the rule only to use JS-style comments (`//`).

## Variables

### Variable names

Having good variable names is essential to understanding code. Use short identifiers, and avoid non-common abbreviations. Ideally, a variable name should be between 3 to 10-character long. (This is a hint, it is better to have a 12-character long variable name than to abbreviate it by removing the vowels. The identifier `accelerometer` is better than `acclmtr`).

- Do not use the [Hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation) naming convention. Do not prefix the variable name with its type. For example, write `bought = car.buyer !== null` rather than `bBought = oCar.sBuyer != null`, or `name = "John Doe"` instead of `sName = "John Doe"`.
- For collections, don't put the type (list, array, queue) in the name. Use the content name in the plural form. For example, for an array of cars, use `cars` and not `carArray` or `carList`. That way, your loops will be easy-to-read. E.g., `for (const car of cars)`.

For variable names, use lowerCamelCasing. Use concise, human-readable, and semantic names where appropriate. Do not use `_`. For example, use `currencyName` rather than `currency_name`. Avoid using articles and possessives. For example, use `car` instead of `myCar` or `aCar`.

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

> **Note:** The only place where it's allowed not to use human-readable, semantic names is where a very commonly recognized convention exists, such as using `i` and `j` for loop iterators.

### Variable declarations

When declaring variables and constants, use the [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) keywords, not [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var). The following examples show what's recommended and what's not on MDN Web Docs:

- If a variable will not be reassigned, prefer `const`, like so:

  ```js example-good
  const myName = "Chris";
  console.log(myName);
  ```

- If you'll change the value of a variable, use `let` as shown below:

  ```js example-good
  let myAge = "40";
  myAge++;
  console.log("Happy birthday!");
  ```

- The example below uses `let` where it should prefer `const`. The code will work, but we want to avoid this usage in MDN Web Docs code examples.

  ```js example-bad
  let myName = "Chris";
  console.log(myName);
  ```

- The example below uses `const` for a variable that gets reassigned. The reassignment will throw an error.

  ```js example-bad
  const myAge = "40";
  myAge++;
  console.log("Happy birthday!");
  ```

- The example below uses `var`, polluting the global scope:

  ```js example-bad
  var myAge = "40";
  var myName = "Chris";
  ```

- Declare one variable per line. Do not chain declarations or separate them with commas.

  ```js example-bad
  let var1, var2;
  let var3 = var4 = "Apapou";
  ```

  But write:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

### Type coercion

  Avoid old idioms when forcing a value to a type. In particular, avoid `+val` to force a value to a number and `"" + val` to force it to a string. Use `Number()` and `String()`, without new, instead.

  ```js example-bad
  class Person {
    #name;
    #birthYear;
    
    function Person(name, year) {
      this.#name = "" + name;
      this.#birthYear = +year;
    }
  };
  ```

  The correct way is:

  ```js example-good
  class Person {
    #name;
    #birthYear;
    
    function Person(name, year) {
      this.#name = String(name);
      this.#birthYear = Number(year);
    }
  };
  ```

## Operators

### Conditional operators

[Conditional (or ternary) operators](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) should be used when returning a value.
When possible, put on a single line, as shown below:

```js example-good
let status = (age >= 18) ? 'adult' : 'minor';
```

If needed (if the line is too long), Prettier will nest the conditional operators:

```js example-bad
let status = (age >= 18)
  ? 'adult'
  : 'minor';
```

The conditional operator is helpful when creating strings to log information. In such cases, using a regular `if...else` statement leads to long blocks of code for a side operation like logging, obfuscating the central point of the example.

### Strict equality operator

Always use the ["strict" equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) and inequality operators over the traditional equality and inequality operators.

Use the strict equality and inequality operators like this:

```js example-good
name === 'Chris';
age !== 25;
```

Don't use the loose equality and inequality operators, as shown below:

```js example-bad
name == 'Chris';
age != 25;
```

If you need to use `==` or `!=` consider adding a comment explaining why you need it (i.e., the type of coercion you want to perform).

### Shortcuts for boolean tests

Use shortcuts for boolean tests. For example, use `x` and `!x`, not `x === true` and `x === false`.

## Loops and conditional statements

### Loops

When [loops](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, choose the appropriate one from [`for(;;)`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while), etc.

[Prettier](https://prettier.io/docs/en/index.html) will enforce that:

- There is _a space_ between a loop keyword and its opening parenthesis.
- There is _a space_ between the parentheses and the opening curly brace.

When possible, like iterating through all collection elements, avoid using the classical `for (;;)` loop; prefer `for...of` or `.forEach()`.

```js example-bad
const dogs = ["Rex", "Lassie"];
for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}
```

Not only do you have to add an extra index, `i`, but you have to track the length of the array. It can be error-prone for beginners. Consider these two alternatives:

```js example-good
const dogs = ["Rex", "Lassie"];
for (const dog of dogs) {
  console.log(dog);
}
```

```js example-good
const dogs = ["Rex", "Lassie"];
dogs.forEach((dog) => {
  console.log(dog);
});
```

Make sure to define the initializer properly,  with a `const` keyword for `for...of` or `let` for the other loops. Don't omit it. These are correct examples:

```js example-good
const cats = ['Athena', 'Luna'];
for (const cat of cats) {
  console.log(cat);
}

for (let i = 0; i < 4; i++) {
  result += arr[i];
}
```

On the other side, the example below does not follow the recommended guidelines for the initialization (it is a `var`…).

```js example-bad
const cats = ['Athena', 'Luna'];
for (i of cats) {
  console.log(i);
}
```

When you need to access both the value and the index, you can use `.forEach()` instead of `for (;;)`:

```js example-bad
const gerbils = ["Zoé", "Chloé"];
for (let i = 0; i < gerbils.length; i++) {
  console.log(`Gerbil #${i}: ${gerbils[i]}`);
}
```

```js example-good
const gerbils = ["Zoé", "Chloé"];
gerbils.forEach((gerbil, i) => {
  console.log(`Gerbil #${i}: ${gerbil}`);
})
```

> **Warning:** Never use `for...in` with arrays and strings.

> **Note:** Consider not using a for loop at all. If you are using an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (or even a [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for some of them), consider instead using methods iterating over each element of the collection, like [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), or finding methods like[`findIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`findLast()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast), or [`includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), and many more.

### Control statements (if...else)

[Prettier](https://prettier.io/docs/en/index.html) will enforce that:

- There is _a space_ between a control statement keyword (`if` or `ekse`) and its opening parenthesis.
- There is _a space_ between the parentheses and the opening curly brace.

```js example-good
if (iceCream) {
  console.log("Woo hoo!");
}
```

The example below does not follow the spacing guidelines:

```js example-bad
if (iceCream){
  console.log("Woo hoo!");
}
```

The else statement must be on the same line as the last closing brace if any:

```js
if (iceCream) {
  console.log("Woo hoo!");
} else {
  console.log("I'm sad…");
}
```

If the `if` statement ends with a `return`, do not add An `else` statement; continue right after the `if` statement:

```js example-bad
if (test) {
  // Perform something if test is true
  // …
  return;
} else {
  // Perform something if test is false
  // …
}
```

The correct way is:

```js example-good
if (test) {
  // Perform something if test is true
  // …
  return;
}

// Perform something if test is false
// …
```

### Switch statements

[Prettier](https://prettier.io/docs/en/index.html) will enforce switch statements to be formatted like this:

```js example-good
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}`);
}
```

- There should be _a space_ between the `switch` keyword and its opening parenthesis.
- There should be _a space_ between the parentheses or the colon and the opening curly brace, if any.
- Note the position of the break indented from the `case` keyword: we indent the code inside the case.
- Don't put a `break` after a `return` statement in a specific case.

In addition to these rules:

- Put `default` as the last case, and don't end it with a `break`. If you need to do it differently, add a comment explaining why.
- Pay attention! When you declare a local variable for a case, you need to use braces to define a scope:

  ```js
  switch (fruits) {
    case 'Orange': {
      let slice = fruit.slice();
      eat(slice);
      break;
    }
    case 'Apple': {
      let core = fruit.extractCore();
      recycle(core);
      break;
    }
  }  
  ```

### Error handling

If certain states of your program throw uncaught errors, they will halt execution and potentially reduce the usefulness of the example. You should therefore catch errors using a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, as shown below:

```js example-good
try {
  console.log(getResult());
} catch (e) {
  console.error(e);
}
```

[Prettier](https://prettier.io/docs/en/index.html) enforces this format.

When you don't need the parameter of the `catch` statement, omit it:

```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
```

Not writing the parameter list is called _optional catch binding_ and has been available in every browser since 2019.

## Strings

String literals can be enclosed with single quotes, like "A string", with double quotes, like `"A string"`. Which type of literal to use is the subject of never-ending discussions.

[Prettier](https://prettier.io/docs/en/index.html) will enforce the following rule: it will use the type of quotes that will minimize escaping in a string, maximizing readability. In the case of equality, it will use double quotes (`""`).

### Template literals

For inserting values into strings, use [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals).

Here is an example of the recommended way to use template literals. Their use prevents a lot of spacing errors.

```js example-good
let myName = 'Chris';
console.log(`Hi! I'm ${myName}!`);
```

Don't concatenate strings like shown below:

```js example-bad
let myName = 'Chris';
console.log('Hi! I\'m' + myName + '!');
```

## Arrays

### Array creation

For creating arrays, use literals and not constructors.

Create arrays like this:

```js example-good
const visitedCities = [];
```

Don't do this while creating arrays:

```js example-bad
const visitedCities = new Array(length);
```

### Item addition

When adding items to an array, use [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) and not direct assignment. Let's consider the following array:

```js
const pets = [];
```

Add items to the array like this:

```js example-good
pets.push("cat");
```

Don't add items to the array like this:

```js example-bad
pets[pets.length] = "cat";
```

### Queues

Queues are collection following the [FIFO](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) principle. When using a JS `Array` as a queue, use the [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to add an item and the [`shift()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method to remove the first item. Do not use an index.

```js example-good
pets.push("dog")
pets.push("cat");
const pet = pets.shift(); // pet === "dog"
```

### Stacks

Stacks are collection following the [LIFO](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) principle. When using a JS `Array` as a stack, use the [`push()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to add an item and the [`pop()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method to remove the last item. Do not use an index.

```js example-good
pets.push("dog")
pets.push("cat");
const pet = pets.pop(); // pet === "cat"
```

## Objects

### Object names

When defining an object class, use UpperCamelCasing (also known as PascalCasing) for the class name and lowerCamelCasing for the object property and method names.

When defining an object instance, either a literal or via a constructor, use lowerCamelCase for the instance name. For example:

```js example-good
const hanSolo = new Person('Han Solo', 25, 'male');

const luke = {
  name: 'Luke Skywalker',
  age: 25,
  gender: 'male'
};
```

### Object creation

For creating general objects (i.e., when classes are not involved), use literals and not constructors.

For example, do this:

```js example-good
let myObject = {};
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
  // …
}
```

### Checking object properties

The `Object.hasOwnProperties()` is problematic and has been deprecated in favor of `Object.hasOwn()`. Use the latter.

## Functions and classes

### Function names

For function names, use lowerCamelCasing. Use concise, human-readable, and semantic names where appropriate.

The following is a correct example of a function name:

```js example-good
function sayHello() {
  console.log('Hello!');
};
```

Don't use function names like these:

```js example-bad
function SayHello() {
  console.log('Hello!');
};

function notVeryObviousName() {
  console.log('Hello!');
};
```

### Function declarations

[Prettier](https://prettier.io/docs/en/index.html) will ensure that:

- There is _no space_ between a function name and its opening parenthesis.
- There is _a space_ between the parentheses and the opening curly brace.

Where possible, use the `function` declaration to define functions over function expressions:

Here is the recommended way to declare a function:

```js example-good
function sum(a, b) {
  return a + b;
}
```

Here is not a good way to define a function:

```js example-bad
let sum = function(a, b) {
  return a + b;
}
```

When using anonymous functions inside a method that requires a function as a parameter, when you do not need to bind `this`, use an arrow function to make the code shorter and cleaner.

Here is the recommended way:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) =>
  a + b
);
```

Instead of this:

```js example-bad
const array1 = [1, 2, 3, 4];
let sum = array1.reduce(function (a, b) {
  return a + b;
});
```

When using arrow functions, use [implicit return](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (also known as _concise body_) when possible:

```js example-good
arr.map((e) => e.id);
```

And not:

```js example-bad
arr.map((e) => { 
  return e.id
});
```

Use the method definition syntax:

```js example-good
const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
}
```

Instead of:

```js example-bad
const obj = {
  foo: function () {
    // ...
  },
  bar: function () {
    // ...
  }
}
```

## Asynchronous methods

Writing asynchronous code improves performance and should be used when possible. In particular, you can use:

- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), including the `finally()` method,
- [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await).

When both techniques are possible, we don't have any preference.

Note that:

- When chaining promises, [Prettier](https://prettier.io/docs/en/index.html) will enforce the indentation of the `then()`, `catch()`, and `finally()` methods.
- Unlike the `catch` of a `try...catch` block, there is no space between the `catch` keyword and the parenthesis; it is a method.

```js example-good
myPromise.then((param) => value1)
  .then((param) => nextProcess(param))
  .then((param) => finalProcess(param))
  .catch((param) => errorValue(param));
```

## Web APIs to avoid

In addition to these JS language features, there are few guidelines related to Web APIs.

### Avoid browser prefixes

If all browser supports a feature, don't prefix it.

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

should be

```js example-good
const context = new AudioContext();
```

The same rule applies to CSS prefixes.

### Avoid deprecated APIs

When a method, a property, or a whole interface is deprecated, do not use it (outside its documentation). Instead, use the modern API.

Here is a non-exhaustive list of Web APIs to avoid and what to replace them with:

- Use `fetch()` instead of XHR (`XMLHttpRequest`).
- Use `AudioWorklet` instead of `ScriptProcessorNode`, in the Web Audio API.

### Use safe and reliable APIs

- Do not use {{DOMxRef("Element.innerHTML")}} to insert purely textual content into an element, use {{DOMxRef("Node.textContent")}} instead. The property `innerHTML` leads to security problems if the developer doesn't control the parameter. The more we avoid it, the fewer security flaws are created by copying & pasting our code.

  The example below demonstrates the use of `textContent`.

  ```js example-good
  let text = 'Hello to all you good people';
  const para = document.createElement('p');
  para.textContent = text;
  ```

  Don't use `innerHTML` to insert _pure text_ into DOM nodes.

  ```js example-bad
  let text = 'Hello to all you good people';
  const para = document.createElement('p');
  para.innerHTML = text;
  ```

- The `alert()` function is unreliable. It doesn't work in live example on MDN that are inside an {{HTMLElement("iframe")}}. More, it is modal to the whole window, which is annoying. Do not use it. Use a simple `console.log()` or `console.error()`, a dedicated UI element in your example, or the {{HTMLElement("dialog")}} element.

### Use the appropriate log method

- When logging a message, use `console.log()`. When logging an error, use `console.error()`.

## See also

- [JavaScript language reference](/en-US/docs/Web/JavaScript/Reference) - browse through our JavaScript reference pages to check out some good, concise, meaningful CSS snippets.
