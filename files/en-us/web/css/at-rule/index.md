---
title: At-rules
slug: Web/CSS/At-rule
page-type: guide
spec-urls: https://drafts.csswg.org/css-conditional/
---

{{CSSRef}}

**At-rules** are [CSS statements](/en-US/docs/Web/CSS/Syntax#css_statements) that instruct CSS how to behave. They begin with an at sign, `@` (U+0040 COMMERCIAL AT), followed by an identifier, and include everything up to the next semicolon, `;` (U+003B SEMICOLON), or the next [CSS block](/en-US/docs/Web/CSS/Syntax#css_declaration_blocks), whichever comes first.

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
  - : An algorithm (has the syntactic form of an at-rule, but isn't a definition) that determines the fallback character set used by the style sheet ([CSS Syntax](/en-US/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Tells the CSS engine to include an external style sheet ([CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Defines the order of precedence in case of multiple cascade layers ([CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)). Also used as a [block at-rule](#layer_2) to define a layer's styles.
- {{cssxref("@namespace")}}
  - : Defines a default namespace for a style sheet or a namespace prefix that a selector only matches if the namespace and other selector components match ([CSS namespaces](/en-US/docs/Web/CSS/CSS_namespaces)).

### Block at-rules

```css
@identifier (RULE) {
}
```

Block at-rules end in a `{}`-block that contain nested rules, other at-rules, or property or descriptor declarations.

- {{cssxref("@counter-style")}}
  - : Define custom counter styles and extend predefined list styles ([CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : A conditional group rule that applies its content if the container meets the [`<container-condition>`](/en-US/docs/Web/CSS/@container#container-condition)s ([CSS containment](/en-US/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Defines font resource locations, both local and external, along with the style characteristics for when those resources are used with a declared {{cssxref("font-family")}} ([CSS fonts](/en-US/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (plus `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` and `@character-variant`)
  - : Controls font display per font-family by defining font-specific alternates, or custom names, to feature indexes in {{cssxref("font-variant-alternates")}} in OpenType ([CSS fonts](/en-US/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (and the `@-webkit-keyframes` alias)
  - : Define a named animation by describing defining CSS styles for intermediate steps (or keyframes) in the animation sequence ([CSS animations](/en-US/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Creates a named cascade layer with the CSS rules for that layer inside ([CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)). Also used as a [statement at-rule](#layer) to define the order of precedence in case of multiple cascade layers
- {{cssxref("@media")}}
  - : A conditional group rule that applies its content if the device meets the criteria of the condition defined using a _media query_ ([CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Specifies aspects of a page to be printed, such as its dimensions, orientation, and margins ([CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Defines custom position options which can be used to define fallback positioning and alignment options for anchor-positioned elements ([CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Defines a [CSS custom property](/en-US/docs/Web/CSS/Using_CSS_custom_properties), allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not ([CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Defines a scope in which to apply them to selected elements and the styles to apply to the elements in that scope ([CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@starting-style")}}
  - : Define the starting property values for an element to transition from when the element receives its first style update, such as when transitioning from `display: none` ([CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : A conditional group rule applies its content if the browser supports the CSS features of the given condition ([CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Opts the current document into a [view transition](/en-US/docs/Web/API/View_Transition_API), and the destination document as well in the case of cross-document navigation transitions.

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
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## Specifications

{{Specifications}}

## See also

- [CSS at-rule functions](/en-US/docs/Web/CSS/At-rule-functions)
- [Nesting CSS at-rules](/en-US/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [CSS statements](/en-US/docs/Web/CSS/Syntax#css_statements)
- [CSSRule](/en-US/docs/Web/API/CSSRule) interface
- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module
- [CSS syntax](/en-US/docs/Web/CSS/Syntax)
- [Specificity](/en-US/docs/Web/CSS/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/Inheritance)
