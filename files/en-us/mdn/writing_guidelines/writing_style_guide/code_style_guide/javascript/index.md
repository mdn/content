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

## General guidelines for JavaScript code examples

This section explains the general guidelines to keep in mind while writing JavaScript code examples. The later sections will cover more specific details

### Choosing a format

Opinions on correct indentation, whitespace, and line lengths have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.

On MDN Web Docs, we use [Prettier](https://prettier.io/) as a code formatter to keep code style consistent (and to avoid off-topic discussions).

To learn more about the formatting conventions used on MDN Web Docs, read the [Prettier documentation](https://prettier.io/docs/en/index.html).

### Using modern JavaScript features

You can use new features once every major browser, Chrome, Edge, Firefox, and Safari, supports them.

## Generic syntax style

Prettier formats and styles all the code; the tool will fix your errors. Nevertheless, there are a few additional rules that you need to follow.

### Use braces with control statement.

- Even if, control statements like `if`, `for`, `while` don't mandate for the use of braces when the content is made of one single statement, always use braces. Write:

  ```js example-good
  for (const car of storedCars) {
    car.paint("red");
  }
  ```

  Don't write:

  ```js example-bad
  for (const car of storedCars) car.paint("red");
  ```

  This prevent forgetting to add the braces when adding more statements.

- There is one exception to the rule. Early returns after a condition (using `return`, `break`, or `continue`) allow for writing more readable code. The braces and indentation are useless as there is only one statement.

  Shortening the `if` statement renders the example easier to understand:

  ```js example-good
  function exampleMethod(param) {
    actionList = init(param);
    if (actionList.length === 0) return 0;

    // No error, we continue
    // …
  }
  ```

  Using braces is more difficult to read in such a case:

  ```js example-bad
  function exampleMethod(param) {
    actionList = init(param);
    if (actionList.length === 0) {
      return 0;
    }

    // No error, we continue
    // …
  }
  ```

### Spacing and indentation

Mark indentation with _2 spaces_. Don't use the tab key. The end-of-line character is `\n`, the Unix convention. To help you, we have included an [`.editorConfig`](https://editorconfig.org/) file in the repository. Many editors read its content and use it to configure their behavior.

## Comments

Comments are critical to writing good code examples. They clarify the intent of the code and help developers understand it. Pay special attention to them.

Add a comment if the purpose or logic of the code isn't obvious. Comments are not necessary, for example, when functions have explicit names that describe what they're doing. This comment doesn't add much value for the reader and can be left out:

```js example-bad
closeConnection(); // Closing the connection
```

A comment should describe the intention of the author rather than merely describe the code For example, this is not a good use of a comment:

```js example-bad
let total = 0;

// For loop from 1 to 4
for (let i = 0; i < 4; i++ ){
  // Add value to the total
  total += arr[i];
}
```

Using a comment to describe the intention of the code makes the example clearer, as shown below:

```js example-good
let total = 0;

// Calculate the sum of the four first elements of arr
for (let i = 0; i < 4; i++ ){
  total += arr[i];
}
```

### Use single-line comments

Single-line comments are marked with `//`, as opposed to block comments enclosed between `/* … */`.

In general, use single-line comments to comment code. Writers must mark each line of the comment with `//`, so that it's easier to notice commented-out code visually. In addition, this convention allows to comment out sections of code using `/* …*/` while debugging.

Leave a space between the slashes and the comment. Start with a capital letter, like a sentence, but don't end the comment with a period.

```js example-good
// This is a well-written single-line comment
```

If a comment doesn't start immediately after a new indentation level, add an empty line and then add the comment. It will create a code block, making it obvious what the comment refers to. Also, put your comments on separate lines preceding the code they are referring to. This is shown in the following example:

```js example-good
function exampleFunc() {
  // Output the string 'Hello' to the browser's JS console
  console.log("Hello");

  // Create and append a new paragraph to the document
  const para = document.createElement('p');
  para.textContent = "My new paragraph";
  document.body.appendChild(para);
}
```

### Use comments to mark ellipsis

Skipping redundant code using ellipses (…) is necessary to keep examples short. Still, writers should do it thoughtfully as developers frequently copy & paste examples into their code, and all of our code samples should be valid JavaScript.

In JavaScript, you should put the ellipses (`…`) in a comment. When possible, indicate what action somebody reusing this snippet is expected to add. So don't use ellipses (…) like this:

```js example-bad
function exampleFunct() {
  …
}
```

Using a comment for the ellipses (…), as shown below, will be more explicit, preventing errors when a developer copies and pastes a sample code:

```js example-good
function exampleFunct() {
  // Add your code here
  // …
}
```

### Multi-line comments

Short comments are usually better, so try to keep them in one line of 120 characters. If this is not possible, use `//` at the beginning of each line:

```js example-good
// This is an example of a multi-line comment.
// The imaginary function that follows has some unusual limitation that I want to call out.
// Limitation 1
// Limitation 2
```

Don't use `/* … */`:

```js example-bad
/* This is an example of a multi-line comment.
   The imaginary function that follows has some unusual limitation that I want to call out.
   Limitation 1
   Limitation 2 */
```

### Comment out parameters

When writing code, you usually omit parameters you don't need. But in some code examples, you want to demonstrate that you didn't use some possible parameters.

To do so, you use `/* … */` in the parameter list. This is an exception to the rule to only use single-line comments (`//`).

## Variables

### Variable names

Good variable names are essential to understanding code.

- Use short identifiers, and avoid non-common abbreviations. Good variable names are usually between 3 to 10-character long, but as a hint only. For example, `accelerometer` is more descriptive than abbreviating to `acclmtr` for the sake of character length.

- Do not use the [Hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation) naming convention. Do not prefix the variable name with its type. For example, write `bought = car.buyer !== null` rather than `bBought = oCar.sBuyer != null`, or `name = "John Doe"` instead of `sName = "John Doe"`.
- For collections, don't put the type (list, array, queue) in the name. Use the content name in the plural form. For example, for an array of cars, use `cars` and not `carArray` or `carList`. That way
- For primitive values, use _camelCase_, starting with a lowercase character. Do not use `_`. Use concise, human-readable, and semantic names where appropriate. For example, use `currencyName` rather than `currency_name`.
- Avoid using articles and possessives. For example, use `car` instead of `myCar` or `aCar`. There may be exceptions, like when describing a feature in general, without a practical context.

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
  const name = "Chris";
  console.log(name);
  ```

- If you'll change the value of a variable, use `let` as shown below:

  ```js example-good
  let age = "40";
  age++;
  console.log("Happy birthday!");
  ```

- The example below uses `let` where it should be `const`. The code will work, but we want to avoid this usage in MDN Web Docs code examples.

  ```js example-bad
  let name = "Chris";
  console.log(myName);
  ```

- The example below uses `const` for a variable that gets reassigned. The reassignment will throw an error.

  ```js example-bad
  const age = "40";
  age++;
  console.log("Happy birthday!");
  ```

- The example below uses `var`, polluting the global scope:

  ```js example-bad
  var age = "40";
  var name = "Chris";
  ```

- Declare one variable per line, like so:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```
  
  Do not declare multiple variables in one line, separating them with commas or using chain declaration. Avoid declaring variables like this:

  ```js example-bad
  let var1, var2;
  let var3 = var4 = "Apapou";
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
    
    constructor(name, year) {
      this.#name = String(name);
      this.#birthYear = Number(year);
    }
  };
  ```

## Operators

This section lists our recommendations of which operators to use and when.

### Conditional operators

When you want to store to a variable a literal value depending on a condition, use a [conditional (ternary) operator](/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) instead of an `if...else` statement. This rule also applies when returning a value. Write:

```js example-good
let x = condition ? 1 : 2;
```

Do not write:

```js example-bad
let x;
if (condition) {
  x = 1;
else {
  x = 2;
} 
```

The conditional operator is helpful when creating strings to log information. In such cases, using a regular `if...else` statement leads to long blocks of code for a side operation like logging, obfuscating the central point of the example.

### Strict equality operator

Prefer the [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (triple equals) and inequality operators over the loose equality (double equals) and inequality operators.

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

If you need to use `==` or `!=`, remember that `== null` is the only acceptable case. As TypeScript will fail on all other cases, we don't want to have them in our example code. Consider adding a comment to explain why you need it.

### Shortcuts for boolean tests

Use shortcuts for boolean tests. For example, use `x` and `!x`, not `x === true` and `x === false`.

## Loops and conditional statements

### Loops

When [loops](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) are required, choose the appropriate one from [`for(;;)`](/en-US/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while), etc.

When iterating through all collection elements, avoid using the classical `for (;;)` loop; prefer `for...of` or `forEach()`. Note that if you are using a collection that is not an `Array`, you have to check that `for...of` is actually supported (it requires the variable to be iterable), or that the `forEach()` method is actually present.

```js example-bad
const dogs = ["Rex", "Lassie"];
for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}
```

As shown in the above example, not only do you have to add an extra index, `i`, but you also have to track the length of the array. This can be error-prone for beginners. Consider these two alternatives:

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

Make sure that you define the initializer properly by using the `const` keyword for `for...of` or `let` for the other loops. Don't omit it. These are correct examples:

```js example-good
const cats = ['Athena', 'Luna'];
for (const cat of cats) {
  console.log(cat);
}

for (let i = 0; i < 4; i++) {
  result += arr[i];
}
```

The example below does not follow the recommended guidelines for the initialization (it implicitly creates a global variable and will fail in strict mode).

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

> **Note:** Consider not using a `for` loop at all. If you are using an [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (or a [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for some operations), consider using more semantic iteration methods instead, like [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), and many more.

### Control statements

There is one notable case to keep in mind for the `if...else` control statements. If the `if` statement ends with a `return`, do not add an `else` statement.

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

Continue right after the `if` statement, as shown below

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

Switch statements can be a little tricky.

First, don't put a `break` after a `return` statement in a specific case.

```js example-bad
switch (species) {
  case `chicken`:
    return farm.shed;
    break;
  case `horse`:
    return corral.entry;
    break;
  default:
    return "";
}
```

The `break` statements are unreachable, and therefore useless. Do this instead:

```js example-bad
switch (species) {
  case `chicken`:
    return farm.shed;
  case `horse`:
    return corral.entry;
  default:
    return "";
}
```

Put `default` as the last case, and don't end it with a `break`. If you need to do it differently, add a comment explaining why.

Pay attention! When you declare a local variable for a case, you need to use braces to define a scope:

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

If certain states of your program throw uncaught errors, they will halt execution and potentially reduce the usefulness of the example. You should, therefore, catch errors using a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block, as shown below:

```js example-good
try {
  console.log(getResult());
} catch (e) {
  console.error(e);
}
```

When you don't need the parameter of the `catch` statement, omit it:

```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("An error happened!");
  }
```

Keep in mind, that only _recoverable_ errors should be caught and handled. All non-recoverable errors should be let through and bubble up the call stack.

## Strings

String literals can be enclosed within single quotes, as in `'A string'`, or within double quotes, as in `"A string"`. Don't worry about which one to use; Prettier keeps it consistent.

### Template literals

For inserting values into strings, use [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals).

Here is an example of the recommended way to use template literals. Their use prevents a lot of spacing errors.

```js example-good
let name = 'Chris';
console.log(`Hi! I'm ${name}!`);
```

Don't concatenate strings like this:

```js example-bad
let name = 'Chris';
console.log("Hi! I'm" + name + "!");
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

## Objects

### Object names

When defining an object class, use _CamelCase_ (starting with a capital letter, also known as PascalCase) for the class name and _camelCase_, starting with a lowercase letter, for the object property and method names.

When defining an object instance, either a literal or via a constructor, use _camelCase_, starting with lower-case character, for the instance name. For example:

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
let object = {};
```

Don't create a general object like this:

```js example-bad
let object = new Object();
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

### Object properties

The `Object.hasOwnProperties()` method has been deprecated in favor of `Object.hasOwn()`.

## Functions and classes

### Function names

For function names, use camelCase, starting with a lowercase character. Use concise, human-readable, and semantic names where appropriate.

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

function doIt() {
  console.log('Hello!');
};
```

### Function declarations

Where possible, use the `function` declaration to define functions over function expressions:

Here is the recommended way to declare a function:

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

When using anonymous functions inside as a callback (a function passed to another method invocation) and you do not need to access `this`, use an arrow function to make the code shorter and cleaner.

Here is the recommended way:

```js example-good
const array1 = [1, 2, 3, 4];
let sum = array1.reduce((a, b) => a + b);
```

Instead of this:

```js example-bad
const array1 = [1, 2, 3, 4];
let sum = array1.reduce(function (a, b) {
  return a + b;
});
```

Consider avoiding using arrow function to assign a function to an identifier. In particular, don't use arrow functions for methods. Use named functions with the keyword `function`:

```js example-good
function x() {
  // …
}
```

Don't do:

```js example-bad
const x = () => {
   // …
}
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

- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), including the `finally()` method
- [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)

When both techniques are possible, we don't have any preference.

## Web APIs to avoid

In addition to these JavaScript language features, we reccomend a few guidelines related to Web APIs to keep in mind.

### Avoid browser prefixes

If all major browser (Chrome, Edge, Firefox, and Safari) supports a feature, don't prefix it.

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

The above snippet should be:

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

- Do not use {{DOMxRef("Element.innerHTML")}} to insert purely textual content into an element; use {{DOMxRef("Node.textContent")}} instead. The property `innerHTML` leads to security problems if a developer doesn't control the parameter. The more we as writers avoid using it, the fewer security flaws are created when a developer copies and pastes our code.

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

- The `alert()` function is unreliable. It doesn't work in live example on MDN that are inside an {{HTMLElement("iframe")}}. Moreover, it is modal to the whole window, which is annoying. In static code examples, , use `console.log()` or `console.error()`. In [live examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples), avoid `console.log()` and `console.error()` as they are not displayed, use a dedicated UI element.

### Use the appropriate log method

- When logging a message, use `console.log()`.
- When logging an error, use `console.error()`.

## See also

[JavaScript language reference](/en-US/docs/Web/JavaScript/Reference) - browse through our JavaScript reference pages to check out some good, concise, meaningful CSS snippets.
