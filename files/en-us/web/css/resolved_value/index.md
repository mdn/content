---
title: Resolved value
slug: Web/CSS/resolved_value
page-type: guide
spec-urls: https://drafts.csswg.org/cssom/#resolved-values
---

{{CSSRef}}

The **resolved value** of a [CSS](/en-US/docs/Web/CSS) property is the value after applying active stylesheets and resolving any basic computation those values may contain. The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} method returns a live {{domxref("CSSStyleDeclaration")}} object containing the resolved values of all CSS properties applied to a specified element.

Historically, `getComputedStyle()` returned the [computed value](/en-US/docs/Web/CSS/CSS_cascade/computed_value) of an element or pseudo-element. As CSS evolved, so did the concept of "computed value", but the values returned by `getComputedStyle()` had to remain the same for backward compatibility with deployed scripts. These values are the "resolved values".

For most properties, the resolved value is the [computed value](/en-US/docs/Web/CSS/CSS_cascade/computed_value), but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is the [used value](/en-US/docs/Web/CSS/CSS_cascade/used_value). See the specification link below for some per-property details.

## Specifications

{{Specifications}}

## See also

- {{domxref("window.getComputedStyle")}}
- {{domxref("CSSStyleDeclaration.getPropertyValue")}}
- Values
  - [Initial values](/en-US/docs/Web/CSS/CSS_cascade/initial_value)
  - [Computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value)
  - [Used values](/en-US/docs/Web/CSS/CSS_cascade/used_value)
  - [Actual values](/en-US/docs/Web/CSS/CSS_cascade/actual_value)
- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
- [At-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
- [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance)
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
- [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
