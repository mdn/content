---
title: "::-webkit-meter-bar"
slug: Web/CSS/::-webkit-meter-bar
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-meter-bar
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-meter-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Glossary/Pseudo-element) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) that represents the meter bar in a {{HTMLElement("meter")}} element. It is used for selecting and applying styles to the container meter gauge.

## Syntax

```css
::-webkit-meter-bar {
  /* ... */
}
```

## Specifications

Not part of any standard.

## Examples

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

#styled::-webkit-meter-bar {
  background: #eee;
  box-shadow: 0 2px 3px rgb(0 0 0 / 20%) inset;
  border-radius: 3px;
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

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
