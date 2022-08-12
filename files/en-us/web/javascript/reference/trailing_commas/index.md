---
title: Trailing commas
slug: Web/JavaScript/Reference/Trailing_commas
tags:
  - Comma
  - ECMAScript2017
  - ECMAScript5
  - JavaScript
  - Language feature
  - Syntax
  - Trailing comma
browser-compat: javascript.grammar.trailing_commas
---
{{JsSidebar("More")}}

**Trailing commas** (sometimes called "final commas") can be useful when
adding new elements, parameters, or properties to JavaScript code. If you want to add a
new property, you can add a new line without modifying the previously last line if that
line already uses a trailing comma. This makes version-control diffs cleaner and editing
code might be less troublesome.

JavaScript has allowed trailing commas in array literals since the beginning, and later
added them to object literals, and more recently, to
function parameters and to named imports and named exports.

[JSON](/en-US/docs/Glossary/JSON), however, disallows trailing commas.

## Syntax

```js
,
```

## Examples

### Trailing commas in literals

#### Arrays

JavaScript ignores trailing commas in arrays:

```js
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

If more than one trailing comma is used, an elision (or hole) is produced. An array
with holes is called _sparse_ (a _dense_ array has no holes). When
iterating arrays for example with {{jsxref("Array.prototype.forEach()")}} or
{{jsxref("Array.prototype.map()")}}, array holes are skipped.

```js
const arr = [1, 2, 3,,,];
arr.length; // 5
```

#### Objects

Trailing commas in object literals are legal as well:

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### Trailing commas in functions

Trailing commas are also allowed in function parameter lists.

#### Parameter definitions

The following function definition pairs are legal and equivalent to each other.
Trailing commas don't affect the `length` property of function declarations
or their `arguments` object.

```js
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

The trailing comma also works with [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for classes or objects:

```js
class C {
  one(a,) {}
  two(a, b,) {}
}

const obj = {
  one(a,) {},
  two(a, b,) {},
};
```

#### Function calls

The following function invocation pairs are legal and equivalent to each other.

```js
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Illegal trailing commas

Function parameter definitions or function invocations only containing a comma will
throw a {{Jsxref("SyntaxError")}}. Furthermore, when using a [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), trailing commas are not allowed:

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Trailing commas in destructuring

A trailing comma is also allowed on the left-hand side when using
[destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
// array destructuring with trailing comma
[a, b,] = [1, 2];

// object destructuring with trailing comma
const o = {
  p: 42,
  q: true,
};
const {p, q,} = o;
```

Again, when using a rest element, a {{jsxref("SyntaxError")}} will be thrown:

```js example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Trailing commas in JSON

As JSON is based on a very restricted subset of JavaScript syntax, **trailing commas are not allowed in JSON**.

Both lines will throw a `SyntaxError`:

```js example-bad
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Omit the trailing commas to parse the JSON correctly:

```js example-good
JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');
```

### Trailing commas in named imports and named exports

Trailing commas are valid in named imports and named exports.

#### named imports

```js
  import {
    A,
    B,
    C,
  } from 'D'

  import { X, Y, Z, } from 'W'

  import { A as B, C as D, E as F, } from 'Z'; //Renaming imports
```

#### named exports

```js
  export {
    A,
    B,
    C,
  }

  export { A, B, C, };

  export { A as B, C as D, E as F, }; // Renaming exports
```

### Quantifier prefix

```js
  //{ DecimalDigits[~Sep], DecimalDigits[~Sep] }
  x{n,}
  x{n,m}
  x{n,m}?
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Initial ECMAScript proposal: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) by Jeff Morrison
