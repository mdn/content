---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "return (or yield) not in function" occurs when a
[`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
or [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)
statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions).

## Message

```
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

A
[`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
or [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)
statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions). Maybe there are
missing curly brackets somewhere? The `return` and `yield`
statements must be in a function, because they end (or pause and resume) function
execution and specify a value to be returned to the function caller.

## Examples

### Missing curly brackets

```js example-bad
function cheer(score) {
  if (score === 147)
    return 'Maximum!';
  }
  if (score > 100) {
    return 'Century!';
  }
}

// SyntaxError: return not in function
```

The curly brackets look correct at a first glance, but this code snippet is missing a
`{` after the first `if` statement. Correct would be:

```js example-good
function cheer(score) {
  if (score === 147) {
    return 'Maximum!';
  }
  if (score > 100) {
    return 'Century!';
  }
}
```

## See also

- [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)
