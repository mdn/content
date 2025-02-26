---
title: border-left-style
slug: Web/CSS/border-left-style
page-type: css-property
browser-compat: css.properties.border-left-style
---

{{CSSRef}}

The **`border-left-style`** [CSS](/en-US/docs/Web/CSS) property sets the line style of an element's left {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/border-left-style.html")}}

> [!NOTE]
> The specification doesn't define how borders of different styles connect in the corners.

## Syntax

```css
/* Keyword values */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* Global values */
border-left-style: inherit;
border-left-style: initial;
border-left-style: revert;
border-left-style: revert-layer;
border-left-style: unset;
```

The `border-left-style` property is specified as a single {{cssxref("line-style")}} keyword value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting border-left-style

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

/* border-left-style example classes */
.b1 {
  border-left-style: none;
}
.b2 {
  border-left-style: hidden;
}
.b3 {
  border-left-style: dotted;
}
.b4 {
  border-left-style: dashed;
}
.b5 {
  border-left-style: solid;
}
.b6 {
  border-left-style: double;
}
.b7 {
  border-left-style: groove;
}
.b8 {
  border-left-style: ridge;
}
.b9 {
  border-left-style: inset;
}
.b10 {
  border-left-style: outset;
}
```

#### Result

{{ EmbedLiveSample('Examples', 300, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other style-related border properties: {{Cssxref("border-bottom-style")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-style")}}.
- The other left-border-related properties: {{Cssxref("border-left")}}, {{Cssxref("border-left-color")}}, and {{Cssxref("border-left-width")}}.
