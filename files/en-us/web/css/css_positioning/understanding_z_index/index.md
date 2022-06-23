---
title: Understanding CSS z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - Understanding_CSS_z-index
  - z-index
---
{{CSSRef}}

In the most basic cases, [HTML](/en-US/docs/Web/HTML) pages can be considered two-dimensional, because text, images, and other elements are arranged on the page without overlapping. In this case, there is a single rendering flow, and all elements are aware of the space taken by others. The {{cssxref("z-index")}} attribute lets you adjust the order of the layering of objects when rendering content.

> _In CSS 2.1, each box has a position in three dimensions. In addition to their horizontal and vertical positions, boxes lie along a "z-axis" and are formatted one on top of the other. Z-axis positions are particularly relevant when boxes overlap visually._

(from [CSS 2.1 Section 9.9.1 - Layered presentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

This means that CSS style rules allow you to position boxes on layers in addition to the normal rendering layer (layer 0). The Z position of each layer is expressed as an integer representing the stacking order for rendering. Greater numbers mean closer to the observer. Z position can be controlled with the CSS `z-index` property.

Using `z-index` appears extremely easy: a single property, assigned a single integer number, with an easy-to-understand behavior. However, when `z-index` is applied to complex hierarchies of HTML elements, its behavior can be hard to understand or predict. This is due to complex stacking rules. In fact a dedicated section has been reserved in the CSS specification [CSS-2.1 Appendix E](https://www.w3.org/TR/CSS21/zindex.html) to explain these rules better.

This article will try to explain those rules, with some simplification and several examples.

1. [Stacking without the z-index property](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
2. [Stacking with floated blocks](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): How floating elements are handled with stacking.
3. [Using z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): How to use `z-index` to change default stacking.
4. [The stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): Notes on the stacking context.
5. [Stacking context example 1](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-level HTML hierarchy, `z-index` on the last level
6. [Stacking context example 2](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-level HTML hierarchy, `z-index` on all levels
7. [Stacking context example 3](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-level HTML hierarchy, `z-index` on the second level
