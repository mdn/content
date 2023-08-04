---
title: ":nth-last-child()"
slug: Web/CSS/:nth-last-child
page-type: css-pseudo-class
browser-compat: css.selectors.nth-last-child
---

{{CSSRef}}

The **`:nth-last-child()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among a group of siblings, counting from the end.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-child.html", "tabbed-shorter")}}

## Syntax

The `nth-last-child` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

```css-nolint
:nth-last-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### Keyword values

- `odd`
  - : Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc., counting from the end.
- `even`
  - : Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc., counting from the end.

### Functional notation

- `<An+B>`

  - : Represents elements whose numeric position in a series of siblings matches the pattern `An+B`, for every positive integer or zero value of `n`, where:

    - `A` is an integer step size,
    - `B` is an integer offset,
    - `n` is all nonnegative integers, starting from 0.

    It can be read as the `An+B`-th element of a list. The index of the first element, counting from the end, is `1`. The `A` and `B` must both have {{cssxref("&lt;integer&gt;")}} values.

### The `of <selector>` syntax

By passing a selector argument, we can select the **nth-last** element that matches that selector. For example, the following selector matches the last three _important_ list items, which are assigned with `class="important"`.

```css
:nth-last-child(-n + 3 of li.important) {
}
```

> **Note:** This is different from moving the selector outside of the function, like:

```css
li.important: nth-last-child(-n + 3);
```

This selector applies a style to list items if they are also within the last three children.

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
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n + 2) {
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
li:nth-last-child(n + 3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### Result

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

### `of <selector>` syntax example

In this example, there is an unordered list of names. Some items have a `noted` class applied and are then highlighted with a thick bottom border.

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

In the following CSS we are targeting the **odd** list items that are marked with `class="noted"`.

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Result

Items with `class="noted"` have a think bottom border and items 1, 7, 14, and 20 have a solid background as they are the _odd_ list items with `class="noted"`.

{{EmbedLiveSample('of_selector_syntax_example', 550, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [Quantity Queries for CSS](https://alistapart.com/article/quantity-queries-for-css/)
