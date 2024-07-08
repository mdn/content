---
title: CSS generated content
slug: Web/CSS/CSS_generated_content
page-type: css-module
spec-urls: https://drafts.csswg.org/css-content/
---

{{CSSRef}}

The **CSS generated content** module defines how an element's content can be replaced and content can be added to a document with CSS.

Generated content can be used for content replacement, in which case the content of a DOM node is replaced with a CSS `<image>`. The CSS generated content also enables generating language-specific quotes, creating custom list item numbers and bullets, and visually adding content by generating content on select pseudo-elements as anonymous replaced elements.

### Generated content in action

{{EmbedGHLiveSample("css-examples/modules/generated_content.html", '100%',420)}}

The HTML for this sample is a single, empty {{HTMLElement("div")}} inside an otherwise empty {{HTMLElement("body")}}. The snowman was created with [CSS images](/en-US/docs/Web/CSS/CSS_images) and [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders). The carrot nose was added using generated content: an empty box with a wide orange {{cssxref("border-left", "left border")}} added to the {{cssxref("::before")}} pseudo-element. The text is also generated content: "only one &lt;div>" was generated with the {{cssxref("content")}} property applied to the {{cssxref("::after")}} pseudo-element.

To see the code for this animation, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/generated_content.html).

## Reference

### Properties

- {{cssxref("content")}}
- {{cssxref("quotes")}}

> **Note:** The CSS generated content module introduces four at-risk properties that have not been implemented: `string-set`, `bookmark-label`, `bookmark-level`, and `bookmark-state`.

### Functions

The CSS generated content module introduces six yet-to-be implemented CSS functions including `content()`, `string()`, and `leader()`, and the three [`<target>`](/en-US/docs/Web/CSS/content#target) functions `target-counter()`, `target-counters()`, and `target-text()`.

### Data types

- [`<content-list>`](/en-US/docs/Web/CSS/content)
- `<content-replacement>` (see {{cssxref("image")}})
- {{cssxref("image")}}
- [`<counter>`](/en-US/docs/Web/CSS/content#counter)
- [`<quote>`](/en-US/docs/Web/CSS/content#quote)
- [`<target>`](/en-US/docs/Web/CSS/content#target)

## Guides

- ["How to" guide for generated content](/en-US/docs/Learn/CSS/Howto/Generated_content)

  - : Learn how to add text or image content to a document using the {{cssxref("content")}} property.

- [Create fancy boxes with generated content](/en-US/docs/Learn/CSS/Howto/Create_fancy_boxes)

  - : Example of styling generated content for visual effects.

## Related concepts

- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module

  - {{cssxref("::before")}} pseudo-element
  - {{cssxref("::after")}} pseudo-element
  - {{cssxref("::marker")}} pseudo-element

- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module

  - {{cssxref("counter", "counter()")}} function
  - {{cssxref("counters", "counters()")}} function
  - {{cssxref("counter-increment")}} property
  - {{cssxref("counter-reset")}} property

- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module

  - {{cssxref("attr", "attr()")}} function
  - {{cssxref("string")}} data type
  - {{cssxref("image")}} data type

## Specifications

{{Specifications}}

## See also

- [CSS pseudo-elements](/en-US/docs/Web/CSS/CSS_pseudo-elements) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
