---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-bottom-color
---
{{CSSRef}}

The **`border-bottom-color`** CSS property sets the color of an element's bottom [border](/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-bottom")}}.

{{EmbedInteractiveExample("pages/css/border-bottom-color.html")}}

## Syntax

```css
/* <color> values */
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255, 0, 0);
border-bottom-color: hsla(100%, 50%, 25%, 0.75);
border-bottom-color: currentcolor;
border-bottom-color: transparent;

/* Global values */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

The `border-bottom-color` property is specified as a single value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the bottom border.

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
    border-bottom-color: red;
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

- The border-related CSS shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, and {{Cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{Cssxref("border-right-color")}}, {{Cssxref("border-top-color")}}, and {{Cssxref("border-left-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-bottom-style")}} and {{cssxref("border-bottom-width")}}.
