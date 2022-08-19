---
title: let
slug: Web/JavaScript/Reference/Statements/let
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Statement
  - Variable declaration
  - Variables
  - let
browser-compat: javascript.statements.let
---
{{jsSidebar("Statements")}}

The **`let`** declaration declares a block-scoped local variable, optionally initializing it to a value.

{{EmbedInteractiveExample("pages/js/statement-let.html")}}

## Syntax

```js
let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];
```

### Parameters

- `nameN`
  - : The names of the variable or variables to declare. Each must be a legal JavaScript identifier.
- `valueN` {{optional_inline}}
  - : For each variable declared, you may optionally specify its initial value to any legal JavaScript expression.

Alternatively, the [Destructuring Assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax can also be used to declare variables.

```js
let { bar } = foo; // where foo = { bar:10, baz:12 };
/* This creates a variable with the name 'bar', which has a value of 10 */
```

## Description

**`let`** allows you to declare variables that are limited to the scope of a {{jsxref("statements/block", "block", "", 1)}} statement, or expression on which it is used, unlike the {{jsxref("statements/var", "var")}} keyword, which declares a variable globally, or locally to an entire function regardless of block scope.
The other difference between {{jsxref("statements/var", "var")}} and
`let` is that the latter is initialized to a value only when a [parser evaluates it (see below)](#temporal_dead_zone_tdz).

Just like {{jsxref("statements/const", "const", "Description")}} the `let` does _not_ create properties of the {{domxref("window")}} object when declared globally (in the top-most scope).

An explanation of why the name "**let**" was chosen can be found [here](https://stackoverflow.com/questions/37916940/why-was-the-name-let-chosen-for-block-scoped-variable-declarations-in-javascri).

Many issues with `let` variables can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readability).

Unlike `var`, `let` begins [_declarations_, not _statements_](/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations). That means you cannot use a lone `let` declaration as the body of a block (which makes sense, since there's no way to access the variable).

```js example-bad
if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

## Examples

### Scoping rules

Variables declared by **`let`** have their scope in the block for which they are declared, as well as in any contained sub-blocks.
In this way, **`let`** works very much like **`var`**.
The main difference is that the scope of a **`var`** variable is the entire enclosing function:

```js
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

At the top level of programs and functions, **`let`**, unlike **`var`**, does not create a property on the global object.
For example:

```js
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

### Redeclarations

Redeclaring the same variable within the same function or block scope raises a {{jsxref("SyntaxError")}}.

```js example-bad
if (x) {
  let foo;
  let foo; // SyntaxError thrown.
}
```

You may encounter errors in {{jsxref("Statements/switch", "switch")}} statements because there is only one block.

```js example-bad
let x = 1;
switch(x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}
```

However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment, which will not produce the redeclaration errors shown above.

```js
let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}
```

### Temporal dead zone (TDZ)

A `let` or `const` variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a {{jsxref("ReferenceError")}}.
The variable is initialized with a value when execution reaches the line of code where it was declared.
If no initial value was specified with the variable declaration, it will be initialized with a value of `undefined`.

This differs from {{jsxref("Statements/var", "var", "var_hoisting")}} variables, which will return a value of `undefined` if they are accessed before they are declared.
The code below demonstrates the different result when `let` and `var` are accessed in code before the line in which they are declared.

```js example-bad
{ // TDZ starts at beginning of scope
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position).
For example, the code below works because, even though the function that uses the `let` variable appears before the variable is declared, the function is _called_ outside the TDZ.

```js
{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`

  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
```

#### The TDZ and `typeof`

Using the `typeof` operator for a `let` variable in its TDZ will throw a {{jsxref("ReferenceError")}}:

```js example-bad
// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
```

This differs from using `typeof` for undeclared variables, and variables that hold a value of `undefined`:

```js
// prints out 'undefined'
console.log(typeof undeclaredVariable);
```

#### TDZ combined with lexical scoping

The following code results in a `ReferenceError` at the line shown:

```js example-bad
function test() {
  var foo = 33;
  if (foo) {
    let foo = foo + 55; // ReferenceError
  }
}
test();
```

The `if` block is evaluated because the outer `var foo` has a value.
However due to lexical scoping this value is not available inside the block: the identifier `foo` _inside_ the `if` block is the `let foo`.
The expression `(foo + 55)` throws a `ReferenceError` because initialization of `let foo` has not completed — it is still in the temporal dead zone.

This phenomenon can be confusing in a situation like the following.
The instruction `let n of n.a` is already inside the private scope of the for loop's block.
So, the identifier `n.a` is resolved to the property '`a`' of the '`n`' object located in the first part of the instruction itself (`let n`).

This is still in the temporal dead zone as its declaration statement has not been reached and terminated.

```js example-bad
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}

  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});
```

### Other situations

When used inside a block, **`let`** limits the variable's scope to that block.
Note the difference between **`var`**, whose scope is inside the function where it is declared.

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
```

However, this combination of **`var`** and **`let`** declaration below is a {{jsxref("SyntaxError")}} due to **`var`** being hoisted to the top of the block.
This results in an implicit re-declaration of the variable.

```js example-bad
let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/const", "const")}}
- [Hoisting > `let` and `const` hoisting](/en-US/docs/Glossary/Hoisting#let_and_const_hoisting)
- [ES6 In Depth: `let` and `const`](https://hacks.mozilla.org/2015/07/es6-in-depth-let-and-const/)
- [Breaking changes in `let` and `const` in Firefox 44](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/)
- [You Don't Know JS: Scope & Closures: Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch3.md)
- [StackOverflow: What is the Temporal Dead Zone](https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone/33198850)?
- [StackOverflow: What is the difference between using `let` and `var`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var)
