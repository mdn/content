---
title: Using CSS custom functions
slug: Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions
page-type: guide
sidebar: cssref
---

CSS custom functions...

They work in a similar [CSS custom properties](/en-US/docs/Web/CSS/--*)

## Function basics

A really basic CSS custom function example looks like this:

```css
@function --half-opacity() {
  result: 0.5;
}
```

We've defined the function name as `--half-opacity` and set the `result` descriptor to always return the value `0.5`. You can then call this function in place of a suitable property value, for example:

```css
h2 {
  opacity: --half-opacity();
}
```

However, this isn't very useful. You might as well just use a custom property, or the literal value `0.5`.
