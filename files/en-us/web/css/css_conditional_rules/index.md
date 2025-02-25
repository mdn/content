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

The **CSS conditional rules** module defines CSS media and support queries, enabling you to define styles that are only applied if specific conditions are met. The conditional rules defined in this module are based on device, user-agent, and viewport capabilities. With conditional rules, you can target CSS styles based on query values or browser and device features, independent of the document being rendered.

The first CSS conditional rules were [media types](/en-US/docs/Web/CSS/@media#media_types) specifying the intended destination medium for the linked styles, for example `screen` or `print`. These were set as the value of the HTML {{HTMLElement("link")}} and {{HTMLElement("style")}} elements' `media` attributes or as a comma-separated list of media types within an {{cssxref("@import")}} statement or at-rule. The ability to conditionally apply CSS rules has been greatly expanded since the CSS 2.1 and HTML 4.01 implementations that limited conditional queries to a few media types.

CSS conditional rules now include feature queries; the `@supports` at-rule enables targeting CSS styles based on a user-agent's CSS capabilities. Additional conditions include which selector, font-formats, and font-techs are supported.

The CSS conditional rules module also expands `@media` to enable nesting at-rules, with the related [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module removing unused media types and adding many media features and conditions that can be targeted.

The [CSS container queries module](/en-US/docs/Web/CSS/CSS_containment/Container_queries) defines similar conditional rules, but based on an element's parent rather than the viewport.

There are plans to further extend possible queries by adding the generalized conditional rule `@when` and the chained conditional rule `@else`. These two at-rules are not yet supported.

## Reference

### Properties

- {{cssxref("container")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}

### At-rules

- {{cssxref("@container")}}
- {{cssxref("@media")}}
- {{cssxref("@supports")}}

> [!NOTE]
> The CSS conditional rules module introduces two at-rules that have not been implemented: `@else` and `@when`.

### Functions

- [`style()`](/en-US/docs/Web/CSS/@container#container_style_queries)
- [`font-tech()`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`font-format()`](/en-US/docs/Web/CSS/@supports#font-format)
- [`selector()`](/en-US/docs/Web/CSS/@supports#function_syntax)
- [`supports()`](/en-US/docs/Web/CSS/@import#supports-condition)

> [!NOTE]
> The CSS conditional rules module introduces a CSS function that has not been implemented: `media()`.

### data types

- [`<container-name>`](/en-US/docs/Web/CSS/@container#values)
- [`<style-feature>`](/en-US/docs/Web/CSS/@container#container_style_queries)
- [Container relative `<length>` units](/en-US/docs/Web/CSS/length#container_query_length_units)
- [`<media-query>`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax)
- [`<supports-condition>`](/en-US/docs/Web/CSS/@import#importing_css_rules_conditional_on_feature_support)
- `<supports-feature>` (see [`supports()`](/en-US/docs/Web/CSS/@import#supports-condition))

### Interfaces

- {{domxref("CSSConditionRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSS.supports_static", "supports()")}} method

### Terms and glossary definitions

- {{glossary("media/CSS", "Media")}}
- Supports query (See [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries))

## Guides

- [Using CSS feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

  - : Selectively applying CSS rules after checking browser support for the specified properties and values via feature queries.

- [Using CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Introduces media queries, their syntax, and the operators and media features that are used to construct media query expressions.

- [Supporting older browsers: feature queries](/en-US/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#feature_queries)

  - : How to use feature queries to target CSS based on the browser's level of support for web features.

- [Browser feature detection: CSS `@supports`](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)

  - : A look at JavaScript and CSS feature detection, including CSS `@supports`.

## Related concepts

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module

  - {{cssxref("@import")}} at-rule

- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module

  - [`<media-feature>`](/en-US/docs/Web/CSS/@media#media_features)
  - [`<media-type>`](/en-US/docs/Web/CSS/@media#media_types)
  - [`<media-condition>`](/en-US/docs/Web/CSS/@media#logical_operators)
  - [`<media-query-list>`](/en-US/docs/Web/SVG/Attribute/media)
  - [CSS logical operators](/en-US/docs/Web/CSS/@media#logical_operators) (`not`, `or`, and `and`)

- [CSSOM view](/en-US/docs/Web/CSS/CSSOM_view) module

  - {{domxref("CSS")}} API
  - {{domxref("CSSGroupingRule")}} API
  - {{domxref("MediaQueryList")}} API
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

- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) module
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
