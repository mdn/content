---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("String")}} values returns this string value.

{{InteractiveExample("JavaScript Demo: String.valueOf()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A string representing the primitive value of a given {{jsxref("String")}} object.

## Description

The `valueOf()` method of {{jsxref("String")}} returns the primitive value
of a {{jsxref("String")}} object as a string data type. This value is equivalent to
{{jsxref("String.prototype.toString()")}}.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using `valueOf()`

```js
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
