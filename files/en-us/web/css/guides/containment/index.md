---
title: CSS containment
slug: Web/CSS/Guides/Containment
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-contain-2/
  - https://drafts.csswg.org/css-contain-3/
sidebar: cssref
---

The **CSS containment** module defines containment and container queries.

Containment enables the isolation of page subtrees from the rest of the DOM. The browser can then improve performance by optimizing the rendering of these independent parts.

Container queries are similar to dimension [media queries](/en-US/docs/Web/CSS/Guides/Media_queries), except that the queries are based on the dimensions of a specific container element defined as a _containment context_, rather than on the dimensions of the viewport. Container queries enable querying a container's size, properties, and property values to conditionally apply CSS styles. When applying these conditional styles, you can use container query length units, which specify lengths relative to the dimensions of the query container. Additional properties are defined to enable establishing a specific element as a query container and giving it a specific name.

## Reference

### Properties

- {{cssxref("contain")}}
- {{cssxref("content-visibility")}}

### Events

- {{domxref("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### Interfaces

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
  - {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} property
- {{domxref("CSSContainerRule")}}
  - {{domxref("CSSContainerRule.containerName")}}
  - {{domxref("CSSContainerRule.containerQuery")}}

## Guides

- [CSS container queries](/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
  - : A guide to using container queries with `@container`, including naming containment contexts.

- [Using CSS containment](/en-US/docs/Web/CSS/Guides/Containment/Using)
  - : Describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for a better user experience.

- [Using container size and style queries](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
  - : A guide to writing container size and style queries with `@container`, including style queries for custom properties, query syntax and names, and nesting container queries.

## Related concepts

- [Layout and the containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block)
- [Block formatting context](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context)

- [CSS conditional rules](/en-US/docs/Web/CSS/Guides/Conditional_rules) module
  - {{cssxref("@container")}} at-rule
  - {{CSSxRef("container")}} property
  - {{CSSxRef("container-name")}} property
  - {{CSSxRef("container-type")}} property

- [CSS media queries](/en-US/docs/Web/CSS/Guides/Media_queries) module
  - {{cssxref("@media")}} at-rule
  - [CSS logical operators](/en-US/docs/Web/CSS/Reference/At-rules/@media#logical_operators) (`not`, `or`, and `and`)

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
  - {{cssxref("@starting-style")}} at-rule
  - {{cssxref("transition-behavior")}} property

- [CSS box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
  - {{CSSxRef("aspect-ratio")}} property
  - {{cssxref("contain-intrinsic-size")}} shorthand property
  - {{CSSxRef("contain-intrinsic-inline-size")}} property
  - {{CSSxRef("contain-intrinsic-block-size")}} property
  - {{CSSxRef("contain-intrinsic-width")}} property
  - {{CSSxRef("contain-intrinsic-height")}} property

- [CSS counter styles](/en-US/docs/Web/CSS/Guides/Counter_styles) module
  - [Using CSS counters](/en-US/docs/Web/CSS/Guides/Counter_styles/Using_counters) guide

- [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting) module
  - [CSS nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules) guide

## Specifications

{{Specifications}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [Using CSS media queries](/en-US/docs/Web/CSS/Guides/Media_queries/Using)
- [Understanding aspect ratios](/en-US/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- {{cssxref("@supports")}} at-rule
