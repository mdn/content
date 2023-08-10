---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Number.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Number")}} values returns the value of this number.

{{EmbedInteractiveExample("pages/js/number-valueof.html")}}

## Syntax

```js-nolint
valueOf()
```

### Return value

A number representing the primitive value of the specified {{jsxref("Number")}} object.

## Description

This method is usually called internally by JavaScript and not explicitly in web code.

## Examples

### Using valueOf

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.valueOf()")}}
