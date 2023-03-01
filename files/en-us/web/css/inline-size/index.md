---
title: inline-size
slug: Web/CSS/inline-size
page-type: css-property
browser-compat: css.properties.inline-size
---

{{CSSRef}}

The **`inline-size`** [CSS](/en-US/docs/Web/CSS) property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the {{cssxref("width")}} or the {{cssxref("height")}} property, depending on the value of {{cssxref("writing-mode")}}.

If the writing mode is vertically oriented, the value of `inline-size` relates to the height of the element; otherwise, it relates to the width of the element. A related property is {{cssxref("block-size")}}, which defines the other dimension of the element.

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

## Syntax

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;

/* <percentage> values */
inline-size: 75%;

/* Keyword values */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: revert-layer;
inline-size: unset;
```

### Values

The `inline-size` property takes the same values as the {{cssxref("width")}} and {{cssxref("height")}} properties.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline size in pixels

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_size_in_pixels")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The mapped physical properties: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
