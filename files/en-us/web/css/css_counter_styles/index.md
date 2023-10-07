---
title: CSS counter styles
slug: Web/CSS/CSS_counter_styles
page-type: css-module
spec-urls: https://drafts.csswg.org/css-counter-styles-3
---

{{CSSRef}}

The **CSS counter styles** module lets you define your own counter styles for use with CSS [list-markers](/en-US/docs/Web/CSS/::marker) and [generated-content](/en-US/docs/Web/CSS/CSS_generated_content) counters.

While we think of counters as numbers, they are actually strings with incrementable components. The counter style module defines the `@counter-style` rule with ten descriports that provide developers the ability to precisely define how counters are converted into strings with a prefix and postfix, along with a negative sign (that can be wrapped if needed). The module enables defining a range, limiting the values a counter style handles, while providing fallback styles for when the counter value is outside that range or otherwise can't render the counter value. The module also enables defining the how the counter is read out loud by speech synthesizers.

## Reference

### Properties

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

### Functions

- {{cssxref("symbols", "symbols()")}}

### Data types

- [`<counter-style>`](/en-US/docs/Web/CSS/@counter-style#counter-style-name)
- [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#values™)
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

### Interfaces and APIs

CSSRule interface
CSSCounterStyleRule interface

## Guides

- [Using CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Describes how to use counters to number any HTML element or to perform complex counting.

## Related concepts

[CSS lists](/en-US/docs/Web/CSS/CSS_lists) module

- {{cssxref("list-style-type")}} property
- {{cssxref("list-style")}} shorthand property
- {{cssxref("counter", "counter()")}} function
- {{cssxref("counters", "counters()")}} function

[CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module

- {{cssxref("::after")}} pseudo-element
- {{cssxref("::before")}} pseudo-element
- {{cssxref("::marker")}} pseudo-element

## Specifications

{{Specifications}}

## See also

- CSS generated content module
- [Ready-made counter styles](https://w3c.github.io/predefined-counter-styles/) via W3C
