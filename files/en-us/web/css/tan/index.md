---
title: tan()
slug: Web/CSS/tan
tags:
  - CSS
  - CSS Function
  - Function
  - Math
  - Reference
  - Web
  - tan
browser-compat: css.types.tan
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---
{{CSSRef}}

The **`tan()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the tangent of a number, which is a value between `−∞` and `∞`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. 

## Syntax

```css
width: calc( tan(45deg) * 1px );
```

### Argument

The `tan(A)` function accepts only one expression as its argument.

- `A`
  - : The argument specified as a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. If `A` is `infinite`, the result is `NaN`. if `A` is one of the asymptote values (such as `90deg`, `270deg`, etc), the result must be `+∞` for `90deg` and all values a multiple of `360deg` from that (such as `-270deg` or `450deg`), and `−∞` for `-90deg` and all values a multiple of `360deg` from that (such as `-450deg` or `270deg`).

### Formal syntax

{{CSSSyntax}}

## Examples

### Drawing Parallelogram

```css
.parallelogram {
  --w: 400;
  --h: 200;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));;
}
.parallelogram::before {
  --angle: calc( sin( var(--h) / var(--w) ) );
  content: '';
  position: absolute;
  width: calc( 100% - 100% * var(--h) / var(--w) * tan( var(--angle) ) );
  height: 100%;
  transform-origin: 0 100%;
  transform: skew( calc( 0 - var(--angle) ) );
  background-color: red;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
