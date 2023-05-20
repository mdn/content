---
title: block
slug: Web/JavaScript/Reference/Statements/block
page-type: javascript-statement
browser-compat: javascript.statements.block
---

{{jsSidebar("Statements")}}

A **block statement** is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and contains a list of zero or more statements and declarations.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : Statements and declarations grouped within the block statement.

## Description

The block statement is often called the _compound statement_ in other languages. It allows you to use multiple statements where JavaScript expects only one statement. Combining statements into blocks is a common practice in JavaScript, especially when used in association with control flow statements like {{jsxref("Statements/if...else", "if...else")}} and {{jsxref("Statements/for", "for")}}. The opposite behavior is possible using an [empty statement](/en-US/docs/Web/JavaScript/Reference/Statements/Empty), where you provide no statement, although one is required.

In addition, combined with block-scoped declarations like [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), and [`class`](/en-US/docs/Web/JavaScript/Reference/Statements/class), blocks can prevent temporary variables from polluting the global namespace, just like [IIFEs](/en-US/docs/Glossary/IIFE) do.

### Block scoping rules with var or function declaration in non-strict mode

Variables declared with `var` or created by [function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function) in non-strict mode **do not** have block scope. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. For example:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

This logs 2 because the `var x` statement within the block is in the same scope as the `var x` statement before the block.

In non-strict code, function declarations inside blocks behave strangely. Do not use them.

### Block scoping rules with let, const, class, or function declaration in strict mode

By contrast, identifiers declared with [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const), and [`class`](/en-US/docs/Web/JavaScript/Reference/Statements/class) do have block scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

The `x = 2` is limited in scope to the block in which it was defined.

The same is true of `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Note that the block-scoped `const c = 2` _does not_ throw a `SyntaxError: Identifier 'c' has already been declared` because it can be declared uniquely within the block.

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), function declarations inside blocks are scoped to that block and are hoisted.

```js
"use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

## Examples

### Using a block statement as the body of a for loop

A [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) loop accepts a single statement as its body.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

If you want to use more than one statement in the loop body, you can group them into one block statement:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Using a block statement to encapsulate data

`let` and `const` declarations are scoped to the containing block. This allows you to hide data from the global scope without wrapping it in a function.

```js
let sector;
{
  // These variables are scoped to this block and are not
  // accessible after the block
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
