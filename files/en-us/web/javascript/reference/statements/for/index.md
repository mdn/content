---
title: for
slug: Web/JavaScript/Reference/Statements/for
page-type: javascript-statement
browser-compat: javascript.statements.for
---

{{jsSidebar("Statements")}}

The **`for`** statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block)) to be executed in the loop.

{{InteractiveExample("JavaScript Demo: Statement - For")}}

```js interactive-example
let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
```

## Syntax

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : An expression (including [assignment expressions](/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for` loop is in. Variables declared with `let` are local to the statement.

    The result of this expression is discarded.

- `condition` {{optional_inline}}

  - : An expression to be evaluated before each loop iteration. If this expression [evaluates to true](/en-US/docs/Glossary/Truthy), `statement` is executed. If the expression [evaluates to false](/en-US/docs/Glossary/Falsy), execution exits the loop and goes to the first statement after the `for` construct.

    This conditional test is optional. If omitted, the condition always evaluates to true.

- `afterthought` {{optional_inline}}
  - : An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`. Generally used to update or increment the counter variable.
- `statement`
  - : A statement that is executed as long as the condition evaluates to true. You can use a [block statement](/en-US/docs/Web/JavaScript/Reference/Statements/block) to execute multiple statements. To execute no statement within the loop, use an [empty statement](/en-US/docs/Web/JavaScript/Reference/Statements/Empty) (`;`).

## Description

Like other looping statements, you can use [control flow statements](/en-US/docs/Web/JavaScript/Reference/Statements#control_flow) inside `statement`:

- {{jsxref("Statements/break", "break")}} stops `statement` execution and goes to the first statement after the loop.
- {{jsxref("Statements/continue", "continue")}} stops `statement` execution and re-evaluates `afterthought` then `condition`.

## Examples

### Using for

The following `for` statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than nine, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // more statements
}
```

### Initialization block syntax

The initialization block accepts both expressions and variable declarations. However, expressions cannot use the [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in) operator unparenthesized, because that is ambiguous with a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop.

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js-nolint example-good
// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// Parenthesize the `in` expression
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

### Optional for expressions

All three expressions in the head of the `for` loop are optional. For example, it is not required to use the `initialization` block to initialize variables:

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
```

Like the `initialization` block, the `condition` part is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

You can also omit all three expressions. Again, make sure to use a {{jsxref("Statements/break", "break")}} statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

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

### Lexical declarations in the initialization block

Declaring a variable within the initialization block has important differences from declaring it in the upper [scope](/en-US/docs/Glossary/Scope), especially when creating a [closure](/en-US/docs/Web/JavaScript/Closures) within the loop body. For example, for the code below:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

It logs `0`, `1`, and `2`, as expected. However, if the variable is defined in the upper scope:

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

It logs `3`, `3`, and `3`. The reason is that each `setTimeout` creates a new closure that closes over the `i` variable, but if the `i` is not scoped to the loop body, all closures will reference the same variable when they eventually get called — and due to the asynchronous nature of {{domxref("Window.setTimeout", "setTimeout()")}}, it will happen after the loop has already exited, causing the value of `i` in all queued callbacks' bodies to have the value of `3`.

This also happens if you use a `var` statement as the initialization, because variables declared with `var` are only function-scoped, but not lexically scoped (i.e. they can't be scoped to the loop body).

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Logs 3, 3, 3
```

The scoping effect of the initialization block can be understood as if the declaration happens within the loop body, but just happens to be accessible within the `condition` and `afterthought` parts. More precisely, `let` declarations are special-cased by `for` loops — if `initialization` is a `let` declaration, then every time, after the loop body is evaluated, the following happens:

1. A new lexical scope is created with new `let`-declared variables.
2. The binding values from the last iteration are used to re-initialize the new variables.
3. `afterthought` is evaluated in the new scope.

So re-assigning the new variables within `afterthought` does not affect the bindings from the previous iteration.

A new lexical scope is also created after `initialization`, just before `condition` is evaluated for the first time. These details can be observed by creating closures, which allow to get hold of a binding at any particular point. For example, in this code a closure created within the `initialization` section does not get updated by re-assignments of `i` in the `afterthought`:

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

This does not log "0, 1, 2", like what would happen if `getI` is declared in the loop body. This is because `getI` is not re-evaluated on each iteration — rather, the function is created once and closes over the `i` variable, which refers to the variable declared when the loop was first initialized. Subsequent updates to the value of `i` actually create new variables called `i`, which `getI` does not see. A way to fix this is to re-compute `getI` every time `i` updates:

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

The `i` variable inside the `initialization` is distinct from the `i` variable inside every iteration, including the first. So, in this example, `getI` returns 0, even though the value of `i` inside the iteration is incremented beforehand:

```js
for (let i = 0, getI = () => i; i < 3; ) {
  i++;
  console.log(getI());
}
// Logs 0, 0, 0
```

In fact, you can capture this initial binding of the `i` variable and re-assign it later, and this updated value will not be visible to the loop body, which sees the next new binding of `i`.

```js
for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// Logs 0, 0, 0
```

This logs "0, 0, 0", because the `i` variable in each loop evaluation is actually a separate variable, but `getI` and `incrementI` both read and write the _initial_ binding of `i`, not what was subsequently declared.

### Using for without a body

The following `for` cycle calculates the offset position of a node in the `afterthought` section, and therefore it does not require the use of a `statement` section, a semicolon is used instead.

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); // initialization
    itNode; // condition
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // afterthought
  ); // semicolon

  console.log(
    `Offset position of "${id}" element:
left: ${left}px;
top: ${top}px;`,
  );
}

showOffsetPos("content");

// Logs:
// Offset position of "content" element:
// left: 0px;
// top: 153px;
```

Note that the semicolon after the `for` statement is mandatory, because it stands as an [empty statement](/en-US/docs/Web/JavaScript/Reference/Statements/Empty). Otherwise, the `for` statement acquires the following `console.log` line as its `statement` section, which makes the `log` execute multiple times.

### Using for with two iterating variables

You can create two counters that are updated simultaneously in a for loop using the [comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator). Multiple `let` and `var` declarations can also be joined with commas.

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

- [Empty statement](/en-US/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
