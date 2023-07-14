---
title: "::-moz-focus-inner"
slug: Web/CSS/::-moz-focus-inner
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-moz-focus-inner
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-focus-inner`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents an inner focus ring of the {{HTMLElement("button")}} element as well as the {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}}, and {{HTMLElement("input/color","color")}} types of the {{HTMLElement("input")}} element.

> **Note:** Using `::-moz-focus-inner` with anything than the buttons that support it doesn't match anything and has no effect.

## Syntax

```css
::-moz-focus-inner {
  /* ... */
}
```

## Example

### HTML

```html
<input type="submit" value="Input" /> <button type="submit">Button</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
  padding-block-start: 0px;
  padding-inline-end: 2px;
  padding-block-end: 0px;
  padding-inline-start: 2px;
  border: 2px dotted red;
}
```

### Result

{{EmbedLiveSample("Example", 300, 50)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- Related CSS properties:

  - [`-moz-user-focus`](/en-US/docs/Web/CSS/-moz-user-focus)

- Related CSS selectors:

  - [`:-moz-focusring`](/en-US/docs/Web/CSS/:-moz-focusring)
  - [`:focus`](/en-US/docs/Web/CSS/:focus)
  - [`:focus-visible`](/en-US/docs/Web/CSS/:focus-visible)
  - [`:focus-within`](/en-US/docs/Web/CSS/:focus-within)
