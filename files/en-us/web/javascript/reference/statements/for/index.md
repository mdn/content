---
title: for
slug: Web/JavaScript/Reference/Statements/for
tags:
  - JavaScript
  - Language feature
  - Loop
  - Reference
  - Statement
  - for
browser-compat: javascript.statements.for
---
{{jsSidebar("Statements")}}

The **for statement** creates a loop that consists of three optional
expressions, enclosed in parentheses and separated by semicolons, followed by a
statement (usually a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block)) to
be executed in the loop.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntax

```js
for ([initialization]; [condition]; [final-expression])
  statement
```

- `initialization`

  - : An expression (including assignment expressions) or variable declaration evaluated
    once before the loop begins. Typically used to initialize a counter variable. This
    expression may optionally declare new variables with `var` or
    `let` keywords. Variables declared with `var` are not local to
    the loop, i.e. they are in the same scope the `for` loop is in. Variables
    declared with `let` are local to the statement.

    The result of this expression is discarded.

- `condition`
  - : An expression to be evaluated before each loop iteration. If this expression [evaluates to true](/en-US/docs/Glossary/Truthy), `statement` is executed. If the expression [evaluates to false](/en-US/docs/Glossary/Falsy), execution exits the loop and goes to the first statement after the `for` construct.

    This conditional test is optional. If omitted, the condition always evaluates to true.
- `final-expression`
  - : An expression to be evaluated at the end of each loop iteration. This occurs before
    the next evaluation of `condition`. Generally used to update or
    increment the counter variable.
- `statement`
  - : A statement that is executed as long as the condition evaluates to true. To execute
    multiple statements within the loop, use a {{jsxref("Statements/block", "block", "",
    0)}} statement (`{ /* ... */ }`) to group those statements. To execute no
    statement within the loop, use an {{jsxref("Statements/empty", "empty", "", 0)}}
    statement (`;`).

## Examples

### Using for

The following `for` statement starts by declaring the variable
`i` and initializing it to `0`. It checks that `i` is
less than nine, performs the two succeeding statements, and increments `i` by
1 after each pass through the loop.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Optional for expressions

All three expressions in the head of the `for` loop are optional.

For example, in the `initialization` block it is not required to
initialize variables:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Like the `initialization` block, the
`condition` block is also optional. If you are omitting this
expression, you must make sure to break the loop in the body in order to not create an
infinite loop.

```js
for (let i = 0;; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

You can also omit all three blocks. Again, make sure to use a
{{jsxref("Statements/break", "break")}} statement to end the loop and also modify
(increase) a variable, so that the condition for the break statement is true at some
point.

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

However, in the case where you are not fully using all three expression positions — especially if you are not declaring variables with the first expression but mutating something in the upper scope — consider using a [`while`](/en-US/docs/Web/JavaScript/Reference/Statements/while) loop instead, which makes the intention clearer.

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### Lexical declarations in the initialization block is scoped to the for loop

Declaring a variable within the initialization block has important differences from declaring it in the upper [scope](/en-US/docs/Glossary/Scope), especially when creating a [closure](/en-US/docs/Web/JavaScript/Closures) within the loop body. For example, for the code below:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

…it logs `0`, `1`, and `2`, as expected. However, if the variable is defined in the upper scope:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

…it logs `3`, `3`, and `3`. The reason is that each `setTimeout` creates a new closure that closes over the `i` variable, but if the `i` is not scoped to the loop body, all closures will reference the same variable when they eventually get called — and due to the asynchronous nature of [`setTimeout`](/en-US/docs/Web/API/setTimeout), it will happen after the loop has already exited, causing the value of `i` in all queued callbacks' bodies to have the value of `3`.

This also happens if you use a `var` statement as the initialization, because variables declared with `var` are only function-scoped, but not lexically scoped (i.e. they can't be scoped to the loop body).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

The scoping effect of the initialization block can be understood as if the declaration happens within the loop body, but just happens to be accessible within the `condition` and `final-expression` parts.

### Using for without a statement

The following `for` cycle calculates the offset position of a node in the
`final-expression` section, and therefore it does not require the
use of a `statement` section, a semicolon is used instead.

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); /* initialization */
    itNode; /* condition */
    left += itNode.offsetLeft, top += itNode.offsetTop, itNode = itNode.offsetParent /* final-expression */
  ); /* semicolon */

  console.log(`Offset position of '${id}' element:\n left: ${left}px;\n top: ${top}px;`);

}

/* Example call: */

showOffsetPos('content');

// Output:
// "Offset position of "content" element:
// left: 0px;
// top: 153px;"
```

> **Note:** This is one of the few cases in JavaScript where
> **the semicolon is mandatory**. Indeed, without the semicolon the line that
> follows the cycle declaration will be considered a statement.

### Using for with two iterating variables

You can create two counters that are updated simultaneously in a for loop using the [comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator).

```js
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/empty", "empty statement", "", 0)}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
