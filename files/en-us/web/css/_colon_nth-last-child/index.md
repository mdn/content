---
title: ':nth-last-child()'
slug: Web/CSS/:nth-last-child
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Selector
  - Web
browser-compat: css.selectors.nth-last-child
---
{{CSSRef}}

The **`:nth-last-child()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among a group of siblings, counting from the end.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-child.html", "tabbed-shorter")}}

## Syntax

The `nth-last-child` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

```
:nth-last-child( <nth> [ of <complex-selector-list> ]? )
```

### Keyword values

- `odd`
  - : Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc., counting from the end.
- `even`
  - : Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc., counting from the end.

### Functional notation

- `<An+B>`
  - : Represents elements whose numeric position in a series of siblings matches the pattern `An+B`, for every positive integer or zero value of `n`. The index of the first element, counting from the end, is `1`. The values `A` and `B` must both be {{cssxref("&lt;integer&gt;")}}s.

## Examples

### Example selectors

- `tr:nth-last-child(odd)` or `tr:nth-last-child(2n+1)`
  - : Represents the odd rows of an HTML table: 1, 3, 5, etc., counting from the end.
- `tr:nth-last-child(even)` or `tr:nth-last-child(2n)`
  - : Represents the even rows of an HTML table: 2, 4, 6, etc., counting from the end.
- `:nth-last-child(7)`
  - : Represents the seventh element, counting from the end.
- `:nth-last-child(5n)`
  - : Represents elements 5, 10, 15, etc., counting from the end.
- `:nth-last-child(3n+4)`
  - : Represents elements 4, 7, 10, 13, etc., counting from the end.
- `:nth-last-child(-n+3)`
  - : Represents the last three elements among a group of siblings.
- `p:nth-last-child(n)` or `p:nth-last-child(n+1)`
  - : Represents every `<p>` element among a group of siblings. This is the same as a simple `p` selector. (Since `n` starts at zero, while the last element begins at one, `n` and `n+1` will both select the same elements.)
- `p:nth-last-child(1)` or `p:nth-last-child(0n+1)`
  - : Represents every `<p>` that is the first element among a group of siblings, counting from the end. This is the same as the {{cssxref(":last-child")}} selector.

### Table example

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n+3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n+2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### Result

{{EmbedLiveSample('Table_example', 300, 150)}}

### Quantity query

A _quantity query_ styles elements depending on how many of them there are. In this example, list items turn red when there are at least three of them in a given list. This is accomplished by combining the capabilities of the `nth-last-child` pseudo-class and the [general sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator).

#### HTML

```html
<h4>A list of four items (styled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ol>

<h4>A list of two items (unstyled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

#### CSS

```css
/* If there are at least three list items,
   style them all */
li:nth-last-child(n+3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
- [Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css/)
