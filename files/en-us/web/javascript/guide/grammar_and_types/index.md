---
title: Grammar and types
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guide
  - JavaScript
  - l10n:priority
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

This chapter discusses JavaScript's basic grammar, variable declarations, data types and literals.

## Basics

JavaScript borrows most of its syntax from Java, C, and C++, but it has also been influenced by Awk, Perl, and Python.

JavaScript is **case-sensitive** and uses the **Unicode** character set. For example, the word Früh (which means "early" in German) could be used as a variable name.

```js
const Früh = "foobar";
```

But, the variable `früh` is not the same as `Früh` because JavaScript is case sensitive.

In JavaScript, instructions are called {{Glossary("Statement", "statements")}} and are separated by semicolons (;).

A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they _must_ be separated by semicolons.

> **Note:** ECMAScript also has rules for automatic insertion of semicolons ([ASI](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)) to end statements. (For more information, see the detailed reference about JavaScript's [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar).)

It is considered best practice, however, to always write a semicolon after a statement, even when it is not strictly needed. This practice reduces the chances of bugs getting into the code.

The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are _tokens_, _control characters_, _line terminators_, _comments_, or {{glossary("whitespace")}}. (Spaces, tabs, and newline characters are considered whitespace.)

## Comments

The syntax of **comments** is the same as in C++ and in many other languages:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

You can't nest block comments. This often happens when you accidentally include a `*/` sequence in your comment, which will terminate the comment.

```js example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In this case, you need to break up the `*/` pattern. For example, by inserting a backslash:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Comments behave like whitespace, and are discarded during script execution.

> **Note:** You might also see a third type of comment syntax at the start of some JavaScript files, which looks something like this: `#!/usr/bin/env node`.
>
> This is called **hashbang comment** syntax, and is a special comment used to specify the path to a particular JavaScript engine that should execute the script. See [Hashbang comments](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) for more details.

## Declarations

JavaScript has three kinds of variable declarations.

- {{jsxref("Statements/var", "var")}}
  - : Declares a variable, optionally initializing it to a value.
- {{jsxref("Statements/let", "let")}}
  - : Declares a block-scoped, local variable, optionally initializing it to a value.
- {{jsxref("Statements/const", "const")}}
  - : Declares a block-scoped, read-only named constant.

### Variables

You use variables as symbolic names for values in your application. The names of variables, called {{Glossary("Identifier", "identifiers")}}, conform to certain rules.

A JavaScript identifier usually starts with a letter, underscore (`_`), or dollar sign (`$`). Subsequent characters can also be digits (`0`–`9`). Because JavaScript is case sensitive, letters include the characters `A` through `Z` (uppercase) as well as `a` through `z` (lowercase).

You can use most of ISO 8859-1 or Unicode letters such as `å` and `ü` in identifiers. (For more details, see [this blog post](https://mathiasbynens.be/notes/javascript-identifiers-es6) or the [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) reference.) You can also use the [Unicode escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) as characters in identifiers.

Some examples of legal names are `Number_hits`, `temp99`, `$credit`, and `_name`.

### Declaring variables

You can declare a variable in two ways:

- With the keyword {{jsxref("Statements/var", "var")}}. For example, `var x = 42`. This syntax can be used to declare both **local** and **global** variables, depending on the _execution context_.
- With the keyword {{jsxref("Statements/const", "const")}} or {{jsxref("Statements/let", "let")}}. For example, `let y = 13`. This syntax can be used to declare a block-scope local variable. (See [Variable scope](#variable_scope) below.)

You can declare variables to unpack values from [Object Literals](#object_literals) using the [Destructuring Assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax. For example, `let { bar } = foo`. This will create a variable named `bar` and assign to it the value corresponding to the key of the same name from our object `foo`.

You can also assign a value to a variable. For example, `x = 42`. This form creates an **[undeclared global](/en-US/docs/Web/JavaScript/Reference/Statements/var#description)** variable. It also generates a strict JavaScript warning. Undeclared global variables can often lead to unexpected behavior. Thus, it is discouraged to use undeclared global variables.

### Evaluating variables

A variable declared using the `var` or `let` statement with no assigned value specified has the value of {{jsxref("undefined")}}.

An attempt to access an undeclared variable results in a {{jsxref("ReferenceError")}} exception being thrown:

```js
var a;
console.log(`The value of a is ${a}`); // The value of a is undefined

console.log(`The value of b is ${b}`); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

console.log(`The value of c is ${c}`); // Uncaught ReferenceError: c is not defined

let x;
console.log(`The value of x is ${x}`); // The value of x is undefined

console.log(`The value of y is ${y}`); // Uncaught ReferenceError: y is not defined
let y;
```

You can use `undefined` to determine whether a variable has a value. In the following code, the variable `input` is not assigned a value, and the [`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement evaluates to `true`.

```js
let input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

The `undefined` value behaves as `false` when used in a boolean context. For example, the following code executes the function `myFunction` because the `myArray` element is `undefined`:

```js
const myArray = [];
if (!myArray[0]) myFunction();
```

The `undefined` value converts to `NaN` when used in numeric context.

```js
let a;
a + 2;  // Evaluates to NaN
```

When you evaluate a [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) variable, the null value behaves as `0` in numeric contexts and as `false` in boolean contexts. For example:

```js
const n = null;
console.log(n * 32); // Will log 0 to the console
```

### Variable scope

When you declare a variable outside of any function, it is called a _global_ variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a _local_ variable, because it is available only within that function.

`let` and `const` declarations are scoped to the [block statement](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) that they are declared in.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```

However, variables created with `var` are not block-scoped, but only local to the _function (or global scope)_ that the block resides within.

For example, the following code will log `5`, because the scope of `x` is the global context (or the function context if the code is part of a function). The scope of `x` is not limited to the immediate `if` statement block.

```js
if (true) {
  var x = 5;
}
console.log(x);  // x is 5
```

### Variable hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception.

This concept is known as _hoisting_. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of `undefined`. So even if you declare and initialize after you use or refer to this variable, it still returns `undefined`.

```js
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';

(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();
```

The above examples will be interpreted the same as:

```js
/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Example 2
 */
var myvar = 'my value';

(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = 'local value';
})();
```

Because of hoisting, all `var` statements in a function should be placed as near to the top of the function as possible. This best practice increases the clarity of the code.

`let` and `const` **are hoisted but not initialized**. Referencing the variable in the block before the variable declaration results in a {{jsxref("ReferenceError")}}, because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

```js
console.log(x); // ReferenceError
const x = 3;
```

### Function hoisting

Functions are hoisted if they're defined using [function _declarations_](/en-US/docs/Web/JavaScript/Reference/Statements/function) — but functions are not hoisted if they're defined using [function _expressions_](/en-US/docs/Web/JavaScript/Reference/Operators/function).

The following example shows how, due to function hoisting, the function `foo` can be called even before it's defined — because the `foo` function is defined using a function declaration.

```js example-good
foo(); // "bar"

/* Function declaration */
function foo() {
  console.log('bar');
}
```

In the following example, the variable name `baz` is hoisted — due to [variable hoisting](#variable_hoisting) — but because a function is assigned to `baz` using a function expression rather than `baz` being defined with a function declaration, the function can't be called before it's defined, because it's not hoisted.

Thus, the `baz()` call below throws a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) with _"baz is not a function"_, because the function assigned to `baz` isn't hoisted — while the `console.log(baz)` call doesn't throw a [`ReferenceError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) but instead logs [`undefined`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), because the _variable_ `baz` is still hoisted even though the function assigned to it isn't. (But the value of `baz` is undefined, since nothing has yet been assigned to it).

```js example-bad
// Doesn't throw ReferenceError
console.log(baz) // undefined

// Throws 'TypeError: baz is not a function'
baz();

/* Function expression */
var baz = function() {
  console.log('bar2');
};
```

### Global variables

Global variables are in fact properties of the _global object_.

In web pages, the global object is {{domxref("window")}}, so you can set and access global variables using the `window.variable` syntax.

Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the `window` or `frame` name. For example, if a variable called `phoneNumber` is declared in a document, you can refer to this variable from an `iframe` as `parent.phoneNumber`.

### Constants

You can create a read-only, named constant with the {{jsxref("Statements/const", "const")}} keyword.

The syntax of a constant identifier is the same as any variable identifier: it must start with a letter, underscore, or dollar sign (`$`), and can contain alphabetic, numeric, or underscore characters.

```js
const PI = 3.14;
```

A constant cannot change value through assignment or be re-declared while the script is running. It must be initialized to a value.

The scope rules for constants are the same as those for `let` block-scope variables. If the `const` keyword is omitted, the identifier is assumed to represent a variable.

You cannot declare a constant with the same name as a function or variable in the same scope. For example:

```js example-bad
// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;

  //statements
}
```

However, the properties of objects assigned to constants are not protected, so the following statement is executed without problems.

```js
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';
```

Also, the contents of an array are not protected, so the following statement is executed without problems.

```js
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

## Data structures and types

### Data types

The latest ECMAScript standard defines eight data types:

- Seven data types that are {{Glossary("Primitive", "primitives")}}:

  1. {{Glossary("Boolean")}}. `true` and `false`.
  2. {{Glossary("null")}}. A special keyword denoting a null value. (Because JavaScript is case-sensitive, `null` is not the same as `Null`, `NULL`, or any other variant.)
  3. {{Glossary("undefined")}}. A top-level property whose value is not defined.
  4. {{Glossary("Number")}}. An integer or floating point number. For example: `42` or `3.14159`.
  5. {{Glossary("BigInt")}}. An integer with arbitrary precision. For example: `9007199254740992n`.
  6. {{Glossary("String")}}. A sequence of characters that represent a text value. For example: `"Howdy"`.
  7. [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol). A data type whose instances are unique and immutable.

- and {{Glossary("Object")}}

Although these data types are relatively few, they enable you to perform useful functions with your applications. {{jsxref("Object", "Objects", "", 1)}} and {{jsxref("Function", "functions", "", 1)}} are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your script can perform.

### Data type conversion

JavaScript is a _dynamically typed_ language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

```js
let answer = 42;
```

And later, you could assign the same variable a string value, for example:

```js
answer = 'Thanks for all the fish!';
```

Because JavaScript is dynamically typed, this assignment does not cause an error message.

### Numbers and the '+' operator

In expressions involving numeric and string values with the `+` operator, JavaScript converts numeric values to strings. For example, consider the following statements:

```js
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
z = '37' + 7 // "377"
```

With all other operators, JavaScript does _not_ convert numeric values to strings. For example:

```js
'37' - 7 // 30
'37' * 7 // 259
```

### Converting strings to numbers

In the case that a value representing a number is in memory as a string, there are methods for conversion.

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("parseFloat", "parseFloat()")}}

`parseInt` only returns whole numbers, so its use is diminished for decimals.

> **Note:** Additionally, a best practice for `parseInt` is to always include the _radix_ parameter. The radix parameter is used to specify which numerical system is to be used.

```js
parseInt('101', 2) // 5
```

An alternative method of retrieving a number from a string is with the `+` (unary plus) operator:

```js
'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literals

_Literals_ represent values in JavaScript. These are fixed values—not variables—that you _literally_ provide in your script. This section describes the following types of literals:

- [Array literals](#array_literals)
- [Boolean literals](#boolean_literals)
- [Numeric literals](#numeric_literals)
- [Object literals](#object_literals)
- [RegExp literals](#regexp_literals)
- [String literals](#string_literals)

### Array literals

An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (`[]`). When you create an array using an array literal, it is initialized with the specified values as its elements, and its `length` is set to the number of arguments specified.

The following example creates the `coffees` array with three elements and a `length` of three:

```js
const coffees = ['French Roast', 'Colombian', 'Kona'];
```

If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.

> **Note:** Array literals create `Array` objects. See {{jsxref("Array")}} and [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) for details on `Array` objects.

#### Extra commas in array literals

If you put two commas in a row in an array literal, the array leaves an empty slot for the unspecified element. The following example creates the `fish` array:

```js
const fish = ['Lion', , 'Angel'];
```

When you log this array, you will see:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Note that the second item is "empty", which is not exactly the same as the actual `undefined` value. When using array-traversing methods like [`Array.prototype.map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), empty slots are skipped. However, index-accessing `fish[1]` still returns `undefined`.

If you include a trailing comma at the end of the list of elements, the comma is ignored.

In the following example, the `length` of the array is three. There is no `myList[3]`. All other commas in the list indicate a new element.

```js
const myList = ['home', , 'school', ];
```

In the following example, the `length` of the array is four, and `myList[0]` and `myList[2]` are missing.

```js
const myList = [, 'home', , 'school'];
```

In the following example, the `length` of the array is four, and `myList[1]` and `myList[3]` are missing. **Only the last comma is ignored.**

```js
const myList = ['home', , 'school', , ];
```

> **Note:** Trailing commas help keep git diffs clean when you have a multi-line array, because appending an item to the end only adds one line, but does not modify the previous line.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Understanding the behavior of extra commas is important to understanding JavaScript as a language.

However, when writing your own code, you should explicitly declare the missing elements as `undefined`, or at least insert a comment to highlight its absence. Doing this increases your code's clarity and maintainability.

```js
const myList = ['home', /* empty */, 'school', /* empty */, ];
```

### Boolean literals

The Boolean type has two literal values: `true` and `false`.

> **Note:** Do not confuse the primitive Boolean values `true` and `false` with the true and false values of the {{jsxref("Boolean")}} object.
>
> The Boolean object is a wrapper around the primitive Boolean data type. See {{jsxref("Boolean")}} for more information.

### Numeric literals

JavaScript numeric literals include integer literals in different bases as well as floating-point literals in base-10.

Note that the language specification requires numeric literals to be unsigned. Nevertheless, code fragments like `-123.4` are fine, being interpreted as a unary `-` operator applied to the numeric literal `123.4`.

#### Integer literals

Integer and {{jsxref("BigInt")}} literals can be written in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

- A _decimal_ integer literal is a sequence of digits without a leading `0` (zero).
- A leading `0` (zero) on an integer literal, or a leading `0o` (or `0O`) indicates it is in _octal_. Octal integer literals can include only the digits `0`–`7`.
- A leading `0x` (or `0X`) indicates a _hexadecimal_ integer literal. Hexadecimal integers can include digits (`0`–`9`) and the letters `a`–`f` and `A`–`F`. (The case of a character does not change its value. Therefore: `0xa` = `0xA` = `10` and `0xf` = `0xF` = `15`.)
- A leading `0b` (or `0B`) indicates a _binary_ integer literal. Binary integer literals can only include the digits `0` and `1`.
- A trailing `n` suffix on an integer literal indicates a {{jsxref("BigInt")}} literal. The integer literal can use any of the above bases. Note that leading-zero octal syntax like `0123n` is not allowed, but `0o123n` is fine.

Some examples of integer literals are:

```
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

For more information, see [Numeric literals in the Lexical grammar reference](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Floating-point literals

A floating-point literal can have the following parts:

- An unsigned decimal integer,
- A decimal point (`.`),
- A fraction (another decimal number),
- An exponent.

The exponent part is an `e` or `E` followed by an integer, which can be signed (preceded by `+` or `-`). A floating-point literal must have at least one digit, and either a decimal point or `e` (or `E`).

More succinctly, the syntax is:

```
[digits].[digits][(E|e)[(+|-)]digits]
```

For example:

```js
3.1415926
.123456789
3.1E+12
.1e-23
```

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

> **Warning:** Do not use an object literal at the beginning of a statement! This will lead to an error (or not behave as you expect), because the `{` will be interpreted as the beginning of a block.

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, `"Saturn"`; the second element, the `getCar` property, is immediately assigned the result of invoking the function `(carTypes("Honda"))`; the third element, the `special` property, uses an existing variable (`sales`).

```js
const sales = 'Toyota';

function carTypes(name) {
  return name === 'Honda' ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
```

Additionally, you can use a numeric or string literal for the name of a property or nest an object inside another. The following example uses these options.

```js
const car = { manyCars: { a: 'Saab', b: 'Jeep' }, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript {{Glossary("Identifier","identifier")}} or number, it must be enclosed in quotes.

Property names that are not valid identifiers cannot be accessed as a dot (`.`) property.

```js example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Instead, they must be accessed with the bracket notation (`[]`).

```js example-good
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames['!']); // Bang!
```

#### Enhanced Object literals

Object literals support a range of shorthand syntaxes that include setting the prototype at construction, shorthand for `foo: foo` assignments, defining methods, making `super` calls, and computing property names with expressions.

Together, these also bring object literals and class declarations closer together, and allow object-based design to benefit from some of the same conveniences.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return 'd ' + super.toString();
  },
  // Computed (dynamic) property names
  ['prop_' + (() => 42)()]: 42,
}
```

### RegExp literals

A regex literal (which is defined in detail [later](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)) is a pattern enclosed between slashes. The following is an example of a regex literal.

```js
const re = /ab+c/;
```

### String literals

A string literal is zero or more characters enclosed in double (`"`) or single (`'`) quotation marks. A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

The following are examples of string literals:

```js
'foo'
"bar"
'1234'
'one line \n another line'
"John's cat"
```

You should use string literals unless you specifically need to use a `String` object. See {{jsxref("String")}} for details on `String` objects.

You can call any of the {{jsxref("String")}} object's methods on a string literal value. JavaScript automatically converts the string literal to a temporary String object, calls the method, then discards the temporary String object. You can also use the `String.length` property with a string literal:

```js
// Will print the number of symbols in the string including whitespace.
console.log("John's cat".length)  // In this case, 10.
```

[Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) are also available. Template literals are enclosed by the back-tick (`` ` ``) ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) character instead of double or single quotes.

Template literals provide syntactic sugar for constructing strings. (This is similar to string interpolation features in Perl, Python, and more.)

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
const name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}?`
```

[Tagged templates](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) are a compact syntax for specifying a template literal along with a call to a "tag" function for parsing it. A tagged template is just a more succinct and semantic way to invoke a function that processes a string and a set of relevant values. The name of the template tag function precedes the template literal — as in the following example, where the template tag function is named `print`. The `print` function will interpolate the arguments and serialize any objects or arrays that may come up, avoiding the pesky `[object Object]`.

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
}

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
}

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
```

Since tagged template literals are just sugar of function calls, you can re-write the above as an equivalent function call:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

This may be reminiscent of the `console.log`-style interpolation:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

You can see how the tagged template reads more naturally than a traditional "formatter" function, where the variables and the template itself have to be declared separately.

#### Using special characters in strings

In addition to ordinary characters, you can also include special characters in strings, as shown in the following example.

```js
'one line \n another line'
```

The following table lists the special characters that you can use in JavaScript strings.

| Character   | Meaning                    |
|-------------|----------------------------|
| `\0`        | Null Byte                  |
| `\b`        | Backspace                  |
| `\f`        | Form Feed                  |
| `\n`        | New Line                   |
| `\r`        | Carriage Return            |
| `\t`        | Tab                        |
| `\v`        | Vertical tab               |
| `\'`        | Apostrophe or single quote |
| `\"`        | Double quote               |
| `\\`        | Backslash character        |
| `\XXX`      | The character with the Latin-1 encoding specified by up to three octal digits `XXX` between `0` and `377`. For example, `\251` is the octal sequence for the copyright symbol. |
| `\xXX`      | The character with the Latin-1 encoding specified by the two hexadecimal digits `XX` between `00` and `FF`. For example, `\xA9` is the hexadecimal sequence for the copyright symbol. |
| `\uXXXX`    | The Unicode character specified by the four hexadecimal digits `XXXX`. For example, `\u00A9` is the Unicode sequence for the copyright symbol. See [Unicode escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode code point escapes. For example, `\u{2F804}` is the same as the simple Unicode escapes `\uD87E\uDC04`.

#### Escaping characters

For characters not listed in the table, a preceding backslash is ignored, but this usage is deprecated and should be avoided.

You can insert a quotation mark inside a string by preceding it with a backslash. This is known as _escaping_ the quotation mark. For example:

```js
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

The result of this would be:

```
He read "The Cremation of Sam McGee" by R.W. Service.
```

To include a literal backslash inside a string, you must escape the backslash character. For example, to assign the file path `c:\temp` to a string, use the following:

```js
const home = 'c:\\temp';
```

You can also escape line breaks by preceding them with backslash. The backslash and line break are both removed from the value of the string.

```js
const str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);   // this string is broken across multiple lines.
```

There is also a [**template literal**](/en-US/docs/Web/JavaScript/Reference/Template_literals) syntax. This allows for many advanced text formatting use cases, including multiline strings!

```js
const poem =
`Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`
```

## More information

This chapter focuses on basic syntax for declarations and types. To learn more about JavaScript's language constructs, see also the following chapters in this guide:

- [Control flow and error handling](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Loops and iteration](/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
- [Expressions and operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

In the next chapter, we will have a look at control flow constructs and error handling.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
