---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
page-type: javascript-error
---

{{JSSidebar("Errors")}}

The JavaScript exception "identifier starts immediately after numeric literal" occurs
when an identifier started with a digit. Identifiers can only start with a letter,
underscore (\_), or dollar sign ($).

## Message

```
SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The names of variables, called [identifiers](/en-US/docs/Glossary/Identifier), conform to certain rules,
which your code must adhere to!

A JavaScript identifier must start with a letter, underscore (\_), or dollar sign ($).
They can't start with a digit! Only subsequent characters can be digits (0-9).

## Examples

### Variable names starting with numeric literals

Variable names can't start with numbers in JavaScript. The following fails:

```js example-bad
const 1life = "foo";
// SyntaxError: identifier starts immediately after numeric literal

const foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

You will need to rename your variable to avoid the leading number.

```js example-good
const life1 = "foo";
const foo = life1;
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Variables](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables)
  in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
