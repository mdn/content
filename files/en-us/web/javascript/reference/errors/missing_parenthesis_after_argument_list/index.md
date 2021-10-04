---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---

{{jsSidebar("Errors")}}

The JavaScript exception "missing ) after argument list" occurs when there is an error
with how a function is called. This might be a typo, a missing operator, or an unescaped
string.

## Message

```js
SyntaxError: Expected ')' (Edge)
SyntaxError: missing ) after argument list (Firefox)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

There is an error with how a function is called. This might be a typo, a missing
operator, or an unescaped string, for example.

## Examples

Because there is no "+" operator to concatenate the string, JavaScript expects the
argument for the `log` function to be just `"PI: "`. In that case,
it should be terminated by a closing parenthesis.

```js example-bad
console.log('PI: ' Math.PI);
// SyntaxError: missing ) after argument list
```

You can correct the `log` call by adding the "`+`" operator:

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

### Unterminated strings

```js example-bad
console.log('"Java" + "Script" = \"' + 'Java' + 'Script\");
// SyntaxError: missing ) after argument list
```

Here JavaScript thinks that you meant to have `);` inside the string and
ignores it, and it ends up not knowing that you meant the `);` to end the
function `console.log`. To fix this, we could put  a`'` after the
"Script" string:

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Guide/Functions)
