---
title: async function* statement
slug: Web/JavaScript/Reference/Statements/async_function*
tags:
   - Function
   - Iterator
   - JavaScript
   - Language feature
   - Statement
browser-compat: javascript.statements.async_generator_function 
---
{{jsSidebar("Statements")}}

The **`async function*`** declaration defines an _async generator function_, which returns an {{jsxref("Global_Objects/AsyncGenerator","AsyncGenerator")}} object.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Syntax

```js
async function* name([param[, param[, ..., param]]]) {
  statements
}
```

> **Note:** Async generators do not have arrow function counterparts.

### Parameters

- `name`
  - : The function name.
- `param` {{optional_inline}}
  - : The name of an argument to be passed to the function. A function can have up to 255 arguments.
- `statements`
  - : The statements which comprise the body of the function.

## Description

TODO

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Operators/async_function*", "async function*")}} expression
- {{jsxref("AsyncGeneratorFunction")}} object
- [The Iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} object
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Functions", "Functions", "", 1)}}
