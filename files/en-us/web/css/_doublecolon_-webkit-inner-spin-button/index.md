---
title: "::-webkit-inner-spin-button"
slug: Web/CSS/::-webkit-inner-spin-button
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-inner-spin-button
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-inner-spin-button`** CSS pseudo-element is used to style the inner part of the spinner button of number picker input elements.

## Syntax

```css
::-webkit-inner-spin-button {
  /* ... */
}
```

## Examples

These examples work only in browsers based on WebKit and Blink.

### Changing the cursor in the spin controls

In this example, the CSS {{cssxref("cursor")}} is changed to `pointer` whenever the cursor is positioned over the inner part of the input's spin controls.

#### HTML

```html
<input type="number" />
```

#### CSS

```css
input[type="number"]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

#### Result

{{EmbedLiveSample("Changing_the_cursor_in_the_spin_controls", 200, 30)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::-webkit-outer-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Styling Form Controls – WebKit](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
