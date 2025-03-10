---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exceptions "unexpected token" occur when the parser does not see a token it recognizes at the given position, so it cannot make sense of the structure of the program. This might be a simple typo.

## Message

```plain
SyntaxError: Unexpected token ';' (V8-based)
SyntaxError: Unexpected identifier 'x' (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: Unexpected string (V8-based)
SyntaxError: Unexpected regular expression (V8-based)
SyntaxError: Unexpected template string (V8-based)

SyntaxError: unexpected token: identifier (Firefox)
SyntaxError: expected expression, got "x" (Firefox)
SyntaxError: expected property name, got "x" (Firefox)
SyntaxError: expected target, got "x" (Firefox)
SyntaxError: expected meta, got "x" (Firefox)
SyntaxError: expected rest argument name, got "x" (Firefox)
SyntaxError: expected closing parenthesis, got "x" (Firefox)
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

### Not enough parentheses

Sometimes, you leave out parentheses around `if` statements:

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
if (n > upperBound) || (n < lowerBound) { // Missing parentheses here!
    throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

The parentheses may look correct at first, but note how the `||` is outside the
parentheses. Correct would be putting parentheses around the `||`:

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

### A structure error further up confused the meaning

Sometimes, the error is caused by some structure issues not directly next to the error location, so you need to look around for potential errors. For example, you intended to declare a method of an object, but you declared it as a property instead:

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

The `.` after `document` is unexpected, because JavaScript is parsing the `{}` as an object literal instead of a function body, so it expects a `:`. The problem is solved by declaring `mounted` as function.

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## See also

- {{jsxref("SyntaxError")}}
