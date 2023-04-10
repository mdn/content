---
title: "::-webkit-meter-even-less-good-value"
slug: Web/CSS/::-webkit-meter-even-less-good-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-even-less-good-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-even-less-good-value`** gives a red color to a {{htmlelement("meter")}} element when the value and the optimum attributes fall outside the low-high range, but in opposite zones. To illustrate, it applies when _value_ < _low_ < _high_ < _optimum_ or _value_ > _high_ > _low_ > _optimum_.

## Syntax

```css
::-webkit-meter-even-less-good-value {
  /* ... */
}
```

## Specifications

Not part of any standard.

## Examples

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### CSS

```css
meter::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #d44 45%, #d44 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}
```

### Result

{{ EmbedLiveSample('Examples', '100%', 50) }}

## Browser compatibility

{{Compat}}

## See also

The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
