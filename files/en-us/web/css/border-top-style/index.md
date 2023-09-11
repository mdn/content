---
title: border-top-style
slug: Web/CSS/border-top-style
page-type: css-property
browser-compat: css.properties.border-top-style
---

{{CSSRef}}

The **`border-top-style`** [CSS](/en-US/docs/Web/CSS) property sets the line style of an element's top {{CSSxRef("border")}}.

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> **Note:** The specification doesn't define how borders of different styles connect in the corners.

## Syntax

```css
/* Keyword values */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Global values */
border-top-style: inherit;
border-top-style: initial;
border-top-style: revert;
border-top-style: revert-layer;
border-top-style: unset;
```

The `border-top-style` property is specified as a single {{cssxref("line-style")}} keyword value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting border-top-style

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

/* border-top-style example classes */
.b1 {
  border-top-style: none;
}
.b2 {
  border-top-style: hidden;
}
.b3 {
  border-top-style: dotted;
}
.b4 {
  border-top-style: dashed;
}
.b5 {
  border-top-style: solid;
}
.b6 {
  border-top-style: double;
}
.b7 {
  border-top-style: groove;
}
.b8 {
  border-top-style: ridge;
}
.b9 {
  border-top-style: inset;
}
.b10 {
  border-top-style: outset;
}
```

#### Result

{{EmbedLiveSample('Examples', 300, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other style-related border properties: {{CSSxRef("border-left-style")}}, {{CSSxRef("border-right-style")}}, {{CSSxRef("border-bottom-style")}}, and {{CSSxRef("border-style")}}.
- The other top-border-related properties: {{CSSxRef("border-top")}}, {{CSSxRef("border-top-color")}}, and {{CSSxRef("border-top-width")}}.
