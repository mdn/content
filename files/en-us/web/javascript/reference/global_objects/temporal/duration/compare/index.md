---
title: Temporal.Duration.compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.Duration.compare
---

{{JSRef}}

The **`Temporal.Duration.compare()`** static method returns a number (-1, 0, 1) indicating whether the first duration is shorter, equal to, or longer than the second duration.

## Syntax

```js-nolint
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Parameters

- `duration1`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this duration. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal.Duration.from()")}}.
- `duration2`
  - : Same as `duration1`.
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `relativeTo` {{optional_inline}}
      - : A zoned or plain date(time) that provides the time and calendar information to resolve [calendar durations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (see the link for the general interpretation of this option). Required if either `duration1` or `duration2` is a calendar duration (unless they are equal component-wise, in which case `0` is returned without computations).

### Return value

Returns `-1` if `duration1` is shorter than `duration2`, `0` if they are equal, and `1` if `duration1` is longer. If a `relativeTo` is provided, the result is calculated by adding the durations to the starting point, and then comparing the resulting instants.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if either `duration1` or `duration2` is a [calendar duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (it has a non-zero `years`, `months`, or `weeks`), and `relativeTo` is not provided.
    - Either `duration1` or `duration2` is a calendar duration, and `relativeTo` is not provided.

## Description

TODO

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
