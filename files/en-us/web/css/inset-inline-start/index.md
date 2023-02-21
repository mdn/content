---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
page-type: css-property
browser-compat: css.properties.inset-inline-start
---

{{CSSRef}}

The **`inset-inline-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, or {{cssxref("left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/inset-inline-start.html")}}

## Syntax

```css
/* <length> values */
inset-inline-start: 3px;
inset-inline-start: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-inline-start: 10%;

/* Keyword value */
inset-inline-start: auto;

/* Global values */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: revert;
inset-inline-start: revert-layer;
inset-inline-start: unset;
```

The shorthand for `inset-inline-start` and {{cssxref("inset-inline-end")}} is {{cssxref("inset-inline")}}.

### Values

The `inset-inline-start` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline start offset

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_start_offset", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The properties which defines other insets: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, and {{cssxref("inset-inline-end")}}
- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
