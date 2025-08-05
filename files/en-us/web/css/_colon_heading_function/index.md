---
title: :heading()
slug: Web/CSS/:heading_function
page-type: css-pseudo-class
browser-compat: css.selectors.headingfunction
sidebar: cssref
---

The **`:heading`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function matches [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) that . In other words, the `:heading` pseudo-class allows you to style all headings at once, rather than individually.

## Syntax

```css-nolint
:heading([ <An+B> | even | odd ]) {
  /* ... */
}
```

### Parameters

`:nth-child()` takes a single argument that describes a pattern for matching element indices in a list of siblings. Element indices are 1-based.

#### Keyword values

- `odd`
  - : Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc.
- `even`
  - : Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc.

#### Functional notation

- `<An+B>`
  - : Represents elements whose numeric position in a series of siblings matches the pattern `An+B`, for every positive integer or zero value of `n`, where:
    - `A` is an integer step size,
    - `B` is an integer offset,
    - `n` is all nonnegative integers, starting from 0.

    It can be read as the `An+B`-th element of a list. The `A` and `B` must both have {{cssxref("&lt;integer&gt;")}} values.

## Examples

### Basic example

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

#### CSS

```css
:heading {
  color: tomato;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":heading")}}
