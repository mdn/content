---
title: CSS containment
slug: Web/CSS/CSS_containment
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-contain-2/
  - https://drafts.csswg.org/css-contain-3/
---

{{CSSRef}}

The **CSS containment** module defines containment and container queries.

Containment enables the isolation of page subtrees from the rest of the DOM. The browser can then improve performance by optimizing the rendering of these independent parts.

Container queries are similar to [media queries](/en-US/docs/Web/CSS/CSS_media_queries), but the queries are based on the parent and the container the parent defines, rather than the viewport. Container queries enable querying a parent's size, features, and feature values to conditionally apply CSS styles. When applying these conditional styles, you can use container query length units which specify lengths relative to the dimensions of the query container. Additional properties are defined to enable establishing an element as a query container and specify the name for the query's containment context.

## Reference

### Properties

- {{cssxref("contain")}}
- {{cssxref("container")}} shorthand
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

- [`style()`](/en-US/docs/Web/CSS/@container#container_style_queries)

### Data types

- [`<style-feature>`](/en-US/docs/Web/CSS/@container#Container_style_queries)
- [Container relative `<length>` units](/en-US/docs/Web/CSS/length#container_query_length_units)

### Events

- {{domxref("Element.contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}

### Interfaces

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
  - {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} property
- {{domxref("CSSContainerRule")}}
  - {{domxref("CSSContainerRule.containerName")}}
  - {{domxref("CSSContainerRule.containerQuery")}}

## Guides

- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)

  - : A guide to using container queries with `@container`, including naming containment contexts.

- [Using CSS containment](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment)

  - : Describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` for a better user experience.

## Related concepts

- [Layout and the containing block](/en-US/docs/Web/CSS/Containing_block)
- [Block formatting context](/en-US/docs/Web/CSS/Block_formatting_context)

- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module

  - {{cssxref("@media")}} at-rule
  - [CSS logical operators](/en-US/docs/Web/CSS/@media#logical_operators) (`not`, `or`, and `and`)

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module

  - {{cssxref("@starting-style")}} at-rule
  - {{cssxref("transition-behavior")}} property

- CSS box sizing module

  - {{cssxref("contain-intrinsic-size")}} shorthand property
  - {{CSSxRef("contain-intrinsic-inline-size")}} property
  - {{CSSxRef("contain-intrinsic-size")}} property
  - {{CSSxRef("contain-intrinsic-width")}} property
  - {{CSSxRef("contain-intrinsic-height")}} property

- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module

  - [Using CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) guide

- [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/) module
  - [CSS nesting at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules) guide

## Specifications

{{Specifications}}

## See also

- [Using feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [Using CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} at-rule
