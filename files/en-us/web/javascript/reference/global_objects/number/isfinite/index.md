---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
tags:
  - JavaScript
  - Method
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number.isFinite
---
{{JSRef}}

The **`Number.isFinite()`** method
determines whether the passed value is a finite number — that is, it checks that the
type of a given value is {{jsxref("Number")}}, and the number is neither positive
{{jsxref("Infinity")}}, negative `Infinity`, nor {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## Syntax

```js
Number.isFinite(value)
```

### Parameters

- `value`
  - : The value to be tested for finiteness.

### Return value

The boolean value `true` if the given value is a finite number. Otherwise `false`.

## Description

In comparison to the global {{jsxref("isFinite", "isFinite()")}} function, this method
doesn't first convert the parameter to a number. This means only values of the type
number _and_ are finite return `true`.

## Examples

### Using isFinite

```js
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e64);      // true

Number.isFinite('0');       // false, would've been true with
                            // global isFinite('0')
Number.isFinite(null);      // false, would've been true with
                            // global isFinite(null)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.isFinite` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- The {{jsxref("Number")}} object it belongs to
- The global function {{jsxref("isFinite")}}
