---
title: "::-webkit-meter-suboptimum-value"
slug: Web/CSS/::-webkit-meter-suboptimum-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-suboptimum-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-suboptimum-value`** [pseudo-element](/en-US/docs/Glossary/Pseudo-element) gives a yellow color to the {{htmlelement("meter")}} element when the value attribute falls outside of the low-high range.

## Syntax

```css
::-webkit-meter-suboptimum-value {
  /* ... */
}
```

## Examples

This example will only work in browsers based on WebKit or Blink.

### HTML

```html
<meter min="0" max="10" low="3" high="7" value="2">Score out of 10</meter>
```

### CSS

```css
meter::-webkit-meter-suboptimum-value {
  background: pink;
  height: 100%;
  box-sizing: border-box;
}
```

### Result

{{ EmbedLiveSample('Examples', '100%', 50) }}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
