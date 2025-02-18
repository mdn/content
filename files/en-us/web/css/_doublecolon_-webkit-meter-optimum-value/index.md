---
title: ::-webkit-meter-optimum-value
slug: Web/CSS/::-webkit-meter-optimum-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-optimum-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-optimum-value`** CSS [pseudo-element](/en-US/docs/Glossary/Pseudo-element) styles the {{htmlelement("meter")}} element when its value is inside the low-high range, or when the value is equivalent to the optimum value.

Green is the default color.

## Syntax

```css
::-webkit-meter-optimum-value {
  /* ... */
}
```

## Examples

This example will only work in browsers based on WebKit or Blink.

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
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

#styled::-webkit-meter-optimum-value {
  background: linear-gradient(to bottom, #7f7, #090 45%, #090 55%, #7f7);
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
- {{cssxref("::-webkit-meter-suboptimum-value")}}
