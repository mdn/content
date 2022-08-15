---
title: JavaScript language overview
slug: Web/JavaScript/Language_Overview
tags:
  - Guide
  - Intermediate
  - JavaScript
---

{{jsSidebar}}

JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes, and also supports functional programming — because they are objects, functions may be stored in variables and passed around like any other object.

This page serves as a quick overview of various JavaScript language features, written for readers with background in other languages, such as C or Java.

## Data types

Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven _primitive types_:

- [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type)
- [BigInt](/en-US/docs/Web/JavaScript/Data_structures#bigint_type)
- [String](/en-US/docs/Web/JavaScript/Data_structures#string_type)
- [Boolean](/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- [Symbol](/en-US/docs/Web/JavaScript/Data_structures#symbol_type)
- [Undefined](/en-US/docs/Web/JavaScript/Data_structures#undefined_type)
- [Null](/en-US/docs/Web/JavaScript/Data_structures#null_type)

Everything else is known as an [Object](/en-US/docs/Web/JavaScript/Data_structures#objects). Functions are just a special type of object in JavaScript that can be called. Common object types include:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

### Numbers

JavaScript has two built-in numeric types: **Number** and **BigInt**.

The Number type is a [double-precision 64-bit binary format IEEE 754 value](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) (numbers between -(2<sup>53</sup> − 1) and 2<sup>53</sup> − 1). Within numbers, JavaScript does not distinguish between floating point numbers and integers.

```js
console.log(3 / 2); // 1.5, not 1
```

So an _apparent integer_ is in fact _implicitly a float_. Because of IEEE 754 encoding, sometimes floating point arithmetic can be imprecise.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

For operations that expect integers, such as bitwise operations, the number will be converted to a 32-bit integer.

The [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type is an arbitrary length integer. Its behavior is similar to C's integer types (e.g. division truncate to zero), except it can grow indefinitely. BigInts are specified with a number literal and an `n` suffix.

```js
console.log(-3n / 2n); // -1n
```

The standard [arithmetic operators](/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) are supported, including addition, subtraction, modulus (or remainder) arithmetic, and so forth. BigInts and Numbers cannot be mixed in arithmetic operations.

The {{jsxref("Math")}} object provides standard mathematical functions and constants.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

There are three ways to convert a string to a number:

- {{jsxref("Global_Objects/parseInt", "parseInt()")}}, which parses the string for an integer.
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}, which parses the string for a floating-point number.
- The [`Number()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) function, which parses a string as if it's a number literal, which supports much more variety of number representations.

You can also use the [unary plus `+`](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) as a shorthand for `Number()`.

By IEEE 754 specification, Number values also include {{jsxref("NaN")}} (short for "Not a Number") and {{jsxref("Infinity")}}. Many "invalid math" operations will return `NaN` — for example, if attempting to parse a non-numeric string, or using [`Math.log()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log) on a negative value. Division by zero produces `Infinity` (positive or negative).

`NaN` is contagious: if you provide it as an operand to any mathematical operation, the result will also be `NaN`. `NaN`, per IEEE 754 specification, is the only value in JavaScript that's not equal to itself.

### Strings

Strings in JavaScript are sequences of [Unicode characters](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#unicode). This should be welcome news to anyone who has had to deal with internationalization. More accurately, they are sequences of UTF-16 code units; each code unit is represented by a 16-bit number. Each Unicode character is represented by either 1 or 2 code units. Strings can be written with either single or double quotes — JavaScript does not have the distinction between characters and strings. If you want to represent a single character, you just use a string consisting of that single character.

```js
console.log("Hello, world");
```

To find the length of a string (in code units), access its [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property.

Strings have [utility methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) to manipulate the string and access information about the string. Because all primitives are immutable by design, these methods would return new strings.

The `+` operator is overloaded for strings: when one of the operands is a string, it performs string concatenation instead of number addition. A special [template literal](/en-US/docs/Web/JavaScript/Reference/Template_literals) syntax allows you to write strings with embedded expressions more succinctly.

```js
const age = 25;
console.log("I am " + age + " years old.");
console.log(`I am ${age} years old.`);
```

### Other types

JavaScript distinguishes between [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), which is a value that indicates a deliberate non-value (and is only accessible through the `null` keyword), and {{jsxref("undefined")}}, which is a value of type `undefined` that indicates absence of value. There are many ways to obtain `undefined`:

- A [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement (`return;`) with no value implicitly returns `undefined`.
- Accessing a nonexistent [object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) property (`obj.iDontExist`) returns `undefined`.
- A variable declaration without initialization (`let x;`) will implicitly initialize the variable to `undefined`.

JavaScript has a Boolean type, with possible values `true` and `false` — both of which are keywords. Any value can be converted to a boolean according to the following rules:

1. `false`, `0`, empty strings (`""`), `NaN`, `null`, and `undefined` all become `false`.
2. All other values become `true`.

You can perform this conversion explicitly using the [`Boolean()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) function:

```js
Boolean(""); // false
Boolean(234); // true
```

However, this is rarely necessary, as JavaScript will silently perform this conversion when it expects a boolean, such as in an `if` statement (see below). For this reason, we sometimes speak of "true values" and "false values", meaning values that become `true` and `false`, respectively, when converted to booleans. Alternatively, such values can be called "truthy" and "falsy", respectively.

Boolean operations such as `&&` (logical _and_), `||` (logical _or_), and `!` (logical _not_) are supported; see below.

The Symbol type is often used to create unique identifiers. Every symbol created with the [`Symbol()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) function is guaranteed to be unique. In addition, there are registered symbols, which are shared constants, and well-known symbols, which are utilized by the language as "protocols" for certain operations. You can read more about them in the [symbol reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

## Variables

New variables in JavaScript are declared using one of three keywords: [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), or [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var).

**`let`** allows you to declare block-level variables. The declared variable is available from the _block_ it is enclosed in.

```js
let a;
let name = "Simon";

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

`const` declarations only prevent _re-assignments_ — they don't prevent _mutations_ of the variable's value, if it's an object.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var` declarations can have surprising behaviors (for example, they are not block-scoped but function-scoped), and they are discouraged in modern JavaScript code.

If you declare a variable without assigning any value to it, its value is `undefined`. You can't declare a `const` variable without an initializer, because you can't change it later anyway.

JavaScript is _dynamically typed_. Types (as described in [the previous section](#data_types)) are only associated with values, but not with variables. For `let`-declared variables, you can always change its type through re-assignment.

```js
let a = 1;
a = "foo";
```

## Operators

JavaScript's numeric operators include `+`, `-`, `*`, `/`, `%` (remainder), and `**` (exponentiation). Values are assigned using `=`. Each binary operator also has a compound assignment counterpart such as `+=` and `-=`, which extend out to `x = x operator y`.

```js
x += 5;
x = x + 5;
```

You can use `++` and `--` to increment and decrement respectively. These can be used as a prefix or postfix operators.

The [`+` operator](/en-US/docs/Web/JavaScript/Reference/Operators#addition) also does string concatenation:

```js
"hello" + " world"; // "hello world"
```

If you add a string to a number (or other value) everything is converted into a string first. This might trip you up:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Adding an empty string to something is a useful way of converting it to a string itself.

[Comparisons](/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`, which work for both strings and numbers. For equality, the double-equals operator performs type coercion if you give it different types, with sometimes interesting results. On the other hand, the triple-equals operator does not attempt type coercion, and is usually preferred.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

The double-equals and triple-equals also have their inequality counterparts: `!=` and `!==`.

JavaScript also has [bitwise operators](/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) and [logical operators](/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Notably, logical operators don't work with boolean values only — they work by the values "truthiness".

```js
const a = 0 && "Hello"; // "Hello" because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

The `&&` and `||` operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```js
const name = o && o.getName();
```

Or for caching values (when falsy values are invalid):

```js
const name = cachedName || (cachedName = getName());
```

For a comprehensive list of operators, see the [guide page](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) or [reference section](/en-US/docs/Web/JavaScript/Reference/Operators).

## Control structures

JavaScript has a similar set of control structures to other languages in the C family. Conditional statements are supported by `if` and `else`; you can chain them together if you like:

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
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

JavaScript also contains two other prominent for loops: [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of), which iterates over [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), most notably arrays, and [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in), which visits all [enumerable](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) properties of an object.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

The `switch` statement can be used for multiple branches based on equality checking.

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

Similar to the behavior in C, case labels act as jump tables, so if you don't add a `break` statement, execution will "fall through" to the next level. Any expression can be part of the `case` label, not just string or number literals. Comparisons take place between the two using the `===` operator.

Unlike some languages like Rust, control-flow structures are statements in JavaScript, meaning you can't assign them to a value, like `const a = if (x) { 1 } else { 2 }`.

For a comprehensive list of control flow statements, see the [reference section](/en-US/docs/Web/JavaScript/Reference/Statements).

## Objects

JavaScript objects can be thought of as simple collections of key-value pairs. As such, they are similar to:

- Dictionaries in Python.
- Hashes in Perl and Ruby.
- Hash tables in C and C++.
- HashMaps in Java.
- Associative arrays in PHP.

JavaScript objects are hashes. Unlike statically typed languages, objects do not have fixed shapes — properties can be added, deleted, re-ordered, mutated, or dynamically queried at any time. Object keys are always [strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [symbols](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — even array indices, which are canonically integers, are actually strings under the hood.

Objects are usually created using the literal syntax:

```js
const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

Object properties can be [accessed](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) using dot (`.`) or brackets (`[]`). When using the dot notation, the key must be a valid [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers). Brackets, on the other hand, allow indexing the object with a dynamic key value.

```js
// dot notation
obj.name = "Simon";
const name = obj.name;

// bracket notation
obj["name"] = "Simon";
const name = obj["name"];

// can use a variable to define a key
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");
```

Objects are always references, so unless something is explicitly copying the object, mutations to an object would be visible to the outside.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

This also means two separately created objects will never be equal (`!==`), because they are different references. If you hold two references of the same object, mutating one would be observable through the other.

```js
const me = {};
const stillMe = {};
me.x = 1;
console.log(stillMe.x); // 1
```

Attribute access can be chained together:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

For more on objects and prototypes see the [`Object` reference page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). For more information on the object initializer syntax, see its [reference page](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). This page has omitted all details about object prototypes and inheritance; for more information, see [Inheritance and the prototype chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript are actually a special type of object. They work very much like regular objects (numerical properties can naturally be accessed only using `[]` syntax) but they have one magic property called `length`. This is always one more than the highest index in the array.

Arrays are usually created with array literals:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript arrays are still objects — you can assign any properties to it, including arbitrary number indices. The only "magic" is that `length` will be automatically updated when you set a particular index.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

This state is called a [_sparse array_](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) because there are uninhabited slots in the middle, and will cause the engine to deoptimize it from an array to a hashtable. Make sure your array is densely populated!

Out-of-bounds indexing doesn't throw. If you query a non-existent array index, you'll get a value of `undefined` in return:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays can have any elements and can grow or shrink arbitrarily.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays can be iterated with the `for` loop, as you can in other C-like languages:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Or, since arrays are iterable, you can use the [`for`...`of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, which is synonymous to C++/Java's `for (int x : arr)` syntax:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays come with a plethora of [array methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Many of them would iterate the array — for example, [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) would apply a callback to every array element, and return a new array:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Functions

Along with objects, functions are the core component in understanding JavaScript. The most basic function declaration looks like this:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

This demonstrates a basic function. A JavaScript function can take 0 or more named parameters. The function body can contain as many statements as you like and can declare its own variables which are local to that function. The [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement can be used to return a value at any time, terminating the function. If no return statement is used (or an empty return with no value), JavaScript returns `undefined`.

Functions can be called with more or fewer parameters than it specifies. You can call a function without passing the parameters it expects, in which case they will be set to `undefined`.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)
```

You can also pass in more arguments than the function is expecting:

```js
add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

There are a number of other parameter syntaxes available. For example, the [rest parameter syntax](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) allows collecting all the extra parameters passed by the caller into an array, similar to Python's `*args`. (Since JS doesn't have named parameters on the language level, there's no `**kwargs`.)

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

In the above code, the variable `args` holds all the values that were passed into the function.

It is important to note that wherever the rest parameter operator is placed in a function declaration it will store all arguments _after_ its declaration, but not before. i.e. `function avg(firstValue, ...args)` will store the first value passed into the function in the `firstValue` variable and the remaining arguments in `args`.

If a function accepts a list of arguments and you already hold an array, you can use the [spread operator](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in the function call to _spread_ the array as a list of elements. For instance: `avg(...numbers)`.

We mentioned JavaScript doesn't have named parameters. It's possible, though, to implement that using [object destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Objects can be conveniently packed and unpacked.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

There's also the [_default parameter_](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) syntax, which allows omitted parameters (or those passed as `undefined`) to have a default value.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1.5, instead of NaN
```

### Anonymous functions

JavaScript lets you create anonymous functions — that is, functions without names. In practice, anonymous functions are typically used as arguments to other functions or are made callable by immediately assigning them to a variable that can be used to invoke the function:

```js
// Note that there's no function name before the parentheses
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

That makes the anonymous function invocable by calling `avg()` with some arguments — that is, it's semantically equivalent to declaring the function using the `function avg()` named-function form.

There's another way to define anonymous functions — with [arrow function expression](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```js
// Note that there's no function name before the parentheses
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// You can omit the `return` when simply returning an expression
const sum = (a, b, c) => a + b + c;
```

Arrow functions are not semantically equivalent to function expressions — for more information, see its [reference page](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

There's a way that anonymous functions can be useful even without ever being assigned to variables or passed as arguments to other functions: JavaScript provides a mechanism for simultaneously declaring and invoking a function using a single expression. It's called an [Immediately invoked function expression (IIFE)](/en-US/docs/Glossary/IIFE), and the syntax for using it with an anonymous function looks like this:

```js
(function () {
  // …
})();
```

For use-cases of IIFEs, you can read [Emulating private methods with closures](/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) section of the [Closures](/en-US/docs/Web/JavaScript/Closures) article.

### Recursive functions

JavaScript allows you to call functions recursively. This is particularly useful for dealing with tree structures, such as those found in the browser DOM.

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Function expressions can be named as well, which allows them to be recursive.

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

The name provided to a function expression as above is only available to the function's own scope. This allows more optimizations to be done by the engine and results in more readable code. The name also shows up in the debugger and some stack traces, which can save you time when debugging.

Note that JavaScript functions are themselves objects — like everything else in JavaScript — and you can add or change properties on them just like we've seen earlier in the Objects section.

### First-class functions

JavaScript functions are first-class objects. This means that they can be assigned to variables, passed as arguments to other functions, and returned from other functions. In addition, JavaScript supports [closures](/en-US/docs/Web/JavaScript/Closures) out-of-the-box without explicit capturing, allowing you to conveniently apply functional programming styles.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

### Inner functions

JavaScript function declarations are allowed inside other functions. An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope:

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

## Classes

JavaScript offers the [class](/en-US/docs/Web/JavaScript/Reference/Classes) syntax that's very similar to languages like Java.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("John");
```

JavaScript classes are just functions that must be instantiated with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. Every time they are constructed, they return an object containing the methods and properties that they specified. They don't enforce any code organization — for example, you can have functions returning classes, or you can have multiple classes per file.

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };
```

Static properties are created by prepending `static`. Private properties are created by prepending a hash `#` (not `private`). The hash is an integral part of the property name. (Think about `#` as `_` in Python.) Unlike most other languages, there's absolutely no way to read a private property outside the class body — not even in derived classes.

For a detailed guide on various class features, you can read the [guide page](/en-US/docs/Web/JavaScript/Guide/Using_Classes).

## Modules

JavaScript also specifies a module system supported by most runtimes. You can use the [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) statements to exchange data between modules (which are always files):

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Unlike Haskell, Python, Java, etc., JavaScript module resolution is entirely host-defined — it's usually based on URLs or file paths, so relative file paths "just work" and are relative to the current module's path instead of some project root path.

For more information, see the [modules guide page](/en-US/docs/Web/JavaScript/Guide/Modules).
