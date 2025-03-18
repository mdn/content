---
title: border-top-color
slug: Web/CSS/border-top-color
page-type: css-property
browser-compat: css.properties.border-top-color
---

{{CSSRef}}

The **`border-top-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of an element's top [border](/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties {{cssxref("border-color")}} or {{cssxref("border-top")}}.

{{InteractiveExample("CSS Demo: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-top-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-top-color: transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <color> values */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255 0 0);
border-top-color: hsl(100deg 50% 25% / 75%);
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

### A div with a border

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
  border-top-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_div_with_a_border')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The border-related CSS shorthand properties: {{cssxref("border")}}, {{cssxref("border-top")}}, and {{cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, and {{cssxref("border-left-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-top-style")}} and {{cssxref("border-top-width")}}.
- The default [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) color value.
