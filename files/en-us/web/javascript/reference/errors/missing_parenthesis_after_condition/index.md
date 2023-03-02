---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "missing ) after condition" occurs when there is an error with
how an
[`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
condition is written. It must appear in parenthesis after the `if` keyword.

## Message

```
SyntaxError: missing ) after condition (Firefox)
SyntaxError: Unexpected token '{'. Expected ')' to end an 'if' condition. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is an error with how an
[`if`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
condition is written. In any programming language, code needs to make decisions and
carry out actions accordingly depending on different inputs. The if statement executes a
statement if a specified condition is truthy. In JavaScript, this condition must appear
in parenthesis after the `if` keyword, like this:

```js
if (condition) {
  // do something if the condition is true
}
```

## Examples

### Missing parenthesis

It might just be an oversight, carefully check all you parenthesis in your code.

```js example-bad
if (Math.PI < 3 {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

To fix this code, you would need to add a parenthesis that closes the condition.

```js example-good
if (Math.PI < 3) {
  console.log("wait what?");
}
```

### Misused is keyword

If you are coming from another programming language, it is also easy to add keywords
that don't mean the same or have no meaning at all in JavaScript.

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

Instead you need to use a correct [comparison operator](/en-US/docs/Web/JavaScript/Reference/Operators).
For example:

```js
if (done === true) {
  console.log("we are done!");
}
```

Or even better:

```js example-good
if (done) {
  console.log("we are done!");
}
```

## See also

- [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Comparison operators](/en-US/docs/Web/JavaScript/Reference/Operators)
- [Making decisions in your code — conditionals](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
