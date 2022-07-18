---
title: ':nth-last-col'
slug: Web/CSS/:nth-last-col
browser-compat: css.selectors.nth-last-col
---
{{CSSRef}}{{SeeCompatTable}}

The **`:nth-last-col()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is designed for tables and grids. It accepts the An+B notation such as used with the {{Cssxref(":nth-child")}} selector, using this to target every nth column before it, therefore counting back from the end of the set of columns. The values odd and even are also valid.

```css
/* Selects every odd column in a table */
:nth-last-col(odd) {
  background-color: pink;
}
```

## Syntax

The `nth-last-col` pseudo-class is specified with a single argument, which represents the pattern for matching elements.

See {{Cssxref(":nth-child")}} for a more detailed explanation of its syntax.

```
:nth-last-col
```

## Examples

### Basic example

#### HTML

```html
<table>
  <tr>
    <td>one</td>
    <td>two</td>
    <td>three</td>
    <td>four</td>
  </tr>
  <tr>
  <td>one</td>
    <td>two</td>
    <td>three</td>
    <td>four</td>
  </tr>
</table>
```

#### CSS

```css
td {
  border: 1px solid #ccc;
  padding: .2em;
}

/* Odd columns starting with the final column of the table */
:nth-last-col(2n+1) {
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 250, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
