---
title: CSS syntax
slug: Web/CSS/CSS_syntax
page-type: css-module
spec-urls: https://drafts.csswg.org/css-syntax
---

{{CSSRef}}

The **CSS syntax** module describes, in general terms, the structure and syntax of cascading stylesheets, or CSS. It defines CSS as the language for describing the rendering of structured documents (such as HTML and XML), on the web and elsewhere.

This module doesn't define any properties, [data types](/en-US/docs/Web/CSS/CSS_Types), [functions](/en-US/docs/Web/CSS/CSS_Functions), or [at-rules](/en-US/docs/Web/CSS/At-rule). Rather, it elaborates on how all of these features should be defined and how user agents should parse CSS.

## At-rules

- none

> **Note:** The module explicitly states that {{cssxref("@charset")}} is not an actual at-rule, but rather an unrecognized legacy rule that should be omitted when a stylesheet is grammar-checked. The only valid `@charset` usage is at the very beginning of a stylesheet, where it is interpreted as a special byte sequence stripped before processing the content.

## Reference

### Key concepts

- {{cssxref("at-rule")}}
- [character escaping](/en-US/docs/Web/CSS/custom-ident#escaping_characters)
- [CSS comments](/en-US/docs/Web/CSS/Comments)
- [CSS declaration](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [CSS function](/en-US/docs/Web/CSS/CSS_Functions)
- [invalid](/en-US/docs/Web/CSS/CSS_syntax/Error_handling)
- [style rule](/en-US/docs/Web/API/CSSStyleRule)

### Glossary terms

- {{glossary("CSS_Descriptor", "CSS descriptor")}}
- {{glossary("parse")}}
- {{glossary("stylesheet")}}
- {{glossary("whitespace")}}

## Guides

- [Syntax](/en-US/docs/Web/CSS/Syntax)

  - : Overview of CSS syntax, including CSS declarations, declaration blocks, rulesets, and statements.

- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)

  - : Explains the formal grammar for defining valid values for CSS properties and functions, along with semantic constraints. A guide for understanding CSS component value types, combinators, and multipliers.

- [CSS syntax error handling](/en-US/docs/Web/CSS/CSS_syntax/Error_handling)

  - : Overview of how the user agent handles invalid CSS.

- [Learn CSS first steps: CSS syntax](/en-US/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax)

  - : Introductory guide to CSS, including an introduction to CSS syntax.

## Related concepts

[CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module:

- [CSS specificity](/en-US/docs/Web/CSS/Specificity)

[CSS cascade](/en-US/docs/Web/CSS/CSS_cascade) module:

- {{cssxref("@import")}} at-rule
- {{cssxref("important")}} flag
- [Initial values](/en-US/docs/Web/CSS/initial_value)
- [Computed values](/en-US/docs/Web/CSS/computed_value)
- [Used values](/en-US/docs/Web/CSS/used_value)
- [Actual values](/en-US/docs/Web/CSS/actual_value)
- [CSS inheritance](/en-US/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "CSS property")}}

[CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module:

- [custom property (`--*`)](/en-US/docs/Web/CSS/--*)
- {{cssxref("var")}} function

[CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module:

- {{cssxref("@media")}} at-rule
- {{cssxref("@supports")}} at-rule

[CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) API:

- {{domxref("CSSValue.cssText", "cssText")}} property
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}} method
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}} method

[WHATWG](/en-US/docs/Glossary/WHATWG) specification:

- {{HTMLElement("style")}} element
- {{HTMLElement("link")}} element
- [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute
- [`rel`](/en-US/docs/Web/HTML/Attributes/rel#stylesheet) attribute

## Specifications

{{Specifications}}

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
