---
title: ::-moz-focus-inner
slug: Web/CSS/Reference/Selectors/::-moz-focus-inner
page-type: css-pseudo-element
status:
  - deprecated
  - non-standard
browser-compat: css.selectors.-moz-focus-inner
sidebar: cssref
---

{{non-standard_header}}{{deprecated_header}}

The **`::-moz-focus-inner`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Reference/Mozilla_extensions) that represents an inner focus ring of the {{HTMLElement("button")}} element as well as the {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}}, and {{HTMLElement("input/color","color")}} types of the {{HTMLElement("input")}} element.

> [!NOTE]
> Using `::-moz-focus-inner` with anything than the buttons that support it doesn't match anything and has no effect.

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

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Reference/Mozilla_extensions)
- Related CSS properties:
  - {{cssxref("-moz-user-focus")}}

- Related CSS selectors:
  - [`:focus`](/en-US/docs/Web/CSS/Reference/Selectors/:focus)
  - [`:focus-visible`](/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible)
  - [`:focus-within`](/en-US/docs/Web/CSS/Reference/Selectors/:focus-within)
