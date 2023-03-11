---
title: "Function: length"
slug: Web/JavaScript/Reference/Global_Objects/Function/length
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Function.length
---

{{JSRef}}

The **`length`** data property of a {{jsxref("Function")}} instance indicates the number of parameters expected by the function.

{{EmbedInteractiveExample("pages/js/function-length.html")}}

## Value

A number.

{{js_property_attributes(0, 0, 1)}}

## Description

A {{jsxref("Function")}} object's `length` property indicates how many arguments the function expects, i.e. the number of formal parameters. This number excludes the {{jsxref("Functions/rest_parameters", "rest parameter", "", 1)}} and only includes parameters before the first one with a default value. By contrast, {{jsxref("Functions/arguments/length", "arguments.length")}} is local to a function and provides the number of arguments actually passed to the function.

The {{jsxref("Function")}} constructor is itself a `Function` object. Its `length` data property has a value of `1`.

Due to historical reasons, `Function.prototype` is a callable itself. The `length` property of `Function.prototype` has a value of `0`.

## Examples

### Using function length

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, rest parameter is not counted

console.log(((a, b = 1, c) => {}).length);
// 1, only parameters before the first one with
// a default value are counted
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Function")}}
