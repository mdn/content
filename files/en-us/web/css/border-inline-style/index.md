---
title: border-inline-style
slug: Web/CSS/border-inline-style
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-inline-style
---
{{CSSRef}}

The **`border-inline-style`** [CSS](/en-US/docs/Web/CSS) property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref("border-top-style")}} and {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}} and {{cssxref("border-right-style")}} properties depending on the values defined for {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-style.html")}}

The border style in the other dimension can be set with {{cssxref("border-block-style")}}, which sets {{cssxref("border-block-start-style")}}, and {{cssxref("border-block-end-style")}}.

## Syntax

```css
/* <'border-style'> values */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: revert;
border-inline-style: groove;
```

### Values

- `<'border-style'>`
  - : The line style of the border. See {{ cssxref("border-style") }}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML Content

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS Content

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 5px solid blue;
  border-inline-style: dashed;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property maps to one of the physical border properties: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, or {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
