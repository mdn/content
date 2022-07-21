---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
tags:
  - JavaScript
  - Lowest Number
  - Lowest Value
  - Math
  - Method
  - Minimum
  - Reference
  - Smallest
  - Smallest Number
  - Smallest Value
  - min
browser-compat: javascript.builtins.Math.min
---
{{JSRef}}

The static function **`Math.min()`**
returns the lowest-valued number passed into it, or {{jsxref("NaN")}} if any parameter
isn't a number and can't be converted into one.

{{EmbedInteractiveExample("pages/js/math-min.html")}}

## Syntax

```js
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, /* … ,*/ valueN)
```

### Parameters

- `value1`, …, `valueN`
  - : Zero or more numbers among which the lowest value will be selected and returned.

### Return value

The smallest of the given numbers. If any one or more of the parameters cannot be
converted into a number, {{jsxref("NaN")}} is returned. The result is
{{jsxref("Infinity")}} if no parameters are provided.

## Description

Because `min()` is a static method of `Math`, you always use it
as `Math.min()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

If no arguments are given, the result is {{jsxref("Infinity")}}.

If at least one of arguments cannot be converted to a number, the result is
{{jsxref("NaN")}}.

## Examples

### Using Math.min()

This finds the min of `x` and `y` and assigns it to
`z`:

```js
const x = 10, y = -20;
const z = Math.min(x, y);
```

### Clipping a value with Math.min()

`Math.min()` is often used to clip a value so that it is always less than or
equal to a boundary. For instance, this

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

may be written as this

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} can be used in a similar way to clip a value at the other end.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.max()")}}
