---
title: border-left-color
slug: Web/CSS/border-left-color
page-type: css-property
browser-compat: css.properties.border-left-color
---

{{CSSRef}}

The **`border-left-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of an element's left [border](/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-left")}}.

{{EmbedInteractiveExample("pages/css/border-left-color.html")}}

## Syntax

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255 0 0);
border-left-color: hsl(100deg 50% 25% / 75%);
border-left-color: currentcolor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: revert;
border-left-color: revert-layer;
border-left-color: unset;
```

The `border-left-color` property is specified as a single value.

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The color of the left border.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### A simple div with a border

#### HTML

```html
<div class="my-box">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="red-text">red</span>.
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}

.red-text {
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

- The border-related CSS shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, and {{Cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, and {{Cssxref("border-top-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-left-style")}} and {{cssxref("border-left-width")}}.
- The default [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) color value.
