---
title: CSS lists and counters
slug: Web/CSS/CSS_lists
page-type: css-module
spec-urls: https://drafts.csswg.org/css-lists/
---

{{CSSRef}}

The **CSS lists and counters** module enables styling the bullets of list items and their counters, including styling, positioning, and manipulating their values, including incrementing counters by values other than `1`.

A list item's marker, whether a bullet symbol or ordinal counter, is its defining feature. List items are not limited to {{HTMLElement("li")}} elements nested within an {{HTMLElement("ol")}} or {{HTMLElement("ul")}}. Rather, lists items are element with `display: list-item` set.

This module defines the CSS to set and reset a list's counters, to set which [counter-style](/en-US/docs/Web/CSS/CSS_counter_styles) or symbol is used as the marker, and position those markers, and provides developers with the ability to create customized markers.

## Reference

### Properties

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} shorthand

There is also a `marker-side` property, which is yet to be fully defined or implemented.

### Pseudo-elements

- {{cssxref("::marker")}}

### Functions

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### Data types

- [`<counter>`](/en-US/docs/Web/CSS/content#counter)
- [`<counter-name>`](/en-US/docs/Web/CSS/counter#counter-name)
- [`<counter-style>`](/en-US/docs/Web/CSS/counter#counter-style)

## Guides

- [Consistent list indentation](/en-US/docs/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Explains how to achieve consistent list indentation across different browsers.

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Explains how to use the CSS counter properties to control list counters.

## Related concepts

- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} at-rule
  - [`<counter-style-name>`](/en-US/docs/Web/CSS/@counter-style#counter-style-name) data type
  - [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#values) data type
  - {{cssxref("symbols", "symbols()")}} function

- {{HTMLElement("ol")}} `start`, `reversed`, and `type` attributes
- {{HTMLElement("ul")}} `type` attribute
- {{HTMLElement("li")}} `type` and `value` attributes

## Specifications

{{Specifications}}

## See also

- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS generated content](/en-US/docs/Web/CSS/CSS_generated_content) module
