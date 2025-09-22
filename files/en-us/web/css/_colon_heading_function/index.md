---
title: :heading()
slug: Web/CSS/:heading_function
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.headingfunction
sidebar: cssref
---

{{SeeCompatTable}}

The **`:heading()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) function represents all [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) that match a value calculated using the `An+B` notation. This allows you to style elements at specific heading levels at once, rather than matching and styling them individually.

> [!NOTE]
> The `:heading()` functional pseudo-class has the same [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated) as a class selector, that is, `0-1-0`. So `:heading()` would have a specificity of `0-1-0`, and `section:heading()` would have a specificity of `0-1-1`.

## Syntax

```css-nolint
:heading([ <An+B> [, <An+B>]* | even | odd ]) {
  /* ... */
}
```

### Parameters

The `:heading()` pseudo-class function takes a comma-separated list of `An+B` expressions or keyword values that describe a pattern for matching heading elements.

#### Keyword values

- `odd`
  - : Represents the heading elements whose numeric position is odd: `<h1>`, `<h3>`, and `<h5>`.
- `even`
  - : Represents the heading elements whose numeric position is even: `<h2>`, `<h4>`, and `<h6>`.

#### Functional notation

- `<An+B>`
  - : Represents the heading elements whose numeric position matches the pattern `An+B`, for every positive integer or zero value of `n`, where:
    - `A` is an integer step size,
    - `B` is an integer offset,
    - `n` is all nonnegative integers, starting from 0.

    It can be read as the `An+B`-th element of a list. The `A` and `B` must both have {{cssxref("&lt;integer&gt;")}} values.

## Usage notes

The `:heading()` functional pseudo-class matches only elements that are semantically recognized as headings. It does not match elements with a [`role="heading"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) attribute, nor does it respect the ['aria-level'](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) ARIA attribute.

## Examples

### Using keyword parameters

In this example, the `odd` keyword matches headings with odd-numbered levels, which are `<h1>` and `<h3>`. The `even` keyword is used to target even-numbered heading levels, `<h2>` and `<h4>`.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

```css
:heading(odd) {
  color: tomato;
}
:heading(even) {
  color: slateblue;
}
```

{{EmbedLiveSample("Keyword_example", "", "215")}}

### Using the `An+B` notation

```html
<h1>Science</h1>
<h2>Physics</h2>
<h3>Atomic, molecular, and optical physics</h3>
<h4>Optical physics</h4>
<h5>X-Rays</h5>
<h6>Discovery</h6>
```

```css hidden
main {
  display: flex;
  justify-content: space-around;
}
```

```css
/* Targets headings <h3> and <h4> */
:heading(3, 4) {
  font-weight: 100;
}
/* Targets headings in reverse starting from <h3> */
:heading(-n + 3) {
  color: tomato;
}
/* Targets every third heading starting from <h1> */
:heading(3n + 1) {
  font-style: italic;
}
/* Targets headings after level 5 */
:heading(n + 5) {
  color: slateblue;
}
```

In this example:

- `:heading(3, 4)` matches the `<h3>` and `<h4>` elements
- `:heading(-n + 3)` matches heading elements in reverse, so `<h3>`, `<h2>`, and `<h1>`
- `:heading(3n + 1)` matches every third (`3n`) heading element starting from `<h1>`, so this would include `<h1>` and `<h4>`
- `:heading(n + 5)` matches heading elements starting from `<h5>` and will include `<h6>`

{{EmbedLiveSample("Functional_notation_example", "", "292")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":heading")}}
