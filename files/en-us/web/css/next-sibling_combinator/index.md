---
title: Next-sibling combinator
slug: Web/CSS/Next-sibling_combinator
page-type: css-combinator
browser-compat: css.selectors.next-sibling
---

{{CSSRef}}

The **next-sibling combinator** (`+`) separates two selectors and matches the second element only if it _immediately_ follows the first element, and both are children of the same parent {{DOMxRef("element")}}.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```

## Syntax

```css-nolint
/* The white space around the + combinator is optional but recommended. */
former_element + target_element { style properties }
```

## Examples

### Basic usage

This example demonstrates how to select the next sibling if that next sibling is of a specific type.

#### CSS

We only style the `<li>` that comes immediately after an `<li>` that is the first of its type:

```css
li:first-of-type + li {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

#### Result

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Selecting a previous sibling

The next-sibling combinator can be included within the {{cssxref(":has", ":has()")}} functional selector to select the previous sibling.

#### CSS

We only style the `<li>` with a next sibling that is an `<li>` that is the last of its type:

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three!</li>
  <li>Four</li>
</ul>
```

#### Result

{{EmbedLiveSample("Selecting a previous sibling", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subsequent-sibling combinator](/en-US/docs/Web/CSS/Subsequent-sibling_combinator)
