---
title: CSS environment variables
slug: Web/CSS/CSS_environment_variables
page-type: css-module
spec-urls: https://drafts.csswg.org/css-env-1
sidebar: cssref
---

The **CSS environment variables** module defines the concept of environment variables and the {{cssxref("env")}} function. Environment variables work similarly to [custom properties](/en-US/docs/Web/CSS/--*) and the {{cssxref("var")}} function, except that they are globally defined. Environment variables can be defined either by the user agent or the developer.

Environment variables provide values that can be used on the page based on information the user agent has special access to, such as the size of the titlebar, dynamic keyboard, and safe area insets. The safe area insets define a rectangle by its insets from the edges of the viewport, which define a rectangle for displays that are non-rectangular. You can include the user-agent sizes in your styles, enabling you to modify the layout of essential content based on the available space inside the safe area rectangle, next to an visible dynamic keyboard, and adjacent to a visible title bar.

## Reference

### Functions

- {{cssxref("env")}}

## Guides

- [Using environment variables](/en-US/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
  - : Overview of what environment variables are, browser defined environment variables, and how to use the `env()` function.

## Related concepts

- [custom properties](/en-US/docs/Web/CSS/--*)
- {{cssxref("var")}}
- {{domxref("VirtualKeyboard")}} interface

## Specifications

{{Specifications}}

## See also

- [CSS value functions](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) guide.
- [CSS properties and values API](/en-US/docs/Web/CSS/CSS_properties_and_values_API) module
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
