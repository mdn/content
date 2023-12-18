---
title: "SyntaxError: unlabeled break must be inside loop or switch"
slug: Web/JavaScript/Reference/Errors/Bad_break
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "unlabeled break must be inside loop or switch" occurs when a {{jsxref("Statements/break", "break")}} statement is not inside a loop or a {{jsxref("Statements/switch", "switch")}} statement.

## Message

```plain
SyntaxError: Illegal break statement (V8-based)
SyntaxError: unlabeled break must be inside loop or switch (Firefox)
SyntaxError: 'break' is only valid inside a switch or loop statement. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

{{jsxref("Statements/break", "break")}} statements can be used to exit a loop or a `switch` statement, and using them elsewhere is a syntax error. Alternatively, you can provide a [label](/en-US/docs/Web/JavaScript/Reference/Statements/label) to the `break` statement to break out of any statement with that label — however, if the label does not reference a containing statement, another error [SyntaxError: label not found](/en-US/docs/Web/JavaScript/Reference/Errors/Label_not_found) will be thrown.

## Examples

### Unsyntactic break

`break` cannot be used outside `switch` or loops.

```js-nolint example-bad
let score = 0;

function increment() {
  if (score === 100)
    break; // SyntaxError: unlabeled break must be inside loop or switch
  }
  score++;
}
```

Maybe instead of `break`, you intend to use {{jsxref("Statements/return", "return")}} to early-terminate a function.

```js example-good
let score = 0;

function increment() {
  if (score === 100) {
    return;
  }
  score++;
}
```

### Using break in callbacks

`break` cannot be used in callbacks, even if the callback is called from a loop.

```js-nolint example-bad
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

while (containingIndex < matrix.length) {
  matrix[containingIndex].forEach((value) => {
    if (value === 5) {
      break; // SyntaxError: unlabeled break must be inside loop or switch
    }
  });
  containingIndex++;
}
```

Instead, refactor the code so the `break` is used outside the callback.

```js example-good
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

outer: while (containingIndex < matrix.length) {
  for (const value of matrix[containingIndex]) {
    if (value === 5) {
      break outer;
    }
  }
  containingIndex++;
}
```

```js example-good
let containingIndex = 0;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

while (containingIndex < matrix.length) {
  if (matrix[containingIndex].includes(5)) {
    break;
  }
  containingIndex++;
}
```

There's no way to early-terminate a {{jsxref("Array/forEach", "forEach()")}} loop. You can use {{jsxref("Array/some", "some()")}} instead, or convert it to a {{jsxref("Statements/for...of", "for...of")}} loop.

```js-nolint example-bad
array.forEach((value) => {
  if (value === 5) {
    break; // SyntaxError: unlabeled break must be inside loop or switch
  }
  // do something with value
});
```

```js example-good
array.some((value) => {
  if (value === 5) {
    return true;
  }
  // do something with value
  return false;
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    break;
  }
  // do something with value
}
```

## See also

- {{jsxref("Statements/break", "break")}}
