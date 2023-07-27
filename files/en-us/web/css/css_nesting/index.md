---
title: CSS nesting
slug: Web/CSS/CSS_nesting
page-type: css-module
spec-urls: https://drafts.csswg.org/css-nesting-1/
---

{{CSSRef}}

The **CSS nesting** module introduces the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule.

This helps with the readability, modularity and maintainability of CSS stylesheets. It also helps reduce the file size of CSS files reducing the data used by users.

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

- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)

## Guides

- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
  - : Explains how to use CSS nesting.
- [Using `&` nesting selector](/en-US/docs/Web/CSS/CSS_nesting/Using_nesting_selector)
  - : Explains how to use the `&` nesting selector.
- [CSS nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/CSS_nesting_at-rules)
  - : Explains how to nest at-rules.
- [CSS nesting and specificity](/en-US/docs/Web/CSS/CSS_nesting/CSS_nesting_and_specificity)
  - : Explains the differences in specificity when nesting CSS.

## Specifications

{{Specifications}}

## See also

- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)
