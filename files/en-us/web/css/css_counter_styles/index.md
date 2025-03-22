---
title: CSS counter styles
slug: Web/CSS/CSS_counter_styles
page-type: css-module
spec-urls: https://drafts.csswg.org/css-counter-styles/
---

{{CSSRef}}

The **CSS counter styles** module lets you define your own counter styles to manage the appearance of [markers](/en-US/docs/Web/CSS/::marker) in lists and counters in [generated content](/en-US/docs/Web/CSS/CSS_generated_content). It also enables you to extend native browser list styles with your own customizations.

While we think of counters as numbers, they are actually strings with components that can be incremented. The counter styles module defines the `@counter-style` rule with ten descriptors, which enable developers to precisely define how counters are converted into strings. This module enables defining which characters to use for the counter bullets, the prefix to put before the counter and postfix that comes after, along with how to handle negative values. The descriptors can also set a range to limit the values a counter style can handle, while also providing fallback styles for when the counter value falls outside the defined range or otherwise can't render the counter value. The module also enables defining how the counter is read out loud by speech synthesizers.

## Reference

### Properties

No properties are defined in this module

### Functions

- {{cssxref("symbols", "symbols()")}}

### Data types

- [`<counter-style-name>`](/en-US/docs/Web/CSS/@counter-style#counter-style-name)
- [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#values)
- [`<symbols-type>`](/en-US/docs/Web/CSS/symbols#syntax)

### At-rules and descriptors

- {{cssxref("@counter-style")}}

  - {{cssxref("@counter-style/system","system")}}
  - {{cssxref("@counter-style/symbols", "symbols")}}
  - {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - {{cssxref("@counter-style/negative", "negative")}}
  - {{cssxref("@counter-style/prefix", "prefix")}}
  - {{cssxref("@counter-style/suffix", "suffix")}}
  - {{cssxref("@counter-style/range", "range")}}
  - {{cssxref("@counter-style/pad", "pad")}}
  - {{cssxref("@counter-style/speak-as", "speak-as")}}
  - {{cssxref("@counter-style/fallback", "fallback")}}

### Interfaces

- {{domxref("CSSCounterStyleRule")}} interface

## Guides

- [Using CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Describes how to use counters to number any HTML element or to perform complex counting.

## Related concepts

[CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module:

- {{cssxref("counter-increment")}} property
- {{cssxref("counter-reset")}} property
- {{cssxref("counter-set")}} property
- {{cssxref("list-style-type")}} property
- {{cssxref("list-style")}} shorthand property
- {{cssxref("counter", "counter()")}} function
- {{cssxref("counters", "counters()")}} function

[CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module:

- {{cssxref("::after")}} pseudo-element
- {{cssxref("::before")}} pseudo-element
- {{cssxref("::marker")}} pseudo-element

[CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module:

- {{cssxref("content")}} property

## Specifications

{{Specifications}}

## See also

- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module
- [Ready-made counter styles](https://w3c.github.io/predefined-counter-styles/#builtins) via W3C (2023)
