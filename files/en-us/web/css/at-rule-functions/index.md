---
title: At-rule functions
slug: Web/CSS/At-rule-functions
page-type: guide
tags:
  - CSS
  - Guide
  - Functions
  - Reference
---

{{CSSRef}}

**At-rule Functions** are [at-rule](/en-US/docs/Web/CSS/At-rule) statements that can represent more complex rules or invoke special data processing or calculations.

## Syntax

```css
@identifier function([argument]? [, argument]!) {
}
```

The syntax starts with '`@`' (at statement), followed by an identifier. Then comes the **name of the at-role function**, followed by a left parenthesis `(`. Next up are the argument(s), and the function is finished off with a closing parenthesis `)`.

Some at-role functions can take multiple arguments, which are formatted similarly to CSS property values. Whitespace is allowed, but they are optional inside the parentheses. In some functional notations multiple arguments are separated by commas, while others use spaces.

## @import functions

The {{CSSxRef("@import")}} at-role used to import styles from other stylesheets.

- {{CSSxRef("@import", "@import url()")}}
  - : Imports a stylesheet file from a specified URL.
- {{CSSxRef("@import", "@import src()")}}
  - : Imports a stylesheet file from a specified source.
- {{CSSxRef("@import", "@import supports()")}}
  - : Imports a stylesheet file based on browser support.
- {{CSSxRef("@import", "@import layer()")}}
  - : Imports a stylesheet file to a specific cascade layer.

## @supports functions

The {{CSSxRef("@supports")}} at-role specify CSS declarations that depend on a browser's support for CSS features.

- {{CSSxRef("@supports", "@supports selector()")}}
  - : Evaluates browser supports based on specified selector syntax.
- {{CSSxRef("@supports", "@supports font-tech()")}}
  - : Evaluates browser supports based on specified font technology for layout and rendering.
- {{CSSxRef("@supports", "@supports font-format()")}}
  - : Evaluates browser supports based on specified font format for layout and rendering.

## @namespace functions

The {{CSSxRef("@namespace")}} at-role specify XML namespaces to be used in a CSS stylesheet.

- {{CSSxRef("@namespace", "@namespace url()")}}
  - : Defines XML namespace from a specified URL.
- {{CSSxRef("@namespace", "@namespace src()")}}
  - : Defines XML namespace from a specified source.

## @container functions

The {{CSSxRef("@container")}} at-role specify styles to a containment context. 

- {{CSSxRef("@container", "@container style()")}}
  - : Defines the containment context style.
