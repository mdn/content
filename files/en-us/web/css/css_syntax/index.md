---
title: CSS syntax
slug: Web/CSS/CSS_syntax
page-type: css-module
spec-urls: https://drafts.csswg.org/css-syntax
---

{{CSSRef}}

The **CSS syntax** module describes, in general terms, the structure and syntax of cascading stylesheets, or CSS. It defines CSS as the language for describing the rendering of structured documents (such as HTML and XML), whether on the web or anywhere else.

The CSS syntax module doesn't define any properties, {{cssxref("css_types", "data types")}}, {{cssxref("css_functions", "functions")}}, or {{cssxref("at-rule", "at-rules")}}. Rather, this module defines how all of these features are defined and how user agents should parse CSS.

The module explicitly states that {{cssxref("@charset")}} is not an actual at-rule, but rather an unrecognized legacy rule to be dropped when a stylesheet is grammar-checked.

## Reference

### Key concepts and definitions

- [`<an + b>` notation]()
- [declaration](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- {{glossary("CSS_Descriptor", "descriptor")}}
- [comments](/en-US/docs/Web/CSS/Comments)
- [declaration block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [escaping](/en-US/docs/Web/CSS/custom-ident#escaping_characters)
- [function](/en-US/docs/Web/CSS/CSS_Functions)
- [invalid](/en-US/docs/Web/CSS/CSS_syntax/error_handling)
- {{glossary("parse")}}
- [rule](/en-US/docs/Web/API/CSSRule)
- {{cssxref("at-rule")}}
- [style rule](/en-US/docs/Web/API/CSSStyleRule)
- {{glossary("stylesheet")}}
- {{glossary("whitespace")}}

## Guides

- [Syntax](/en-US/docs/Web/CSS/Syntax)

  - : Overview of CSS syntax, including CSS declarations, declaration blocks, rulesets, and statements.

- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)

  - : The formal grammar for defining valid values for CSS properties and functions, along with semantic constraints. A guide to CSS component value types, combinators, and multipliers.

- [CSS syntax error handling](/en-US/docs/Web/CSS/CSS_syntax/error_handling)
  - : Overview of how the user-agent handles

## Related Concepts

[CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module

- [specificity](/en-US/docs/Web/CSS/Specificity)

[CSS Cascade](/en-US/docs/Web/CSS/CSS_cascade) module

- {{cssxref("@import")}} at-rule
- {{cssxref("important")}} flag
- [Initial values](/en-US/docs/Web/CSS/initial_value)
- [Computed values](/en-US/docs/Web/CSS/computed_value)
- [Used values](/en-US/docs/Web/CSS/used_value)
- [Actual values](/en-US/docs/Web/CSS/actual_value)
- [inheritance](/en-US/docs/Web/CSS/Inheritance)
- {{Glossary("Property/CSS", "property")}}

[CSS Custom Properties for Cascading Variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module

- [custom property (`--*`)](/en-US/docs/Web/CSS/--*)
- {{cssxref("var()")}}

[CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module

- {{cssxref("@media")}}
- {{cssxref("@supports")}}

[CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) module

- {{domxref("CSSValue.cssText", "cssText")}}
- {{domxref("CSSStyleSheet.insertRule()", "insertRule(rule)")}}
- {{domxref("CSSStyleSheet.replace()", "replace(text)")}}

[WHATWG](/en-US/docs/Glossary/WHATWG) specification

- {{HTMLElement("style")}}
- {{HTMLElement("link")}}
- [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute
- [`rel`](/en-US/docs/Web/HTML/Attributes/rel#stylesheet) attribute

## Specifications

{{Specifications}}

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [CSS values & units](/en-US/docs/Web/CSS/CSS_values_and_units) module
