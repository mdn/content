---
title: "SyntaxError: getter functions must have no arguments"
slug: Web/JavaScript/Reference/Errors/Getter_no_arguments
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "getter functions must have no arguments" occurs when a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) is declared and the parameter list is non-empty.

## Message

```plain
SyntaxError: Getter must not have any formal parameters. (V8-based)
SyntaxError: getter functions must have no arguments (Firefox)
SyntaxError: Unexpected identifier 'x'. getter functions must have no parameters. (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get) property syntax looks like a function, but it is stricter and not all function syntax is allowed. A getter is always invoked with no arguments, so defining it with any parameter is likely an error.

Note that this error only applies to property getters using the `get` syntax. If you define the getter using {{jsxref("Object.defineProperty()")}}, etc., the getter is defined as a normal function, although it's likely still an error if the getter expects any arguments, as it will be called without any.

## Examples

### Invalid cases

```js-nolint example-bad
const obj = {
  get value(type) {
    return type === "string" ? String(Math.random()) : Math.random();
  },
};
```

### Valid cases

```js example-good
// Remove the parameter
const obj = {
  get value() {
    return Math.random();
  },
};

// Use a normal method, if you need a parameter
const obj = {
  getValue(type) {
    return type === "string" ? String(Math.random()) : Math.random();
  },
};
```

## See also

- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get)
