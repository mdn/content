---
title: CSS at-rule functions
slug: Web/CSS/At-rule-functions
page-type: guide
---

{{CSSRef}}

**[CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) functions** are at-rule statements that represent complex rules or can invoke special data processing or calculations.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

The syntax begins with the at symbol `@` and an at-rule identifier, such as `import`. This is followed by the **name of the at-rule function**, such as `url`, followed by a pair of opening and closing parentheses. One or more arguments are specified inside the parentheses.

Some at-rule functions can take multiple arguments, which are formatted similar to CSS property values. White space is allowed, but it is optional inside the parentheses. Multiple arguments can be separated using a comma or a space.

## @import functions

The {{CSSxRef("@import")}} at-rule is used to import styles from other stylesheets.

- {{CSSxRef("@import", "@import url()")}}
  - : Imports a stylesheet file from the specified URL.
- {{CSSxRef("@import", "@import src()")}}
  - : Imports a stylesheet file from the specified source.
- {{CSSxRef("@import", "@import supports()")}}
  - : Imports a stylesheet file based on browser support.
- {{CSSxRef("@import", "@import layer()")}}
  - : Imports a stylesheet file into the specified cascade layer.

## @supports functions

The {{CSSxRef("@supports")}} at-rule checks for a browser's support for the specified CSS feature and then applies the CSS styling.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Applies CSS rules after checking browser's support for the specified selector syntax.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Applies CSS rules after checking browser's support for the specified font technology.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Applies CSS rules after checking browser's support for the specified font format.

## @namespace functions

The {{CSSxRef("@namespace")}} at-rule is used to specify XML namespaces to be used in a CSS stylesheet.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Defines XML namespace from the specified URL.
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : Defines XML namespace from the specified source.

## @container functions

The {{CSSxRef("@container")}} at-rule is used to specify styles for a containment context.

- {{CSSxRef("@container", "@container style()")}}
  - : Defines the containment context style.
