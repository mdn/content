---
title: "SyntaxError: functions cannot be labelled"
slug: Web/JavaScript/Reference/Errors/Function_label
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "functions cannot be labelled" occurs when a {{jsxref("Statements/function", "function")}} declaration has a [label](/en-US/docs/Web/JavaScript/Reference/Statements/label) before it.

## Message

```plain
SyntaxError: In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement. (V8-based)
SyntaxError: In strict mode code, functions can only be declared at top level or inside a block. (V8-based)
SyntaxError: Generators can only be declared at the top level or inside a block. (V8-based)
SyntaxError: Async functions can only be declared at the top level or inside a block. (V8-based)

SyntaxError: functions can only be labelled inside blocks (Firefox)
SyntaxError: functions cannot be labelled (Firefox)
SyntaxError: generator functions cannot be labelled (Firefox)
SyntaxError: async function declarations can't appear in single-statement context (Firefox)

SyntaxError: Unexpected keyword 'function'. Function declarations are only allowed inside block statements or at the top level of a program. (Safari)
SyntaxError: Function declarations are only allowed inside blocks or switch statements in strict mode. (Safari)
SyntaxError: Unexpected token '*'. Cannot use generator function declaration in single-statement context. (Safari)
SyntaxError: Unexpected keyword 'function'. Cannot use async function declaration in single-statement context. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

Function declarations are never supposed to be labeled, because labels should only apply to statements, not declarations. There's no way to actually jump to this label. However, due to some legacy JavaScript syntax rules, the error condition is a bit more complicated than necessary:

- In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), function declarations are never allowed to be labeled.
- In non-strict mode, function declarations are allowed to be labeled, but not when the function is the sole statement of an `if` statement (which itself is a deprecated feature).
- Async functions, generator functions, and async generator functions are never allowed to be labeled.

The error message may say something along the lines of "invalid place for a function declaration to appear", because when the parser sees a label, it expects a statement to follow, and a function declaration is not a statement. It depends on whether the error's perspective is that a label cannot be followed by a function, or that a function cannot be preceded by a label.

## Examples

### Misparsed object literal

While it's possible that you actually expect the label to do _something_ along the lines of being a jump target, usually you didn't intend for it to be a label. The most common case is you actually want it to be a property key in an object literal:

```js-nolint example-bad
const createObj = () => {
  greet: function greet() { // SyntaxError: functions cannot be labelled
    console.log("Hello");
  }
};
```

Here, `{...}` is actually not an object literal, but is instead the block body of the [arrow function](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), so `greet:` becomes a label. To fix this, you need to wrap the object literal in parentheses:

```js-nolint example-good
const createObj = () => ({
  greet: function greet() {
    console.log("Hello");
  },
});
```

You may also want to use the [method syntax](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for object literals, which avoids this pitfall:

```js example-good
const createObj = () => ({
  greet() {
    console.log("Hello");
  },
});
```

## See also

- [Labeled statement](/en-US/docs/Web/JavaScript/Reference/Statements/label)
- {{jsxref("Statements/function", "function")}}
- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [Deprecated and obsolete features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
