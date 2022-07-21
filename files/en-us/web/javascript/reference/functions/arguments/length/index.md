---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
tags:
  - Functions
  - JavaScript
  - Property
  - arguments
browser-compat: javascript.functions.arguments.length
---
{{jsSidebar("Functions")}}

The **`arguments.length`** property contains the number of arguments passed to the function.

## Description

The arguments.length property provides the number of arguments actually passed to a function. This can be more or less than the defined parameter's count (see {{jsxref("Function.length")}}).

## Examples

### Using `arguments.length`

In this example we define a function that can add two or more numbers together.

```js
function adder(base /*, num1, …, numN */) {
  base = Number(base);
  for (let i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

> **Note:** Note the difference between {{jsxref("Function.length")}} and arguments.length

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
