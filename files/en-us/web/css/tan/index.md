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

The **`tan()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is a trigonometric function that returns the tangent of a number, which is a value between `−∞` and `∞`. The function contains a single calculation that must resolve to either a `<number>` or an `<angle>` by interpreting the result of the argument as radians. That is, `tan(0deg)` will return `0`, `tan(45deg)` will return `0.9999999999999999` and `tan(90deg)` will return `16331239353195370`.

## Syntax

```css
width: calc( tan(45deg) * 1px );
```

The `tan()` function takes only one expression as its argument.

### Formal syntax

{{CSSSyntax}}

## Examples

TBD

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
