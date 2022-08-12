---
title: label
slug: Web/JavaScript/Reference/Statements/label
tags:
  - JavaScript
  - Language feature
  - Statement
browser-compat: javascript.statements.label
---
{{jsSidebar("Statements")}}

The **labeled statement** can be used with {{jsxref("Statements/break", "break")}}
or {{jsxref("Statements/continue", "continue")}} statements. It is prefixing
a statement with an identifier which you can refer to.

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

## Syntax

```js
label:
  statement
```

- `label`
  - : Any JavaScript identifier that is not a reserved word.
- `statement`
  - : A JavaScript statement. `break` can be used with any labeled statement,
    and `continue` can be used with looping labeled statements.

## Description

You can use a label to identify a loop, and then use the `break` or
`continue` statements to indicate whether a program should interrupt the loop
or continue its execution.

Note that JavaScript has _no_ `goto` statement, you can only use
labels with `break` or `continue`.

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) code, you
can't use `let` as a label name. It will throw a {{jsxref("SyntaxError")}}
(let is a reserved identifier).

## Examples

### Using a labeled continue with for loops

```js
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
  loop2:
  for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
```

### Using a labeled continue statement

Given an array of items and an array of tests, this example counts the number of items
that passes all the tests.

```js
let itemsPassed = 0;
let i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### Using a labeled break with for loops

```js
let i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
  loop2:
  for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example
```

### Using a labeled break statement

Given an array of items and an array of tests, this example determines whether all
items pass all tests.

```js
let allPass = true;
let i, j;

top:
for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}
```

### Using a labeled block with break

You can use labels within simple blocks, but only `break` statements can
make use of non-loop labels.

```js
foo: {
  console.log('face');
  break foo;
  console.log('this will not be executed');
}
console.log('swap');

// this will log:

// "face"
// "swap"
```

### Labeled function declarations

Labels can only be applied to [statements, not declarations](/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). Still, the [Annex B: Additional ECMAScript Features for Web Browsers](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers) section defines a legacy grammar to standardize labeled function declarations in non-strict code.

```js
L: function F() {}
```

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) code,
however, this will throw a {{jsxref("SyntaxError")}}:

```js example-bad
'use strict';
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[Generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*)
can neither be labeled in strict code, nor in non-strict code:

```js example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
