---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exceptions "unexpected token" occur when a specific language construct
was expected, but something else was provided. This might be a simple typo.

## Message

```plain
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

A specific language construct was expected, but something else was provided. This might
be a simple typo.

## Examples

### Expression expected

For example, when chaining expressions, trailing commas are not allowed.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Correct would be omitting the comma or adding another expression:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Not enough brackets

Sometimes, you leave out brackets around `if` statements:

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
  if (n > upperBound) || (n < lowerBound) { // Not enough brackets here!
    throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

The brackets may look correct at first, but note how the `||` is outside the
brackets. Correct would be putting brackets around the `||`:

```js-nolint example-good
function round(n, upperBound, lowerBound) {
  if ((n > upperBound) || (n < lowerBound)) {
    throw new Error(
      `Number ${n} is more than ${upperBound} or less than ${lowerBound}`,
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

## See also

- {{jsxref("SyntaxError")}}
