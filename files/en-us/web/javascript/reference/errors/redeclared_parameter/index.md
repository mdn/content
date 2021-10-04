---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---

{{jsSidebar("Errors")}}

The JavaScript exception "redeclaration of formal parameter" occurs when the same
variable name occurs as a function parameter and is then redeclared using a
{{jsxref("Statements/let", "let")}} assignment in a function body again.

## Message

```js
SyntaxError: Let/Const redeclaration (Edge)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The same variable name occurs as a function parameter and is then redeclared using a
{{jsxref("Statements/let", "let")}} assignment in a function body again. Redeclaring the
same variable within the same function or block scope using `let` is not
allowed in JavaScript.

## Examples

### Redeclared argument

In this case, the variable "arg" redeclares the argument.

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

If you want to change the value of "arg" in the function body, you can do so, but you
do not need to declare the same variable again. In other words: you can omit the
`let` keyword. If you want to create a new variable, you need to rename it as
conflicts with the function parameter already.

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## See also

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- [Declaring
  variables](/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations) in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
