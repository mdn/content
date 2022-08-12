---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
tags:
  - JavaScript
  - Property
  - Reference
browser-compat: javascript.builtins.Infinity
---
{{jsSidebar("Objects")}}

The global property **`Infinity`** is a numeric value representing infinity.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Description

`Infinity` is a property of the _global object_. In other words, it is a variable in global scope.

The initial value of `Infinity` is {{jsxref("Number.POSITIVE_INFINITY")}}. The value `Infinity` (positive infinity) is greater than any other number.

This value behaves slightly differently than mathematical infinity; see {{jsxref("Number.POSITIVE_INFINITY")}} for details.

## Examples

### Using Infinity

```js
console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */
console.log(1 / 0             ); /* Infinity */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
