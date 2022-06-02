---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
tags:
  - Functions
  - JavaScript
  - Method
  - Reference
  - inFinite
browser-compat: javascript.builtins.isFinite
---
{{jsSidebar("Objects")}}

The global **`isFinite()`** function determines whether the
passed value is a finite number. If needed, the parameter is first converted to a
number.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntax

```js
isFinite(testValue)
```

### Parameters

- `testValue`
  - : The value to be tested for finiteness.

### Return value

**`false`** if the argument is (or will be coerced to) positive
or negative {{jsxref("Infinity")}} or {{jsxref("NaN")}} or {{jsxref("undefined")}};
otherwise, **`true`**.

## Description

`isFinite` is a function property of the global object.

You can use this function to determine whether a number is a finite number. The
`isFinite` function examines the number in its argument. If the argument is
`NaN`, positive infinity, or negative infinity, this method returns
`false`; otherwise, it returns `true`.

## Examples

### Using isFinite

```js
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(910);       // true

isFinite(null);      // true, would've been false with the
                     // more robust Number.isFinite(null)

isFinite('0');       // true, would've been false with the
                     // more robust Number.isFinite("0")
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
