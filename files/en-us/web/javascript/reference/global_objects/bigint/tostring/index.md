---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
tags:
  - BigInt
  - JavaScript
  - Method
  - Prototype
  - toString()
browser-compat: javascript.builtins.BigInt.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
specified {{jsxref("BigInt")}} object. The trailing "n" is not part of the string.

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## Syntax

```js
toString()
toString(radix)
```

### Parameters

- `radix` {{optional_inline}}
  - : Optional. An integer in the range 2 through 36 specifying the base to use for
    representing numeric values.

### Return value

A string representing the specified {{jsxref("BigInt")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : If `toString()` is given a radix less than 2 or greater than 36, a
    {{jsxref("RangeError")}} is thrown.

## Description

The {{jsxref("BigInt")}} object overrides the `toString()` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For {{jsxref( "BigInt")}} objects, the
`toString()` method returns a string representation of the object in the
specified radix.

The `toString()` method parses its first argument, and attempts to return a
string representation in the specified radix (base). For radixes above 10, the letters
of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers
(base 16) `a` through `f` are used.

If the `radix` is not specified, the preferred radix is assumed to be 10.

If the `bigIntObj` is negative, the sign is preserved. This is the case even
if the radix is 2; the string returned is the positive binary representation of the
`bigIntObj` preceded by a `-` sign, **not** the two's
complement of the `bigIntObj`.

## Examples

### Using `toString`

```js
17n.toString();      // '17'
66n.toString(2);     // '1000010'
254n.toString(16);   // 'fe'
-10n.toString(2);    // -1010'
-0xffn.toString(2);  // '-11111111'
```

### Negative-zero `BigInt`

There is no negative-zero `BigInt` as there are no negative zeros in
integers. `-0.0` is an IEEE floating-point concept that only appears in the
JavaScript [`Number`](/en-US/docs/Web/JavaScript/Data_structures#number_type) type.

```js
(-0n).toString();      // '0'
BigInt(-0).toString(); // '0'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
