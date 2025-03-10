---
title: ::-webkit-meter-bar
slug: Web/CSS/::-webkit-meter-bar
page-type: css-pseudo-element
status:
  - deprecated
  - non-standard
browser-compat: css.selectors.-webkit-meter-bar
---

{{CSSRef}}{{Non-standard_header}}{{deprecated_header}}

The **`::-webkit-meter-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Glossary/Pseudo-element) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) that represents the background of a {{HTMLElement("meter")}} element. It is used for selecting and applying styles to the container of a meter gauge.

## Syntax

```css
::-webkit-meter-bar {
  /* ... */
}
```

## Examples

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: &nbsp;&nbsp;<meter id="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css hidden
meter {
  height: 30px;
  width: 200px;
  vertical-align: -0.8rem;
}
```

```css
.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-bar {
  background: lime;
  box-shadow: 0 10px 20px grey inset;
  border-radius: 10px;
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

- The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement("meter")}} element are as follows:

  - {{cssxref("::-webkit-meter-inner-element")}}
  - {{cssxref("::-webkit-meter-even-less-good-value")}}
  - {{cssxref("::-webkit-meter-optimum-value")}}
  - {{cssxref("::-webkit-meter-suboptimum-value")}}

- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
