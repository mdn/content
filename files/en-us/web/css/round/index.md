---
title: round()
slug: Web/CSS/round
page-type: css-function
status:
  - experimental
browser-compat: css.types.round
---

{{CSSRef}}{{SeeCompatTable}}

The **`round()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a rounded number based on a selected rounding strategy.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101, 10);
width: round(down, 106, 10);
margin: round(to-zero, -105, 10);
```

### Parameter

The `round(<rounding-strategy>, valueToRound, roundingInterval)` function specifies an optional rounding strategy, a value (or mathematical expression) to be rounded and a rounding interval (or mathematical expression).
The `valueToRound` is rounded according to the rounding strategy, to the nearest integer multiple of `roundingInterval`.

- `<rounding-strategy>`

  - : The rounding strategy.
    This may be one of the following values:

    - `up`
      - : Round `valueToRound` up to the nearest integer multiple of `roundingInterval` (if the value is negative, it will become "more positive"). This is equivalent to the JavaScript [`Math.ceil()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) method.
    - `down`
      - : Round `valueToRound` down to the nearest integer multiple of `roundingInterval` (if the value is negative, it will become "more negative"). This is equivalent to the JavaScript [`Math.floor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) method.
    - `nearest` (default)
      - : Round `valueToRound` to the nearest integer multiple of `roundingInterval`, which may be either above or below the value.
        If the `valueToRound` is half way between the rounding targets above and below (neither is "nearest"), it will be rounded up.
        Equivalent to JavaScript [`Math.round()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Round `valueToRound` to the nearest integer multiple of `roundingInterval` closer to/towards zero (a positive number will decrease, while a negative value will become "less negative"). This is equivalent to the JavaScript [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) method.

- `valueToRound`

  - : The value to be rounded.
    This must be a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, or a mathematical expression that resolves to one of those values.

- `roundingInterval`
  - : The rounding interval.
    This is a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, or a mathematical expression that resolves to one of those values.

### Return value

The value of `valueToRound`, rounded to the nearest lower or higher integer multiple of `roundingInterval`, depending on the `rounding strategy`.

- If `roundingInterval` is 0, the result is `NaN`.
- If `valueToRound` and `roundingInterval` are both `infinite`, the result is `NaN`.
- If `valueToRound` is infinite but `roundingInterval` is finite, the result is the same `infinity`.
- If `valueToRound` is finite but `roundingInterval` is infinite, the result depends on the rounding strategy and the sign of `A`:

  - `up` - If `valueToRound` is positive (not zero), return `+∞`. If `valueToRound` is `0⁺`, return `0⁺`. Otherwise, return `0⁻`.
  - `down` - If `valueToRound` is negative (not zero), return `−∞`. If `valueToRound` is `0⁻`, return `0⁻`. Otherwise, return `0⁺`.
  - `nearest`, `to-zero` - If `valueToRound` is positive or `0⁺`, return `0⁺`. Otherwise, return `0⁻`.

- The argument calculations can resolve to {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, but must have the same type, or else the function is invalid; the result will have the same type as the arguments.
- If `valueToRound` is exactly equal to an integer multiple of `roundingInterval`, `round()` resolves to `valueToRound` exactly (preserving whether `valueToRound` is `0⁻` or `0⁺`, if relevant). Otherwise, there are two integer multiples of `roundingInterval` that are potentially "closest" to `valueToRound`, lower `roundingInterval` which is closer to `−∞` and upper `roundingInterval` which is closer to `+∞`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
