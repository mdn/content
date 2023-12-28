---
title: CSS conditional rules
slug: Web/CSS/CSS_conditional_rules
page-type: css-module
spec-urls:
  - https://www.w3.org/TR/css-conditional-5/
  - https://www.w3.org/TR/css-conditional-4/
  - https://www.w3.org/TR/css-conditional-3/
---

{{CSSRef}}

The **CSS conditional rules** module defines CSS feature and support queries, enabling you define styles that are only is specific conditions are met. Conditions include the capabilities of the processor or the document the style sheet is being applied to.

The first conditional rule, `@media`, has been around since CSS 2.1. The original implementation's only function was to enable stylesheets based on [media types](/en-US/docs/Web/CSS/@media#media_types).

The ability to conditionally apply CSS rules has been greatly expanded. CSS conditional rules level 3 added `@supports` to provide browser CSS capability queries and expanded `@media` to enable nesting at-rules and, in conjunction with media features defined in [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries), to targes styles based onquery values or browser and device features, independent of the document being rendered.

enabling nesting at-rules, enabling providing CSS for all media and feature requirements in a single stylesheet.

Conditional rules Level 4 added the ability to query support for particular CSS selectors. Level 5 further extends possible queries by adding the generalized conditional rule `@when` and the chained conditional rule `@else`, as well as add font processing to the list of features that can be queried.

## Reference

### At-rules

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> **Note:** The CSS conditional rules module introduces two at-rules that have not been implemented: `@else` and `@when`.

### Functions

- [`font-tech()`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/en-US/docs/Web/CSS/@supports#font-format)
- [`selector()`](/en-US/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/en-US/docs/Web/CSS/@import#supports-condition)

> **Note:** The CSS conditional rules module introduces a CSS function that has not been implemented: `media()`.

### data types

- `<media-query>`
- `<supports-condition>`
- `<supports-feature>`

### Interfaces

- {{domxref("CSSConditionRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSS.supports_static")}} method

### Terms and glossary definitions

- supports queries
- conditional group rule
- media

## Guides

- [Using CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Applying CSS rules after checking browser's support for the specified property and value feature queries.

- [Using CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Introduces media queries, their syntax, and the operators and media features that are used to construct media query expressions.

- [Supporting older browsers: feature queries](/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : How to use feature queries to target CSS based on the browser's level of support for modern web features technology.

- [Browser feature detection: CSS `@supports`](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#supports)

  - : A look at JavaScript and CSS feature detection, including CSS `@supports`.

## Related concepts

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module

  - {{cssxref("@import")}} at-rule

- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module

  - [`<media-feature>`](/en-US/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/en-US/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/en-US/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/en-US/docs/Web/SVG/Atrributes/media)
  - [CSS logical operators](/en-US/docs/Web/CSS/@media#logical_operators) (`not`, `or`, and `and`)

- [CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module

  - {{domxref("CSS")}} API
  - {{domxref("CSSGroupingRule")}} API
  - {{domxref("MediaQueryList")}} API
  - {{domxref("CSSOMString")}} API
  - {{domxref("CSSRule")}} API
  - {{domxref("MediaList")}} interface
    - {{domxref("MediaList.mediaText")}} property

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module

  - {{cssxref("@charset")}} declaration
  - {{cssxref("at-rule")}} term
  - [`invalid`](/en-US/docs/Web/CSS/CSS_syntax/Error_handling) term
  - {{glossary("parse")}} term
  - [style rule](/en-US/docs/Web/API/CSSStyleRule) term

- [CSS namespaces](/en-US/docs/Web/CSS/CSS_namespaces) module

  - {{cssxref("@namespace")}} at-rule

## Specifications

{{Specifications}}

## See also
