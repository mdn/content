---
title: "SyntaxError: continue must be inside loop"
slug: Web/JavaScript/Reference/Errors/Bad_continue
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "continue must be inside loop" occurs when a {{jsxref("Statements/continue", "continue")}} statement is not inside a loop statement.

## Message

```
SyntaxError: Illegal continue statement: no surrounding iteration statement (V8-based)
SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement (V8-based)
SyntaxError: continue must be inside loop (Firefox)
SyntaxError: 'continue' is only valid inside a loop statement. (Safari)
SyntaxError: Cannot continue to the label 'label' as it is not targeting a loop. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}.

## What went wrong?

{{jsxref("Statements/continue", "continue")}} statements can be used to continue a loop, and using them elsewhere is a syntax error. Alternatively, you can provide a [label](/en-US/docs/Web/JavaScript/Reference/Statements/label) to the `continue` statement to continue any loop with that label — however, if the label does not reference a containing statement, another error [SyntaxError: label not found](/en-US/docs/Web/JavaScript/Reference/Errors/Label_not_found) will be thrown, and if the label references a statement that is not a loop, a syntax error is still thrown.

## Examples

### Using continue in callbacks

If you want to proceed with the next iteration in a {{jsxref("Array/forEach", "forEach()")}} loop, use {{jsxref("Statements/return", "return")}} instead, or convert it to a {{jsxref("Statements/for...of", "for...of")}} loop.

```js example-bad
array.forEach((value) => {
  if (value === 5) {
    continue; // SyntaxError: continue must be inside loop
  }
  // do something with value
});
```

```js example-good
array.forEach((value) => {
  if (value === 5) {
    return;
  }
  // do something with value
});
```

```js example-good
for (const value of array) {
  if (value === 5) {
    continue;
  }
  // do something with value
}
```

## See also

- {{jsxref("Statements/continue", "continue")}}
