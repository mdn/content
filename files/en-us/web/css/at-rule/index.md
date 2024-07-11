---
title: At-rules
slug: Web/CSS/At-rule
page-type: guide
spec-urls:
  - https://drafts.csswg.org/css-conditional-3/
  - https://compat.spec.whatwg.org/#css-at-rules
---

{{CSSRef}}

**At-rules** are [CSS statements](/en-US/docs/Web/CSS/Syntax#css_statements) that instruct CSS how to behave. They begin with an at sign, '`@`' (`U+0040 COMMERCIAL AT`), followed by an identifier, and include everything up to the next semicolon, '`;`' (`U+003B SEMICOLON`), or the next [CSS block](/en-US/docs/Web/CSS/Syntax#css_declaration_blocks), whichever comes first.

## Syntax

### Statement at-rules

```css
/* General structure */
@identifier (RULE);

/* Example: tells browser to use UTF-8 character set */
@charset "utf-8";
```

Statement at-rules end in a semicolon. There are several statement at-rules, designated by their identifiers, each with a different syntax:

- {{cssxref("@charset")}}
  - : Defines the character set used by the style sheet.
- {{cssxref("@import")}}
  - : Tells the CSS engine to include an external style sheet.
- {{cssxref("@namespace")}}
  - : Tells the CSS engine that all its content must be considered prefixed with an XML namespace.

> **Note:** Strictly speaking, `@charset` is not an at-rule, but a special byte sequence that's stripped before processing the content. Read its reference for more information.

### Block at-rules

```css
@identifier (RULE) {
}
```

Block at-rules end in {}-block containing a subset of nested statements, which can be used as a statement of a style sheet as well as inside of conditional group rules.

- {{cssxref("@counter-style")}}
  - : Defines specific counter styles that are not part of the predefined set of styles.
- {{cssxref("@container")}}
  - : A conditional group rule that will apply its content if the container meets the [`<container-condition>`](/en-US/docs/Web/CSS/@container#container-condition)s.
- {{cssxref("@font-face")}}
  - : Describes the aspect of an external font to be downloaded.
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` and `@character-variant`)
  - : Define common names in {{cssxref("font-variant-alternates")}} for feature activated differently in OpenType.
- {{cssxref("@keyframes")}}
  - : Describes the aspect of intermediate steps in a CSS animation sequence.
- {{cssxref("@layer")}}
  - : Declares a cascade layer and defines the order of precedence in case of multiple cascade layers.
- {{cssxref("@media")}}
  - : A conditional group rule that will apply its content if the device meets the criteria of the condition defined using a _media query_.
- {{cssxref("@page")}}
  - : Describes the aspect of layout changes that will be applied when printing the document.
- {{cssxref("@property")}}
  - : Describes the aspect of custom properties and variables.
- {{cssxref("@scope")}}
  - : A conditional group rule that will apply its content if the device meets the criteria of the given condition.
- {{cssxref("@starting-style")}}
  - : A conditional group rule that will apply starting transition if the browser meets the criteria of the given condition.
- {{cssxref("@supports")}}
  - : A conditional group rule that will apply its content if the browser meets the criteria of the given condition.

## Index

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
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
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}

## Specifications

{{Specifications}}

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
  - [CSS nesting module](/en-US/docs/Web/CSS/CSS_nesting)
