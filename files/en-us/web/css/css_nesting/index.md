---
title: CSS nesting
slug: Web/CSS/CSS_nesting
page-type: css-module
spec-urls: https://drafts.csswg.org/css-nesting-1/
---

{{CSSRef}}

The **CSS nesting** module defines a syntax for nesting selectors, providing the ability to nest one style rule inside another, with the selector of the child rule relative to the selector of the parent rule.

CSS nesting is different from CSS preprocessors such as [Sass](https://sass-lang.com/) in that it is parsed by the browser rather than being pre-compiled by a CSS preprocessor.

CSS nesting helps with the readability, modularity, and maintainability of CSS stylesheets. It also potentially helps reduce the size of CSS files, thereby decreasing the amount of data downloaded by users.

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

## Related concepts

- [Selectors and combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS preprocessor](/en-US/docs/Glossary/CSS_preprocessor)

## Specifications

{{Specifications}}

## See also

- [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS cascading and inheritance module](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS selectors module](/en-US/docs/Web/CSS/CSS_selectors)
