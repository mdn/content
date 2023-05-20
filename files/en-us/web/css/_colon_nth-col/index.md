---
title: ":nth-col()"
slug: Web/CSS/:nth-col
page-type: css-pseudo-class
browser-compat: css.selectors.nth-col
---

{{CSSRef}}{{SeeCompatTable}}

The **`:nth-col()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is designed for tables and grids. It accepts the An+B notation such as used with the {{Cssxref(":nth-child")}} selector, using this to target every nth column. The values odd and even are also valid.

```css
/* Selects every odd column in a table */
:nth-col(odd) {
  background-color: pink;
}
```

## Syntax

The `nth-col()` pseudo-class is specified with a single argument, which represents the pattern for matching elements. It uses `:nth-col(An+B)` syntax.

See {{Cssxref(":nth-child")}} for a more detailed explanation of its syntax.

```css
:nth-col(An + B) {
  /* ... */
}
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
  padding: 0.2em;
}

/* Odd columns */
:nth-col(2n + 1) {
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
