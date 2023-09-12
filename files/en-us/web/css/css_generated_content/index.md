---
title: CSS generated content
slug: Web/CSS/CSS_generated_content
page-type: css-module
spec-urls: https://drafts.csswg.org/css-content/
---

{{CSSRef}}

The **CSS generated content** module defines how content can be added to a document with CSS. Generated content can be used to add content to anonymous replaced elements or replace the content of a DOM node in very limited circumstances with a generated value.

## Reference

### Properties

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> **Note:** The CSS generated content module introduces four at-risk properties that have not been implented, including `string-set`, `bookmark-label`, `bookmark-level`, and `bookmark-state`.

### Functions

- `<content()>`
- `<string()>`
- `<leader()>`
- `<target-counter()>`
- `<target-counters()>`
- `<target-text()>`

### Data types

- `<content-list>`
- `<content-replacement>`
- `<image>`
- `<counter>`
- `<quote>`
- `<target>`
- `<quote>`

## Guides

- [How to guide for generated content](/en-US/docs/Learn/CSS/Howto/Generated_content) to l

  - : Learn how to generated content with CSS, including the {{cssxref("content")}} and {{cssxref("quotes")}} properties.

- [Using CSS generated content](/en-US/docs/Learn/CSS/Howto/Generated_content)
  - :

## Related concepts

- {{cssxref("::before")}} pseudo-element
- {{cssxref("::after")}} pseudo-element
- {{cssxref("::marker")}} pseudo-element

- {{cssxref("counter-increment")}} property
- {{cssxref("counter-reset")}} property

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
