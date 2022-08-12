---
title: A re-introduction to JavaScript (JS tutorial)
slug: Web/JavaScript/A_re-introduction_to_JavaScript
tags:
  - CodingScripting
  - Guide
  - Intermediate
  - Intro
  - JavaScript
  - Learn
---
{{jsSidebar}}

Why a re-introduction? Because [JavaScript](/en-US/docs/Glossary/JavaScript) is notorious for being misunderstood. It is often derided as being a toy, but beneath its layer of deceptive simplicity, powerful language features await. JavaScript is now used by an incredible number of high-profile applications, showing that deeper knowledge of this technology is an important skill for any web or mobile developer.

It's useful to start with an overview of the language's history. JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript, but it was renamed in an ill-fated marketing decision that attempted to capitalize on the popularity of Sun Microsystem's Java language — despite the two having very little in common. This has been a source of confusion ever since.

Several months later, Microsoft released JScript with Internet Explorer 3. It was a mostly-compatible JavaScript work-alike. Several months after that, Netscape submitted JavaScript to [Ecma International](https://www.ecma-international.org/), a European standards organization, which resulted in the first edition of the [ECMAScript](/en-US/docs/Glossary/ECMAScript) standard that year. The standard received a significant update as ECMAScript edition 3 in 1999. The fourth edition was abandoned, due to political differences concerning language complexity. Many parts of the fourth edition formed the basis for ECMAScript edition 5, published in December 2009, and for the 6th major edition of the standard, published in June 2015. Since then a yearly edition has been published. For example, the [13th edition](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) was published in June 2022.

> **Note:** Because it is more familiar, we will refer to ECMAScript as "JavaScript" from this point on.

Unlike most programming languages, the JavaScript language has no concept of input or output. It is designed to run as a scripting language in a host environment, and it is up to the host environment to provide mechanisms for communicating with the outside world. The most common host environment is the browser, but JavaScript interpreters can also be found in a huge list of other places, including Adobe Acrobat, Adobe Photoshop, SVG images, Yahoo's Widget engine, server-side environments such as [Node.js](https://nodejs.org/), NoSQL databases like the open source [Apache CouchDB](https://couchdb.apache.org/), embedded computers, complete desktop environments like [GNOME](https://www.gnome.org/) (one of the most popular GUIs for GNU/Linux operating systems), and others.

## Overview

JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes, instead of classes (see more about [prototypical inheritance](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) and ES2015 [classes](/en-US/docs/Web/JavaScript/Reference/Classes)). JavaScript also supports functional programming — because they are objects, functions may be stored in variables and passed around like any other object.

Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript's types are:

- [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type)
- [BigInt](/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
- [String](/en-US/docs/Web/JavaScript/Data_structures#string_type)
- [Boolean](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- {{jsxref("Function")}}
- [Object](/en-US/docs/Web/JavaScript/Data_structures#objects)
- [Symbol](/en-US/docs/Web/JavaScript/Data_structures#symbol_type) (new in ES2015)

In addition, there is also [undefined](/en-US/docs/Web/JavaScript/Data_structures#undefined_type) and [null](/en-US/docs/Web/JavaScript/Data_structures#null_type), which are slightly odd. And {{jsxref("Array")}}, which is a special kind of object. And {{jsxref("Date")}} and {{jsxref("RegExp")}}, which are objects that you get for free. And to be technically accurate, functions are just a special type of object. So the type diagram looks more like this:

- [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type)
- [BigInt](/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
- [String](/en-US/docs/Web/JavaScript/Data_structures#string_type)
- [Boolean](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- [Symbol](/en-US/docs/Web/JavaScript/Data_structures#symbol_type) (new in ES2015)
- [Object](/en-US/docs/Web/JavaScript/Data_structures#objects)

  - {{jsxref("Function")}}
  - {{jsxref("Array")}}
  - {{jsxref("Date")}}
  - {{jsxref("RegExp")}}

- [null](/en-US/docs/Web/JavaScript/Data_structures#null_type)
- [undefined](/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

And there are some built-in {{jsxref("Error")}} types as well. Things are a lot easier if we stick with the first diagram, however, so we'll discuss the types listed there for now.

## Numbers

ECMAScript has two built-in numeric types: **Number** and **BigInt**.

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2^53 − 1) and 2^53 − 1). And where this article and other MDN articles refer to "integers", what's usually meant is a _representation_ of an integer using a Number value. But because such Number values aren't real integers, you have to be a little careful. For example:

```js
console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1
```

So an _apparent integer_ is in fact _implicitly a float_.

Also, watch out for stuff like:

```js
0.1 + 0.2 == 0.30000000000000004;
```

In practice, integer values are treated as 32-bit ints, and some implementations even store it that way until they are asked to perform an instruction that's valid on a Number but not on a 32-bit integer. This can be important for bit-wise operations.

The standard [arithmetic operators](/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) are supported, including addition, subtraction, modulus (or remainder) arithmetic, and so forth. There's also a built-in object that we did not mention earlier called {{jsxref("Math")}} that provides advanced mathematical functions and constants:

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

You can convert a string to an integer using the built-in {{jsxref("Global_Objects/parseInt", "parseInt()")}} function. This takes the base for the conversion as an optional second argument, which you should always provide:

```js
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```

In older browsers, strings beginning with a "0" are assumed to be in octal (radix 8), but this hasn't been the case since 2013 or so. Unless you're certain of your string format, you can get surprising results on those older browsers:

```js
parseInt('010');  //  8
parseInt('0x10'); // 16
```

Here, we see the {{jsxref("Global_Objects/parseInt", "parseInt()")}} function treat the first string as octal due to the leading 0, and the second string as hexadecimal due to the leading "0x". The _hexadecimal notation is still in place_; only octal has been removed.

If you want to convert a binary number to an integer, just change the base:

```js
parseInt('11', 2); // 3
```

Similarly, you can parse floating point numbers using the built-in {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} function. Unlike its {{jsxref("Global_Objects/parseInt", "parseInt()")}} cousin, `parseFloat()` always uses base 10.

You can also use the unary `+` operator to convert values to numbers:

```js
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```

A special value called {{jsxref("NaN")}} (short for "Not a Number") is returned if the string is non-numeric:

```js
parseInt('hello', 10); // NaN
```

`NaN` is toxic: if you provide it as an operand to any mathematical operation, the result will also be `NaN`:

```js
NaN + 5; // NaN
```

You can reliably test for `NaN` using the built-in {{jsxref("Number.isNaN", "Number.isNaN()")}} function, [which behaves just as its name implies](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#description):

```js
Number.isNaN(NaN); // true
Number.isNaN('hello'); // false
Number.isNaN('1'); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN([1]) // false
Number.isNaN([1,2]) // false
```

But don't test for `NaN` using the global {{jsxref("Global_Objects/isNaN", "isNaN()")}} function, [which has unintuitive behavior](/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#confusing_special-case_behavior):

```js
isNaN('hello'); // true
isNaN('1'); // false
isNaN(undefined); // true
isNaN({}); // true
isNaN([1]) // false
isNaN([1,2]) // true
```

JavaScript also has the special values {{jsxref("Infinity")}} and `-Infinity`:

```js
 1 / 0; //  Infinity
-1 / 0; // -Infinity
```

You can test for `Infinity`, `-Infinity` and `NaN` values using the built-in {{jsxref("Global_Objects/isFinite", "isFinite()")}} function:

```js
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

> **Note:** The {{jsxref("Global_Objects/parseInt", "parseInt()")}} and {{jsxref("Global_Objects/parseFloat", "parseFloat()")}} functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However the "+" operator converts the string to `NaN` if there is an invalid character contained within it. Just try parsing the string "10.2abc" with each method by yourself in the console and you'll understand the differences better.

## Strings

Strings in JavaScript are sequences of [Unicode characters](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode). This should be welcome news to anyone who has had to deal with internationalization. More accurately, they are sequences of UTF-16 code units; each code unit is represented by a 16-bit number. Each Unicode character is represented by either 1 or 2 code units.

If you want to represent a single character, you just use a string consisting of that single character.

To find the length of a string (in code units), access its [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```js
'hello'.length; // 5
```

There's our first brush with JavaScript objects! Did we mention that you can use strings like {{jsxref("Object", "objects", "", 1)}} too? They have {{jsxref("String", "methods", "#instance_methods", 1)}} as well that allow you to manipulate the string and access information about the string:

```js
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'mars'); // "hello, mars"
'hello'.toUpperCase(); // "HELLO"
```

## Other types

JavaScript distinguishes between [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), which is a value that indicates a deliberate non-value (and is only accessible through the `null` keyword), and {{jsxref("undefined")}}, which is a value of type `undefined` that indicates an uninitialized variable — that is, a value hasn't even been assigned yet. We'll talk about variables later, but in JavaScript it is possible to declare a variable without assigning a value to it. If you do this, the variable's type is `undefined`. `undefined` is actually a constant.

JavaScript has a boolean type, with possible values `true` and `false` (both of which are keywords.) Any value can be converted to a boolean according to the following rules:

1. `false`, `0`, empty strings (`""`), `NaN`, `null`, and `undefined` all become `false`.
2. All other values become `true`.

You can perform this conversion explicitly using the `Boolean()` function:

```js
Boolean('');  // false
Boolean(234); // true
```

However, this is rarely necessary, as JavaScript will silently perform this conversion when it expects a boolean, such as in an `if` statement (see below). For this reason, we sometimes speak of "true values" and "false values," meaning values that become `true` and `false`, respectively, when converted to booleans. Alternatively, such values can be called "truthy" and "falsy", respectively.

Boolean operations such as `&&` (logical _and_), `||` (logical _or_), and `!` (logical _not_) are supported; see below.

## Variables

New variables in JavaScript are declared using one of three keywords: [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var).

**`let`** allows you to declare block-level variables. The declared variable is available from the _block_ it is enclosed in.

```js
let a;
let name = 'Simon';
```

The following is an example of scope with a variable declared with **`let`**:

```js
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

**`const`** allows you to declare variables whose values are never intended to change. The variable is available from the _block_ it is declared in.

```js
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

**`var`** does not have the restrictions that the other two keywords have. This is because it was traditionally the only way to declare a variable in JavaScript. A variable declared with the **`var`** keyword is available from the _function_ it is declared in.

```js
var a;
var name = 'Simon';
```

An example of scope with a variable declared with **`var`:**

```js
// myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable is visible to the whole function
}

// myVarVariable *is* visible out here
```

If you declare a variable without assigning any value to it, its type is `undefined`.

An important difference between JavaScript and other languages like Java is that in JavaScript, blocks do not have scope; only functions have a scope. So if a variable is defined using `var` in a compound statement (for example inside an `if` control structure), it will be visible to the entire function. However, starting with ECMAScript 2015, [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declarations allow you to create block-scoped variables.

## Operators

JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` which is the [remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder). Values are assigned using `=`, and there are also compound assignment statements such as `+=` and `-=`. These extend out to `x = x operator y`.

```js
x += 5;
x = x + 5;
```

You can use `++` and `--` to increment and decrement respectively. These can be used as a prefix or postfix operators.

The [`+` operator](/en-US/docs/Web/JavaScript/Reference/Operators#addition) also does string concatenation:

```js
'hello' + ' world'; // "hello world"
```

If you add a string to a number (or other value) everything is converted into a string first. This might trip you up:

```js
'3' + 4 + 5;  // "345"
 3 + 4 + '5'; // "75"
```

Adding an empty string to something is a useful way of converting it to a string itself.

[Comparisons](/en-US/docs/Web/JavaScript/Reference/Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These work for both strings and numbers. Equality is a little less straightforward. The double-equals operator performs type coercion if you give it different types, with sometimes interesting results:

```js
123 == '123'; // true
1 == true; // true
```

To avoid type coercion, use the triple-equals operator:

```js
123 === '123'; // false
1 === true;    // false
```

There are also `!=` and `!==` operators.

JavaScript also has [bitwise operations](/en-US/docs/Web/JavaScript/Reference/Operators). If you want to use them, they're there.

## Control structures

JavaScript has a similar set of control structures to other languages in the C family. Conditional statements are supported by `if` and `else`; you can chain them together if you like:

```js
let name = 'kittens';
if (name === 'puppies') {
  name += ' woof';
} else if (name === 'kittens') {
  name += ' meow';
} else {
  name += '!';
}
name === 'kittens meow';
```

JavaScript has `while` loops and `do-while` loops. The first is good for basic looping; the second for loops where you wish to ensure that the body of the loop is executed at least once:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript's [`for` loop](/en-US/docs/Web/JavaScript/Reference/Statements/for) is the same as that in C and Java: it lets you provide the control information for your loop on a single line.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript also contains two other prominent for loops: [`for`...`of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

```js
for (const value of array) {
  // do something with value
}
```

and [`for`...`in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in):

```js
for (const property in object) {
  // do something with object property
}
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```js
const name = o && o.getName();
```

Or for caching values (when falsy values are invalid):

```js
const name = cachedName || (cachedName = getName());
```

JavaScript has a ternary operator for conditional expressions:

```js
const allowed = (age > 18) ? 'yes' : 'no';
```

The `switch` statement can be used for multiple branches based on a number or string:

```js
switch (action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```

If you don't add a `break` statement, execution will "fall through" to the next level. This is very rarely what you want — in fact it's worth specifically labeling deliberate fallthrough with a comment if you really meant it to aid debugging:

```js
switch (a) {
  case 1: // fallthrough
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}
```

The default clause is optional. You can have expressions in both the switch part and the cases if you like; comparisons take place between the two using the `===` operator:

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## Objects

JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

- Dictionaries in Python.
- Hashes in Perl and Ruby.
- Hash tables in C and C++.
- HashMaps in Java.
- Associative arrays in PHP.

The fact that this data structure is so widely used is a testament to its versatility. Since everything (except for core types) in JavaScript is an object, any JavaScript program naturally involves plenty of hash table lookups. It's a good thing they're so fast!

The "name" part is a JavaScript string, while the value can be any JavaScript value — including more objects. This allows you to build data structures of arbitrary complexity.

There are two basic ways to create an empty object:

```js
const obj = new Object();
```

And:

```js
const obj = {};
```

These are semantically equivalent; the second is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times.

Object literal syntax can be used to initialize an object in its entirety:

```js
const obj = {
  name: 'Carrot',
  _for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12
  }
};
```

Attribute access can be chained together:

```js
obj.details.color; // orange
obj['details']['size']; // 12
```

The following example creates an object prototype(`Person`) and an instance of that prototype(`you`).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define an object
const you = new Person('You', 24);
// We are creating a new person named "You" aged 24.
```

**Once created**, an object's properties can again be accessed in one of two ways:

```js
// dot notation
obj.name = 'Simon';
const name = obj.name;
```

And:

```js
// bracket notation
obj['name'] = 'Simon';
const name = obj['name'];
// can use a variable to define a key
const user = prompt('what is your key?')
obj[user] = prompt('what is its value?')
```

These are also semantically equivalent. The second method has the advantage that the name of the property is provided as a string, which means it can be calculated at run-time. However, using this method prevents some JavaScript engine and minifier optimizations being applied. It can also be used to set and get properties with names that are [reserved words](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords):

```js
obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine
```

> **Note:** Starting in ECMAScript 5, reserved words may be used as object property names "in the buff". This means that they don't need to be "clothed" in quotes when defining object literals. See the ES5 [Spec](https://es5.github.io/#x7.6.1).

For more on objects and prototypes see [Object.prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). For an explanation of object prototypes and the object prototype chains see [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

> **Note:** Starting in ECMAScript 2015, object keys can be defined by the variable using bracket notation upon being created. `{[phoneType]: 12345}` is possible instead of just `const userPhone = {}; userPhone[phoneType] = 12345`.

## Arrays

Arrays in JavaScript are actually a special type of object. They work very much like regular objects (numerical properties can naturally be accessed only using `[]` syntax) but they have one magic property called '`length`'. This is always one more than the highest index in the array.

One way of creating arrays is as follows:

```js
const a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3
```

A more convenient notation is to use an array literal:

```js
const a = ['dog', 'cat', 'hen'];
a.length; // 3
```

Note that `array.length` isn't necessarily the number of items in the array. Consider the following:

```js
const a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

Remember — the length of the array is one more than the highest index.

If you query a non-existent array index, you'll get a value of `undefined` in return:

```js
typeof a[90]; // undefined
```

If you take the above about `[]` and `length` into account, you can iterate over an array using the following `for` loop:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

ES2015 introduced the more concise [`for`...`of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop for iterable objects such as arrays:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

You could also iterate over an array using a [`for`...`in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop, however this does not iterate over the array elements, but the array indices. Furthermore, if someone added new properties to `Array.prototype`, they would also be iterated over by such a loop. Therefore this loop type is not recommended for arrays.

Another way of iterating over an array that was added with ECMAScript 5 is [`forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```

If you want to append an item to an array do it like this:

```js
a.push(item);
```

Arrays come with a number of methods. See also the [full documentation for array methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

| Method name                                        | Description                                                                       |
|----------------------------------------------------| --------------------------------------------------------------------------------- |
| `a.toString()`                                     | Returns a string with the `toString()` of each element separated by commas.       |
| `a.toLocaleString()`                               | Returns a string with the `toLocaleString()` of each element separated by commas. |
| `a.concat(item1, /* … ,*/ itemN)`                  | Returns a new array with the items added on to it.                                |
| `a.join(sep)`                                      | Converts the array to a string — with values delimited by the `sep` param         |
| `a.pop()`                                          | Removes and returns the last item.                                                |
| `a.push(item1, /* … ,*/ itemN)`                    | Appends items to the end of the array.                                            |
| `a.shift()`                                        | Removes and returns the first item.                                               |
| `a.unshift(item1, /* … ,*/ itemN)`                 | Prepends items to the start of the array.                                         |
| `a.slice(start[, end])`                            | Returns a sub-array.                                                              |
| `a.sort([cmpfn])`                                  | Takes an optional comparison function.                                            |
| `a.splice(start, delcount[, item1, /* … ,*/ itemN])` | Lets you modify an array by deleting a section and replacing it with more items.  |
| `a.reverse()`                                      | Reverses the array.                                                               |

## Functions

Along with objects, functions are the core component in understanding JavaScript. The most basic function couldn't be much simpler:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

This demonstrates a basic function. A JavaScript function can take 0 or more named parameters. The function body can contain as many statements as you like and can declare its own variables which are local to that function. The `return` statement can be used to return a value at any time, terminating the function. If no return statement is used (or an empty return with no value), JavaScript returns `undefined`.

The named parameters turn out to be more like guidelines than anything else. You can call a function without passing the parameters it expects, in which case they will be set to `undefined`.

```js
add(); // NaN
// You can't perform addition on undefined
```

You can also pass in more arguments than the function is expecting:

```js
add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

That may seem a little silly, but functions have access to an additional variable inside their body called [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments), which is an array-like object holding all of the values passed to the function. Let's re-write the add function to take as many values as we want:

```js
function add() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

That's really not any more useful than writing `2 + 3 + 4 + 5` though. Let's create an averaging function:

```js
function avg() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

This is pretty useful, but it does seem a little verbose. To reduce this code a bit more we can look at substituting the use of the arguments array through [Rest parameter syntax](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters). In this way, we can pass in any number of arguments into the function while keeping our code minimal. The **rest parameter operator** is used in function parameter lists with the format: **...variable** and it will include within that variable the entire list of uncaptured arguments that the function was called with.

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

In the above code, the variable **args** holds all the values that were passed into the function.

It is important to note that wherever the rest parameter operator is placed in a function declaration it will store all arguments _after_ its declaration, but not before. i.e. _function avg(**firstValue,** ...args)_ will store the first value passed into the function in the **firstValue** variable and the remaining arguments in **args**. That's another useful language feature but it does lead us to a new problem. The `avg()` function takes a comma-separated list of arguments — but what if you want to find the average of an array? You could just rewrite the function as follows:

```js
function avgArray(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

But it would be nice to be able to reuse the function that we've already created. Luckily, JavaScript lets you call a function with an arbitrary array of arguments, using the {{jsxref("Function.apply", "apply()")}} method of any function object.

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

The second argument to `apply()` is the array to use as arguments; the first will be discussed later on. This emphasizes the fact that functions are objects too.

You can achieve the same result using the [spread operator](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in the function call.

For instance: `avg(...numbers)`

### Anonymous functions

JavaScript lets you create anonymous functions — that is, functions without names. In practice, anonymous functions are typically used as arguments to other functions or are made callable by immediately assigning them to a variable that can be used to invoke the function:

```js
// Note that there's no function name before the parentheses
let avg = function() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};
```

That makes the anonymous function invocable by calling `avg()` with some arguments — that is, it's semantically equivalent to declaring the function using the `function avg()` named-function form.

But there's a way that anonymous functions can be useful even without ever being assigned to variables or passed as arguments to other functions: JavaScript provides a mechanism for simultaneously declaring and invoking a function using a single expression. It's called an [Immediately invoked function expression (IIFE)](/en-US/docs/Glossary/IIFE), and the syntax for using it with an anonymous function looks like this:

```js
(function() {
  // …
})();
```

Further details on IIFEs are out of scope for this introductory article — but a good example of what they're particularly useful for is in the [Emulating private methods with closures](/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) section of the [Closures](/en-US/docs/Web/JavaScript/Closures) article.

### Recursive functions

JavaScript allows you to call functions recursively. This is particularly useful for dealing with tree structures, such as those found in the browser DOM.

```js
function countChars(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
```

This highlights a potential problem with anonymous functions: how do you call them recursively if they don't have a name? JavaScript lets you name function expressions for this. You can use named [IIFEs (Immediately Invoked Function Expressions)](/en-US/docs/Glossary/IIFE) as shown below:

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) { // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; child = elm.childNodes[i]; i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

The name provided to a function expression as above is only available to the function's own scope. This allows more optimizations to be done by the engine and results in more readable code. The name also shows up in the debugger and some stack traces, which can save you time when debugging.

Note that JavaScript functions are themselves objects — like everything else in JavaScript — and you can add or change properties on them just like we've seen earlier in the Objects section.

## Custom objects

> **Note:** The content in this section does not cover modern JavaScript features, including support for [Classes](/en-US/docs/Web/JavaScript/Reference/Classes).
> For a more detailed discussion of object-oriented programming in JavaScript, see [Introducing JavaScript objects](/en-US/docs/Learn/JavaScript/Objects) and [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

In classic object-oriented programming, objects are collections of data and methods that operate on that data.
JavaScript uses functions as classes.

Let's consider a person object with first and last name fields.
There are two ways in which the name might be displayed: as "first last" or as "last, first". Using the functions and objects that we've discussed previously, we could display the data like this:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last
  };
}
function personFullName(person) {
  return `${person.first} ${person.last}`;
}
function personFullNameReversed(person) {
  return `${person.last}, ${person.first}`;
}

const s = makePerson('Simon', 'Willison');
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

This works, but it's pretty ugly. You end up with dozens of functions in your global namespace. What we really need is a way to attach a function to an object. Since functions are objects, this is easy:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName() {
      return `${this.first} ${this.last}`;
    },
    fullNameReversed() {
      return `${this.last}, ${this.first}`;
    }
  };
}

const s = makePerson('Simon', 'Willison');
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

Note on the [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword. Used inside a function, `this` refers to the current object. What that actually means is specified by the way in which you called that function. If you called it using [dot notation or bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#accessing_properties) on an object, that object becomes `this`. If dot notation wasn't used for the call, `this` refers to the global object.

Note that `this` is a frequent cause of mistakes. For example:

```js
const s = makePerson('Simon', 'Willison');
const fullName = s.fullName;
fullName(); // undefined undefined
```

When we call `fullName()` alone, without using `s.fullName()`, `this` is bound to the global object. Since there are no global variables called `first` or `last` we get `undefined` for each one.

We can take advantage of the `this` keyword to improve our `makePerson` function:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function() {
    return `${this.first} ${this.last}`;
  };
  this.fullNameReversed = function() {
    return `${this.last}, ${this.first}`;
  };
}
const s = new Person('Simon', 'Willison');
```

We have introduced another keyword: [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). `new` is strongly related to `this`. It creates a brand new empty object, and then calls the function specified, with `this` set to that new object. Notice though that the function specified with `this` does not return a value but merely modifies the `this` object. It's `new` that returns the `this` object to the calling site. Functions that are designed to be called by `new` are called constructor functions. Common practice is to capitalize these functions as a reminder to call them with `new`.

The improved function still has the same pitfall with calling `fullName()` alone.

Our person objects are getting better, but there are still some ugly edges to them. Every time we create a person object we are creating two brand new function objects within it — wouldn't it be better if this code was shared?

```js
function personFullName() {
  return `${this.first} ${this.last}`;
}
function personFullNameReversed() {
  return `${this.last}, ${this.first}`;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

That's better: we are creating the method functions only once, and assigning references to them inside the constructor. Can we do any better than that? The answer is yes:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return `${this.first} ${this.last}`;
};
Person.prototype.fullNameReversed = function() {
  return `${this.last}, ${this.first}`;
};
```

`Person.prototype` is an object shared by all instances of `Person`. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of `Person` that isn't set, JavaScript will check `Person.prototype` to see if that property exists there instead. As a result, anything assigned to `Person.prototype` becomes available to all instances of that constructor via the `this` object.

This is an incredibly powerful tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime:

```js
const s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

Interestingly, you can also add things to the prototype of built-in JavaScript objects. Let's add a method to `String` that returns that string in reverse:

```js
const s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  let r = '';
  for (let i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

Our new method even works on string literals!

```js
'This can now be reversed'.reversed(); // desrever eb won nac sihT
```

As mentioned before, the prototype forms part of a chain. The root of that chain is `Object.prototype`, whose methods include `toString()` — it is this method that is called when you try to represent an object as a string. This is useful for debugging our `Person` objects:

```js
const s = new Person('Simon', 'Willison');
s.toString(); // [object Object]

Person.prototype.toString = function() {
  return `<Person: ${this.fullName()}>`;
}

s.toString(); // "<Person: Simon Willison>"
```

Remember how `avg.apply()` had a null first argument? We can revisit that now. The first argument to `apply()` is the object that should be treated as '`this`'. For example, here's a trivial implementation of `new`:

```js
function trivialNew(constructor, ...args) {
  const o = {}; // Create an object
  constructor.apply(o, args);
  return o;
}
```

This isn't an exact replica of `new` as it doesn't set up the prototype chain (it would be difficult to illustrate). This is not something you use very often, but it's useful to know about. In this snippet, `...args` (including the ellipsis) is called the "[rest arguments](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)" — as the name implies, this contains the rest of the arguments.

Calling

```js
const bill = trivialNew(Person, 'William', 'Orange');
```

is therefore almost equivalent to

```js
const bill = new Person('William', 'Orange');
```

`apply()` has a sister function named [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), which again lets you set `this` but takes an expanded argument list as opposed to an array.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
const s = new Person('Simon', 'Willison');
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
```

### Inner functions

JavaScript function declarations are allowed inside other functions. We've seen this once before, with an earlier `makePerson()` function. An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope:

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

This provides a great deal of utility in writing more maintainable code. If a called function relies on one or two other functions that are not useful to any other part of your code, you can nest those utility functions inside it. This keeps the number of functions that are in the global scope down, which is always a good thing.

This is also a great counter to the lure of global variables. When writing complex code it is often tempting to use global variables to share values between multiple functions — which leads to code that is hard to maintain. Nested functions can share variables in their parent, so you can use that mechanism to couple functions together when it makes sense without polluting your global namespace — "local globals" if you like. This technique should be used with caution, but it's a useful ability to have.

## Closures

This leads us to one of the most powerful abstractions that JavaScript has to offer — but also the most potentially confusing. What does this do?

```js
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = makeAdder(5);
const add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?
```

The name of the `makeAdder()` function should give it away: it creates new 'adder' functions, each of which, when called with one argument, adds it to the argument that it was created with.

What's happening here is pretty much the same as was happening with the inner functions earlier on: a function defined inside another function has access to the outer function's variables. The only difference here is that the outer function has returned, and hence common sense would seem to dictate that its local variables no longer exist. But they _do_ still exist — otherwise, the adder functions would be unable to work. What's more, there are two different "copies" of `makeAdder()`'s local variables — one in which `a` is 5 and the other one where `a` is 20. So the result of that function calls is as follows:

```js
add5(6); // returns 11
add20(7); // returns 27
```

Here's what's actually happening. Whenever JavaScript executes a function, a 'scope' object is created to hold the local variables created within that function. It is initialized with any variables passed in as function parameters. This is similar to the global object that all global variables and functions live in, but with a couple of important differences: firstly, a brand new scope object is created every time a function starts executing, and secondly, unlike the global object (which is accessible as `this` and in browsers as `window`) these scope objects cannot be directly accessed from your JavaScript code. There is no mechanism for iterating over the properties of the current scope object, for example.

So when `makeAdder()` is called, a scope object is created with one property: `a`, which is the argument passed to the `makeAdder()` function. `makeAdder()` then returns a newly created function. Normally JavaScript's garbage collector would clean up the scope object created for `makeAdder()` at this point, but the returned function maintains a reference back to that scope object. As a result, the scope object will not be garbage-collected until there are no more references to the function object that `makeAdder()` returned.

Scope objects form a chain called the scope chain, similar to the prototype chain used by JavaScript's object system.

A **closure** is the combination of a function and the scope object in which it was created. Closures let you save state — as such, they can often be used in place of objects. You can find [several excellent introductions to closures](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work).
