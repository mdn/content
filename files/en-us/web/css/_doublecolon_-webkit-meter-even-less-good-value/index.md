---
title: ::-webkit-meter-even-less-good-value
slug: Web/CSS/::-webkit-meter-even-less-good-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-even-less-good-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-even-less-good-value`** styles the {{htmlelement("meter")}} element when the value and the optimum attributes fall outside the low-high range, but in opposite zones. To illustrate, it applies when _value_ < _low_ < _high_ < _optimum_ or _value_ > _high_ > _low_ > _optimum_.

Red is the default color.

## Syntax

```css
::-webkit-meter-even-less-good-value {
  /* ... */
}
```

## Examples

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="8" value="2">
  Score 2/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="8" value="2">
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

#styled::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #900 45%, #900 55%, #f77);
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
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
