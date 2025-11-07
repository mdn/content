---
title: CSS cascading and inheritance
slug: Web/CSS/Guides/Cascade
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-cascade/
  - https://drafts.csswg.org/css-cascade-5/
  - https://drafts.csswg.org/css-cascade-6/
sidebar: cssref
---

The **CSS cascading and inheritance** module defines the rules for assigning values to properties by way of cascading and inheritance. This module specifies the rules for finding the specified value for all properties on all elements.

One of the fundamental design principles of CSS is cascading of rules. It allows several style sheets to influence the presentation of a document. CSS property-value declarations define how a document is rendered. Multiple declarations may set different values for the same element and property combination, but only one value can be applied to any CSS property. The CSS cascade module defines how these conflicts are resolved.

The opposite also occurs. Sometimes there are no declarations defining the value of a property. The CSS cascade module defines how these missing values should be set via inheritance or from the property's initial value.

> [!NOTE]
> The rules for finding the specified values in the page context and its margin boxes are described in the [CSS page module](/en-US/docs/Web/CSS/Guides/Paged_media).

## Reference

### Properties

- {{cssxref("all")}}

### At-rules and descriptors

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Keywords

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- {{cssxref("important", "!important")}} flag

### Interfaces

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### Glossary terms and definitions

- [Actual value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Anonymous layer](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Author origin](/en-US/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets)
- [Cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [Computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Initial value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Named layer](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Resolved value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- [Specified value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- {{glossary("style origin")}}
- [Used value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
- [User origin](/en-US/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets)
- [User-agent origin](/en-US/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)

## Guides

- [Introducing the CSS Cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
  - : Guide to the cascade algorithm that defines how user agents combine property values originating from different sources.

- [CSS inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : A guide to CSS inheritance.

- [Learn: Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : The most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts are resolved.

- [Learn: Cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Introduction to [cascade layers](/en-US/docs/Web/CSS/Reference/At-rules/@layer), a more advanced feature that builds on the fundamental concepts of the [CSS cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction) and [CSS specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity).

## Related concepts

- [Element-attached styles](/en-US/docs/Web/HTML/Reference/Global_attributes/style)
- [Inline styles and the cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction#inline_styles)
- [Conditional rules for @imports](/en-US/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_media_queries)
- [Value definition syntax](/en-US/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Specifications

{{Specifications}}

## See also

- [CSS selectors module](/en-US/docs/Web/CSS/Guides/Selectors)
- [CSS pseudo-elements module](/en-US/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS paged media module](/en-US/docs/Web/CSS/Guides/Paged_media)
- [CSS conditional rules module](/en-US/docs/Web/CSS/Guides/Conditional_rules)
- [CSS nesting module](/en-US/docs/Web/CSS/Guides/Nesting)
- [Shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
