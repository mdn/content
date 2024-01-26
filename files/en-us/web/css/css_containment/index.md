---
title: CSS containment
slug: Web/CSS/CSS_containment
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-contain-2/
  - https://drafts.csswg.org/css-contain-3/
---

{{CSSRef}}

The **CSS containment** module improves performance of web pages by allowing the browser to isolate a subtree of the page from the rest of the page.

If the browser knows that a part of the page is independent, rendering can be optimized and performance improved.

## Reference

### Properties

- {{cssxref("contain")}}
- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("content-visibility")}}

### At-rules and descriptors

- {{cssxref("@container")}}
- [`@container` descriptors](/en-US/docs/Web/CSS/@container#descriptors):
  - `aspect-ratio`
  - `block-size`
  - `height`
  - `inline-size`
  - `orientation`
  - `width`

### Functions

### Data types

### Events

### Interfaces

- {{domxref("element.ContentVisibilityAutoStateChangeEvent_event", "ContentVisibilityAutoStateChangeEvent")}} event

## Guides

- CSS container queries

  - : blah

- [Using CSS containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for better user experience.

## Related concepts

- [CSS media queries]() module
  - {{cssxref("@media")}} at-rule

## Specifications

{{Specifications}}

## See also

- [An introduction to CSS containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) via Igalia.com(2019)
