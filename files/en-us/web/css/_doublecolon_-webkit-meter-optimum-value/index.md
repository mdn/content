---
title: "::-webkit-meter-optimum-value"
slug: Web/CSS/::-webkit-meter-optimum-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-optimum-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-optimum-value`** CSS [pseudo-element](/en-US/docs/Glossary/Pseudo-element) styles the {{htmlelement("meter")}} element when its value is inside the low-high range.

Green is the default color.

## Syntax

```css
::-webkit-meter-optimum-value {
  /* ... */
}
```

## Specifications

Not part of any standard.

## Examples

This example will only work in browsers based on WebKit or Blink.

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### CSS

```css
meter::-webkit-meter-bar {
  /* Required to get rid of the default background property */
  background: none;
  background-color: whiteSmoke;
  box-shadow: 0 5px 5px -5px #333 inset;
}

meter::-webkit-meter-optimum-value {
  box-shadow: 0 5px 5px -5px #999 inset;
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
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
