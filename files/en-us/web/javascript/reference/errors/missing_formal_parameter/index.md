---
title: 'SyntaxError: missing formal parameter'
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "missing formal parameter" occurs when your function
declaration is missing valid parameters.

## Message

```
SyntaxError: missing formal parameter (Firefox)
SyntaxError: Unexpected number '3'. Expected a parameter pattern or a ')' in parameter list. (Safari)
SyntaxError: Unexpected string literal "x". Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

"Formal parameter" is a fancy way of saying "function parameter". Your function
declaration is missing valid parameters. In the declaration of a function, the
parameters must be [identifiers](/en-US/docs/Glossary/Identifier), not any
value like numbers, strings, or objects. Declaring functions and calling functions are
two separate steps. Declarations require identifier as parameters, and only when calling
(invoking) the function, you provide the values the function should use.

In [JavaScript](/en-US/docs/Glossary/JavaScript), identifiers can contain
only alphanumeric characters (or "$" or "\_"), and may not start with a digit. An
identifier differs from a **string** in that a string is data, while an
identifier is part of the code.

## Examples

### Provide proper function parameters

Function parameters must be identifiers when setting up a function. All these function
declarations fail, as they are providing values for their parameters:

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

You will need to use identifiers in function declarations:

```js example-good
function square(number) {
  return number * number;
};

function greet(greeting) {
  return greeting;
};

function log(arg) {
  console.log(arg)
};
```

You can then call these functions with the arguments you like:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({obj: "value"}); // Object { obj: "value" }
```

## See also

- Other errors regarding formal parameters:

  - [SyntaxError: Malformed formal parameter](/en-US/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
