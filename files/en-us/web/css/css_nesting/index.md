---
title: CSS nesting
slug: Web/CSS/CSS_nesting
page-type: css-module
spec-urls: https://drafts.csswg.org/css-nesting
---

{{CSSRef}}

The **CSS nesting** module introduces the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule.

This helps with the readability, modularity and maintainability of CSS stylesheets.

### CSS nesting in action

The following code blocks do the exact same thing, the first example uses ordinary style rules and the second uses CSS nesting.

#### Ordinary style rules

```css
parent {
  /* parent styles */
}

parent child {
  /* child styles */
}
```

#### CSS nesting

```css
parent {
  /* parent styles */
  & child {
    /* child styles */
  }
}
```

## Reference

### Selectors

- `&` nesting-selector

## Guides

## Specifications

{{Specifications}}

## See also
