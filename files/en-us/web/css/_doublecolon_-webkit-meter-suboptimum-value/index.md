---
title: ::-webkit-meter-suboptimum-value
slug: Web/CSS/::-webkit-meter-suboptimum-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-suboptimum-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-suboptimum-value`** [pseudo-element](/en-US/docs/Glossary/Pseudo-element) styles the {{htmlelement("meter")}} element when the value attribute falls outside of the low-high range and is not equivalent to the optimum value.

Yellow is the default color.

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
Normal:
<meter min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
```

### CSS

```css
body {
  font-family: monospace;
}

.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-suboptimum-value {
  background: linear-gradient(to bottom, #ff7, #990 45%, #990 55%, #ff7);
  height: 100%;
  box-sizing: border-box;
}
```

### JavaScript

```js
// Safari requires <meter> elements to have an `appearance` of `none` for custom styling
// using `::-webkit-meter-*` selectors, but `appearance: none` breaks rendering on Chrome.
// Therefore, we must check if the browser is Safari-based.

const is_safari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (is_safari) {
  document.body.classList.add("safari");
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
