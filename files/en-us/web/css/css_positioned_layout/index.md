---
title: CSS positioned layout
slug: Web/CSS/CSS_positioned_layout
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-position/
  - https://drafts.csswg.org/css-position-4/
sidebar: cssref
---

The **CSS positioned layout** module defines the coordinate-based positioning and offsetting schemes available in CSS and the properties used to position and stack elements on a web page. The module is best known for defining the basic positioning methods, including relative positioning, sticky positioning, absolute positioning, and fixed positioning. It also defines how positioned elements are painted and layered, clarifying stacking behavior and visual order.

The positioned layout module defines the physical, logical, and shorthand {{glossary("inset properties")}}. The logical properties enable developing with internationalization and responsiveness in mind.

Like all CSS modules, this module impacts and is impacted by other modules. This module describes how positioning interacts with other layout modules such as [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) and [CSS Grid layout](/en-US/docs/Web/CSS/CSS_grid_layout). Other modules, such as [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning), build upon this module to enable positioning elements relative to other elements and layers.

## Reference

### Properties

- {{cssxref("bottom")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("left")}}
- {{cssxref("overlay")}}
- {{cssxref("position")}}
- {{cssxref("right")}}
- {{cssxref("top")}}

### Selectors

- {{cssxref("::backdrop")}}

### Glossary and terms

- [Block direction](/en-US/docs/Glossary/Flow_relative_values#block_direction)
- [Containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block)
- {{glossary("Flow relative values")}}
- [Inline direction](/en-US/docs/Glossary/Flow_relative_values#inline_direction)
- {{glossary("Inset properties")}}
- [Positioning context](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative position](/en-US/docs/Web/CSS/position#relative_positioning)
- {{glossary("Stacking context")}}
- [Static positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{glossary("Top layer")}}

## Guides

- [Understanding z-index](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Presents the notion of stacking context and explains how z-ordering works, with several examples.
- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : The stacking rules that apply when `z-index` is not used.
- [Stacking floating elements](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : How floating elements are handled with stacking.
- [Using `z-index`](/en-US/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : How to use `z-index` to change default stacking.
- [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS stacking context, the CSS features that create new stacking contexts, and nested stacking contexts.
- [Learn: positioning](/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : The different position values and how to use them.

## Related concepts

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} element

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} shorthand
  - {{cssxref("position-visibility")}}

- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
  - {{cssxref("transform")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("translate")}}

## Specifications

{{Specifications}}

## See also

- Other CSS `*-position` properties:
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("font-synthesis-position")}}
  - {{cssxref("font-variant-position")}}
  - {{cssxref("list-style-position")}}
  - {{cssxref("mask-position")}}
  - {{cssxref("object-position")}}
  - {{cssxref("offset-position")}}
  - {{cssxref("ruby-position")}}
  - {{cssxref("text-emphasis-position")}}
  - {{cssxref("text-underline-position")}}
- Position-related [data types](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
  - {{cssxref("baseline-position")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_scroll_snap) module
  - {{glossary("Snap positions")}}
