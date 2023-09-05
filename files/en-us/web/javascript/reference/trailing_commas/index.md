---
title: Trailing commas
slug: Web/JavaScript/Reference/Trailing_commas
page-type: javascript-language-feature
browser-compat: javascript.grammar.trailing_commas
---

{{JsSidebar("More")}}

**Trailing commas** (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.

JavaScript has allowed trailing commas in array literals since the beginning. Trailing commas are now also allowed in object literals, function parameters, named imports, named exports, and more.

[JSON](/en-US/docs/Glossary/JSON), however, disallows all trailing commas.

## Description

JavaScript allows trailing commas wherever a comma-separated list of values is accepted and more values may be expected after the last item. This includes:

- [Array literals](#arrays)
- [Object literals](#objects)
- [Parameter definitions](#parameter_definitions)
- [Function calls](#function_calls)
- [Named imports](#named_imports)
- [Named exports](#named_exports)
- [Array and object destructuring](#trailing_commas_in_destructuring)

In all these cases, the trailing comma is entirely optional and doesn't change the program's semantics in any way.

It is particular useful when adding, removing, or reordering items in a list that spans multiple lines, because it reduces the number of lines that need to be changed, which helps with both editing and reviewing the diff.

```diff
  [
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]
```

## Examples

### Trailing commas in literals

#### Arrays

JavaScript ignores trailing commas in arrays literals:

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

If more than one trailing comma is used, an elision (or hole) is produced. An array with holes is called [_sparse_](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) (a _dense_ array has no holes). When iterating arrays for example with {{jsxref("Array.prototype.forEach()")}} or {{jsxref("Array.prototype.map()")}}, array holes are skipped. Sparse arrays are generally unfavorable, so you should avoid having multiple trailing commas.

```js
const arr = [1, 2, 3, , ,];
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

The following function definition pairs are legal and equivalent to each other. Trailing commas don't affect the [`length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property of function declarations or their [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

The trailing comma also works with [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for classes or objects:

```js-nolint
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

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Illegal trailing commas

Function parameter definitions or function invocations only containing a comma will throw a {{jsxref("SyntaxError")}}. Furthermore, when using [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), trailing commas are not allowed:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Trailing commas in destructuring

A trailing comma is also allowed on the left-hand side when using [destructuring assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js-nolint
// array destructuring with trailing comma
[a, b,] = [1, 2];

// object destructuring with trailing comma
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

Again, when using a rest element, a {{jsxref("SyntaxError")}} will be thrown:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### Trailing commas in JSON

As JSON is based on a very restricted subset of JavaScript syntax, **trailing commas are not allowed in JSON**.

Both lines will throw a `SyntaxError`:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Omit the trailing commas to parse the JSON correctly:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### Trailing commas in named imports and named exports

Trailing commas are valid in [named imports](/en-US/docs/Web/JavaScript/Reference/Statements/import#named_import) and [named exports](/en-US/docs/Web/JavaScript/Reference/Statements/export).

#### Named imports

```js-nolint
import {
  A,
  B,
  C,
} from "D";

import { X, Y, Z, } from "W";

import { A as B, C as D, E as F, } from "Z";
```

#### Named exports

```js-nolint
export {
  A,
  B,
  C,
};

export { A, B, C, };

export { A as B, C as D, E as F, };
```

### Quantifier prefix

> **Note:** The trailing comma in a [quantifier](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) actually changes its semantics from matching "exactly `n`" to matching "at least `n`".

```js
/x{2}/; // Exactly 2 occurrences of "x"; equivalent to /xx/
/x{2,}/; // At least 2 occurrences of "x"; equivalent to /xx+/
/x{2,4}/; // 2 to 4 occurrences of "x"; equivalent to /xxx?x?/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Grammar and types](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
