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

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

### Result

{{EmbedLiveSample("Examples", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Subsequent-sibling combinator](/en-US/docs/Web/CSS/Subsequent-sibling_combinator)
