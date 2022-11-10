---
title: round()
slug: Web/CSS/round
page-type: css-function
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - round
  - Experimental
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

The `round(<rounding-strategy>?, A, B)` function contains an optional rounding strategy, and two calculations `A` and `B` as its parameter.

- `<rounding-strategy>`

  - : The rounding strategy.
     This may be one of the following values:

     - `up`
       - : Choose upper `B`. Equivalent to JS `Math.ceil()`.
     - `down`
       - : Choose lower `B`. Equivalent to JS `Math.floor()`.
     - `nearest`
       - : (default) Rounding to the nearest integer. Equivalent to JS `Math.round()`.
     - `to-zero`
       - : Choose whichever of lower `B` and upper `B` that has the smallest absolute difference from `0`. Equivalent to JS `Math.trunc()`.

- `A`
  - : A calculations that resolves to {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}.

- `B`
  - : A calculations that resolves to {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}.

### Return value

The value of `A`, rounded according to the rounding strategy, to the nearest integer multiple of `B` either above or below `A`.

- If `B` is 0, the result is `NaN`.
- If `A` and `B` are both `infinite`, the result is `NaN`.
- If `A` is infinite but `B` is finite, the result is the same `infinity`.
- If `A` is finite but `B` is infinite, the result depends on the rounding strategy and the sign of `A`:

  - `up` - If `A` is positive (not zero), return `+∞`. If `A` is `0⁺`, return `0⁺`. Otherwise, return `0⁻`.
  - `down` - If `A` is negative (not zero), return `−∞`. If `A` is `0⁻`, return `0⁻`. Otherwise, return `0⁺`.
  - `nearest`, `to-zero` - If `A` is positive or `0⁺`, return `0⁺`. Otherwise, return `0⁻`.
- The argument calculations can resolve to {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, but must have the same type, or else the function is invalid; the result will have the same type as the arguments.
- If `A` is exactly equal to an integer multiple of `B`, `round()` resolves to `A` exactly (preserving whether `A` is `0⁻` or `0⁺`, if relevant). Otherwise, there are two integer multiples of `B` that are potentially "closest" to `A`, lower `B` which is closer to `−∞` and upper `B` which is closer to `+∞`.

### Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
