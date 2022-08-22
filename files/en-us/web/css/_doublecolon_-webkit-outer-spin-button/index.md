---
title: '::-webkit-outer-spin-button'
slug: Web/CSS/::-webkit-outer-spin-button
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-webkit-outer-spin-button
---
{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-outer-spin-button`** CSS pseudo-element is used to style the outer part of the spinner button of number picker {{htmlelement("input")}} elements.

## Syntax

```css
::-webkit-outer-spin-button
```

## Examples

> **Note:** These examples only works on browsers based on WebKit or Blink.

### Hiding the spinner

This example uses `input::-webkit-outer-spin-button` to find {{HTMLElement("input")}} elements' spinner widgets and set their `-webkit-appearance` to `none`, thus hiding them.

#### HTML

```html
<input type="number">
```

#### CSS

```css
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
```

#### Result

{{EmbedLiveSample("Hiding_the_spinner", 200, 30)}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::-webkit-inner-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Styling Form Controls – WebKit](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
