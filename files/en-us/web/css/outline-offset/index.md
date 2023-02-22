---
title: outline-offset
slug: Web/CSS/outline-offset
page-type: css-property
browser-compat: css.properties.outline-offset
---

{{CSSRef}}

The **`outline-offset`** CSS property sets the amount of space between an [outline](/en-US/docs/Web/CSS/outline) and the edge or border of an element.

{{EmbedInteractiveExample("pages/css/outline-offset.html")}}

## Syntax

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Values

- `{{cssxref("&lt;length&gt;")}}`
  - : The width of the space between the element and its outline. A negative value places the outline inside the element. A value of `0` places the outline so that there is no space between it and the element.

## Description

An outline is a line that is drawn around an element, outside the border edge. The space between an element and its outline is transparent. In other words, it is the same as the parent element's background.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting outline offset in pixels

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Result

{{EmbedLiveSample('Setting_outline_offset_in_pixels')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
