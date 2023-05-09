---
title: At-rules
slug: Web/CSS/At-rule
page-type: guide
spec-urls:
  - https://drafts.csswg.org/css-conditional-3/
  - https://compat.spec.whatwg.org/#css-at-rules
---

{{CSSRef}}

**At-rules** are [CSS statements](/en-US/docs/Web/CSS/Syntax#css_statements) that instruct CSS how to behave. They begin with an at sign, '`@`' (`U+0040 COMMERCIAL AT`), followed by an identifier and includes everything up to the next semicolon, '`;`' (`U+003B SEMICOLON`), or the next [CSS block](/en-US/docs/Web/CSS/Syntax#css_declarations_blocks), whichever comes first.

## Syntax

### Regular

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

There are several regular at-rules, designated by their identifiers, each with a different syntax:

- {{cssxref("@charset")}} — Defines the character set used by the style sheet.
- {{cssxref("@import")}} — Tells the CSS engine to include an external style sheet.
- {{cssxref("@namespace")}} — Tells the CSS engine that all its content must be considered prefixed with an XML namespace.

### Nested

```css
@identifier (RULE) {
}
```

A subset of nested statements, which can be used as a statement of a style sheet as well as inside of conditional group rules.

- {{cssxref("@media")}} — A conditional group rule that will apply its content if the device meets the criteria of the condition defined using a _media query_.
- {{cssxref("@supports")}} — A conditional group rule that will apply its content if the browser meets the criteria of the given condition.
- {{cssxref("@document")}} {{deprecated_inline}} — A conditional group rule that will apply its content if the document in which the style sheet is applied meets the criteria of the given condition.
- {{cssxref("@page")}} — Describes the aspect of layout changes that will be applied when printing the document.
- {{cssxref("@font-face")}} — Describes the aspect of an external font to be downloaded.
- {{cssxref("@keyframes")}} — Describes the aspect of intermediate steps in a CSS animation sequence.
- {{cssxref("@counter-style")}} — Defines specific counter styles that are not part of the predefined set of styles.
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` and `@character-variant`) — Define common names in {{cssxref("font-variant-alternates")}} for feature activated differently in OpenType.
- {{cssxref("@property")}} — Describes the aspect of custom properties and variables.
- {{cssxref("@layer")}} – Declares a cascade layer and defines the order of precedence in case of multiple cascade layers.

## Conditional group rules

Much like the values of properties, each at-rule has a different syntax. Nevertheless, several of them can be grouped into a special category named **conditional group rules**. These statements share a common syntax and each of them can include _nested statements_—either _rulesets_ or _nested at-rules_. Furthermore, they all convey a common semantic meaning—they all link some type of condition, which at any time evaluates to either **true** or **false**. If the condition evaluates to **true**, then all of the statements within the group will be applied.

Conditional group rules are:

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(deferred to Level 4 of CSS Spec)_

Since each conditional group may also contain nested statements, there may be an unspecified amount of nesting.

## Index

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@document")}} {{deprecated_inline}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@property")}}
- {{cssxref("@supports")}}

## Specifications

{{Specifications}}

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
