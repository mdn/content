---
title: border-inline-start-style
slug: Web/CSS/border-inline-start-style
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Reference
  - border-inline
  - border-inline-start
  - border-inline-start-style
  - border-inline-style
  - recipe:css-property
browser-compat: css.properties.border-inline-start-style
---
{{CSSRef}}

The **`border-inline-start-style`** [CSS](/en-US/docs/Web/CSS) property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}} property depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-start-style.html")}}

## Syntax

```css
/* <'border-style'> values */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;

/* Global values */
border-inline-start-style: inherit;
border-inline-start-style: initial;
border-inline-start-style: revert;
border-inline-start-style: revert-layer;
border-inline-start-style: unset;
```

Related properties are {{cssxref("border-block-start-style")}}, {{cssxref("border-block-end-style")}}, and {{cssxref("border-inline-end-style")}}, which define the other border styles of the element.

{{cssinfo}}

### Values

- `<'border-style'>`
  - : The line style of the border. See {{ cssxref("border-style") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-inline-start-style: dashed;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
