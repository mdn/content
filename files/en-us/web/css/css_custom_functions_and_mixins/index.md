---
title: CSS custom functions and mixins
slug: Web/CSS/CSS_custom_functions_and_mixins
page-type: css-module
spec-urls: https://drafts.csswg.org/css-mixins-1/
sidebar: cssref
---

The **CSS custom functions and mixins** module allows developers to create reusable blocks of CSS code that can accept arguments, contain complex logic (defined using features such as CSS {{cssxref("if()")}} functions and {{cssxref("@media")}} at-rules), and return values based on that logic.

CSS custom functions are defined in {{cssxref("@function")}} at-rules and called using {{cssxref("&lt;dashed-function>")}} syntax, which looks very similar to [CSS custom property](/en-US/docs/Web/CSS/--*) syntax except that it includes parentheses at the end containing arguments (for example, `--my-function(30px, 3)`). CSS custom functions can be called in place of any property value, and will return a value based on the arguments passed into the function and the logic inside it.

CSS mixins are defined in `@mixin` at-rules, and applied using `@apply` at-rules nested inside rulesets. CSS mixins define a set of properties, which can be reused inside multiple rulesets, as well as being customized with arguments and logic.

CSS custom functions and mixins can be assigned optional data types for their arguments and return values, to strictly control the values passed into them and returned from them.

> [!NOTE]
> Currently, only CSS custom functions have browser support. CSS mixins are not currently supported in any browser.

## Reference

### At-rules

- {{cssxref("@function")}}

The CSS custom functions and mixins module also introduces the `@mixin`, `@apply`, `@contents`, and `@env` at-rules. Currently, no browsers support these features.

### Descriptors

- {{cssxref("@function/result", "result")}}

### Data types and values

- {{cssxref("&lt;dashed-function>")}} data type

### Functions

- [`type()`](/en-US/docs/Web/CSS/type)

The CSS custom functions and mixins module also introduces scoped {{cssxref("env()")}} variables. Currently, no browsers support this feature.

### Interfaces

- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDeclarations")}}
- {{domxref("CSSFunctionDescriptors")}}

## Guides

- [Using CSS custom functions](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
  - : This guide teaches you how to use CSS custom functions and presents some typical use cases.

## Specifications

{{Specifications}}

## See also

- {{cssxref("if()")}}
- {{cssxref("@media")}}
