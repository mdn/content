---
title: border-right-style
slug: Web/CSS/border-right-style
page-type: css-property
browser-compat: css.properties.border-right-style
---

{{CSSRef}}

The **`border-right-style`** [CSS](/en-US/docs/Web/CSS) property sets the line style of an element's right {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> [!NOTE]
> The specification doesn't define how borders of different styles connect in the corners.

## Syntax

```css
/* Keyword values */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* Global values */
border-right-style: inherit;
border-right-style: initial;
border-right-style: revert;
border-right-style: revert-layer;
border-right-style: unset;
```

The `border-right-style` property is specified as a single {{cssxref("line-style")}} keyword value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Border styles

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* Define look of the table */
table {
  border-width: 2px;
  background-color: #52e385;
}
tr,
td {
  padding: 3px;
}

/* border-right-style example classes */
.b1 {
  border-right-style: none;
}
.b2 {
  border-right-style: hidden;
}
.b3 {
  border-right-style: dotted;
}
.b4 {
  border-right-style: dashed;
}
.b5 {
  border-right-style: solid;
}
.b6 {
  border-right-style: double;
}
.b7 {
  border-right-style: groove;
}
.b8 {
  border-right-style: ridge;
}
.b9 {
  border-right-style: inset;
}
.b10 {
  border-right-style: outset;
}
```

#### Result

{{ EmbedLiveSample('Border_styles') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other style-related border properties: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-style")}}.
- The other right-border-related properties: {{Cssxref("border-right")}}, {{Cssxref("border-right-color")}}, and {{Cssxref("border-right-width")}}.
