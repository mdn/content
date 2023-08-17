---
title: CSS nesting
slug: Web/CSS/CSS_nesting
page-type: css-module
spec-urls: https://drafts.csswg.org/css-nesting-1/
---

{{CSSRef}}

The **CSS nesting** module introduces the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule.

This helps with the readability, modularity, and maintainability of CSS stylesheets. It also potentially helps reduce the size of CSS files, thereby decreasing the amount of data downloaded by users.

### CSS nesting in action

The following code blocks do exactly the same thing, with the first example using ordinary style rules and the second using CSS nesting.

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

Selectors can be nested and the child selector will be prepended by the parent selector.

```css
parent {
  /* parent styles */
  child {
    /* child styles */
  }
}
```

#### CSS nesting with the `&` nesting selector

An [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector) can be used to specifically state how the selectors are combined.

### Without `&` nesting selector

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
- [CSS nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
  - : Explains how to nest at-rules.
- [CSS nesting and specificity](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
  - : Explains the differences in specificity when nesting CSS.

## Specifications

{{Specifications}}

## See also

- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)
