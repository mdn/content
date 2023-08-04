---
title: "SyntaxError: return not in function"
slug: Web/JavaScript/Reference/Errors/Bad_return
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "return not in function" occurs when a [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions).

## Message

```plain
SyntaxError: Illegal return statement (V8-based)
SyntaxError: return not in function (Firefox)
SyntaxError: Return statements are only valid inside functions. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

A [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return) statement is called outside of a [function](/en-US/docs/Web/JavaScript/Guide/Functions). Maybe there are missing curly brackets somewhere? The `return` statement must be in a function, because it ends function execution and specifies a value to be returned to the function caller.

## Examples

### Missing curly brackets

```js example-bad
function cheer(score) {
  if (score === 147)
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}

// SyntaxError: return not in function
```

The curly brackets look correct at a first glance, but this code snippet is missing a `{` after the first `if` statement. Correct would be:

```js example-good
function cheer(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
}
```

## See also

- [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return)
