---
title: Adjacent sibling combinator
slug: Web/CSS/Adjacent_sibling_combinator
tags:
  - CSS
  - NeedsMobileBrowserCompatibility
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.adjacent_sibling
---
{{CSSRef("Selectors")}}

The **adjacent sibling combinator** (`+`) separates two selectors and matches the second element only if it _immediately_ follows the first element, and both are children of the same parent {{DOMxRef("element")}}.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```

## Syntax

```css
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

- [General sibling combinator](/en-US/docs/Web/CSS/General_sibling_combinator)
