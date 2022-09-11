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
  - Experimental
browser-compat: css.types.tan
spec-urls: https://drafts.csswg.org/css-values/#trig-funcs
---

{{CSSRef}}{{SeeCompatTable}}

The **`tan()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the tangent of a number, which is a value between `−infinity` and `infinity`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians.

## Syntax

```css
/* Single <angle> values */
width: calc(tan(45deg) * 100px);
width: calc(tan(0.125turn) * 100px);
width: calc(tan(0.785398163rad) * 100px);

/* Single <number> values */
width: calc(tan(0.5773502) * 100px);
width: calc(tan(1.732 – 1) * 100px);

/* Other values */
width: calc(tan(pi / 3) * 100px);
width: calc(tan(e) * 100px);
```

### Parameter

The `tan(angle)` function accepts only one value as its parameter.

- `angle`
  - : A {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("&lt;angle&gt;")}}. When specifying `infinity`, `-infinity`, or `NaN`, the result is `NaN`. When specifying one of the asymptote values (such as `90deg`, `270deg`, etc), the result must be `infinity` for `90deg` and all values a multiple of `360deg` from that (such as `-270deg` or `450deg`), and `−infinity` for `-90deg` and all values a multiple of `360deg` from that (such as `-450deg` or `270deg`).

### Formal syntax

{{CSSSyntax}}

## Example

The `tan()` function can be used draw a parallelogram.

```html hidden
<div class="parallelogram"></div>
```

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
.parallelogram {
  --w: 400;
  --h: 200;
  position: relative;
  width: calc(1px * var(--w));
  height: calc(1px * var(--h));
}
.parallelogram::before {
  --angle: calc(sin(var(--h) / var(--w)));
  content: "";
  position: absolute;
  width: calc(100% - 100% * var(--h) / var(--w) * tan(var(--angle)));
  height: 100%;
  transform-origin: 0 100%;
  transform: skew(calc(0 - var(--angle)));
  background-color: red;
}
```

{{EmbedLiveSample('example', '100%', '250px')}}

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
