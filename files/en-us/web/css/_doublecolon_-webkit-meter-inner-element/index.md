---
title: "::-webkit-meter-inner-element"
slug: Web/CSS/::-webkit-meter-inner-element
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-inner-element
---

{{CSSRef}}{{Non-standard_header}}

**`::-webkit-meter-inner-element`** is a proprietary WebKit CSS pseudo-element for selecting and applying styles to the outer containing element of a {{htmlelement("meter")}} element. Additional markup to render the meter element as read-only.

## Syntax

```css
::-webkit-meter-inner-element {
  /* ... */
}
```

## Specifications

Not part of any standard.

## Examples

This will only work in WebKit and Blink-based browsers, such as Safari, Chrome, and Chromium-based versions of Edge.

### HTML

```html
<meter min="0" max="10" value="6">Score out of 10</meter>
```

### CSS

```css
meter {
  /* Reset the default appearance for -webkit- only */
  -webkit-appearance: none;
}

meter::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px solid #aaa;
}
```

### Result

{{ EmbedLiveSample('Examples') }}

## Browser compatibility

{{Compat}}

## See also

The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
