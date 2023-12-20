---
title: CSS conditional rules
slug: Web/CSS/CSS_conditional_rules
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-conditional-5
  - https://drafts.csswg.org/css-conditional-4
  - https://drafts.csswg.org/css-conditional-3

---

{{CSSRef}}

The **CSS conditional rules** module defines CSS feature and support queries, enabling you define styles that are only is specific conditions are met. Conditions include the capabilities of the processor or the document the style sheet is being applied to.

The first conditional rule, `@media`, has been around since CSS 2.1. The original implementation's only function was to enable stylesheets based on [media types](/en-US/docs/Web/CSS/@media#media_types). 

The ability to conditionally apply CSS rules has been greatly expanded. CSS conditional rules level 3 added `@supports` to provide browser CSS capability queries and expanded `@media` to enable nesting at-rules and, in conjunction with media features defined in [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries), to targes styles based onquery values or browser and device features, independent of the document being rendered.

enabling nesting at-rules, enabling providing CSS for all media and feature requirements in a single stylesheet. 

Conditional rules Level 4 added the ability to query support for particular CSS selectors. Level 5 further extends possible queries by adding the generalized conditional rule `@when` and the chained conditional rule `@else`, as well as add font processing to the list of features that can be queried.

## Reference

### Properties

### At-rules

- {{cssxref("@media")}}
- {{cssxref("@supports")}}
- {{cssxref("@when")}}
- {{cssxref("@else")}}

### Functions

- [`supports()`](/en-US/docs/Web/CSS/@import#supports-condition) statement
- [`media()`]() statement
- [`selector()`]() notation 

### data types

- `<media-query>`
- `<supports-condition>`
- `<supports-feature>`

### Interfaces

- {{domxref("CSSConditionRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSS.supports()")}} method

## Guides

## Related concepts

- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module

  - [`<media-feature>`](/en-US/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/en-US/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/en-US/docs/Web/CSS/@media#logical_operators)

- [CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module

  - {{domxref("CSS")}} API
  - {{domxref("CSSGroupingRule")}} API
  - {{domxref("MediaQueryList")}} API
  - {{domxref("CSSOMString")}} API
  - {{domxref("CSSRule")}} API
  - {{domxref("MediaList")}} interface
    - - {{domxref("MediaList.mediaText")}} property

- [CSS namespaces](/en-US/docs/Web/CSS/CSS_namespaces) module

  - {{cssxref("@namespace")}}

## Specifications

{{Specifications}}

## See also