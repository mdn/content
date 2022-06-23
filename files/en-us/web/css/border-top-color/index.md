---
title: border-top-color
slug: Web/CSS/border-top-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-top-color
---
{{CSSRef}}

The **`border-top-color`** CSS property sets the color of an element's top [border](/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-top")}}.

{{EmbedInteractiveExample("pages/css/border-top-color.html")}}

## Syntax

```css
/* <color> values */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentcolor;
border-top-color: transparent;

/* Global values */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

The `border-top-color` property is specified as a single value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the top border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### A simple div with a border

#### HTML

```html
<div class="mybox">
  <p>This is a box with a border around it.
     Note which side of the box is
     <span class="redtext">red</span>.</p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The border-related CSS shorthand properties: {{cssxref("border")}}, {{cssxref("border-top")}}, and {{cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-left-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-top-style")}} and {{cssxref("border-top-width")}}.
