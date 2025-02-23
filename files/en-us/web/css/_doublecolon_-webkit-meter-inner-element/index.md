---
title: ::-webkit-meter-inner-element
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

## Examples

This will only work in WebKit and Blink-based browsers, such as Safari, Chrome, and Chromium-based versions of Edge.

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: <meter id="styled" min="0" max="10" value="6">Score 6/10</meter>
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

#styled::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px dashed #aaa;
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

{{ EmbedLiveSample('Examples') }}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
