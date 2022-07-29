---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
  - Polyfill
browser-compat: javascript.builtins.Number.EPSILON
---
{{JSRef}}

The **`Number.EPSILON`** property represents the difference between 1 and the smallest floating point number greater than 1.

You do not have to create a {{jsxref("Number")}} object to access this static property (use `Number.EPSILON`).

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The `EPSILON` property has a value of approximately `2.2204460492503130808472633361816E-16`, or 2<sup>-52</sup>.

## Examples

### Testing equality

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- The {{jsxref("Number")}} object it belongs to
