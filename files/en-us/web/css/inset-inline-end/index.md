---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - NeedsContent
  - Reference
  - recipe:css-property
browser-compat: css.properties.inset-inline-end
---
{{CSSRef}}

The **`inset-inline-end`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, or {{cssxref("left")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/inset-inline-end.html")}}

## Syntax

```css
/* <length> values */
inset-inline-end: 3px;
inset-inline-end: 2.4em;

/* <percentage>s of the width or height of the containing block */
inset-inline-end: 10%;

/* Keyword value */
inset-inline-end: auto;

/* Global values */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: revert;
inset-inline-end: revert-layer;
inset-inline-end: unset;
```

The shorthand for {{cssxref("inset-inline-start")}} and `inset-inline-end` is {{cssxref("inset-inline")}}.

### Values

The `inset-inline-end` property takes the same values as the {{cssxref("left")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline end offset

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
  writing-mode: vertical-rl;
  position: relative;
  inset-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_end_offset", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The properties which defines other insets: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, and {{cssxref("inset-inline-start")}}
- The mapped physical properties: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
