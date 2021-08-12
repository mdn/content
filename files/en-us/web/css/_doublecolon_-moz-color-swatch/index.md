---
title: '::-moz-color-swatch'
slug: Web/CSS/::-moz-color-swatch
tags:
  - CSS
  - CSS:Mozilla Extensions
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-moz-color-swatch
---
{{CSSRef}}{{Non-standard_header}}

The **`::-moz-color-swatch`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents the color selected in an {{HTMLElement("input")}} of `type="color"`.

> **Note:** Using `::-moz-color-swatch` with anything but an `<input type="color">` doesn't match anything and has no effect.

## Syntax

{{csssyntax}}

## Examples

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type=color]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 50)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- Similar pseudo-elements used by other browsers:

  - {{cssxref("::-webkit-color-swatch")}}, pseudo-element supported by WebKit and Blink (Safari, Chrome, and Opera)
