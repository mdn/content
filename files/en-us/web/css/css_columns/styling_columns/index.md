---
title: Styling Columns
slug: Web/CSS/CSS_Columns/Styling_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
{{CSSRef}}

As column boxes created inside multicol containers are anonymous boxes, there is little we can do to style them. However, we do have a few things that we can do. This guide explains how to change the gap and style rules between columns.

## Can I Style the Column Boxes?

Sadly, not at present. The anonymous boxes that make up your columns can’t be targeted in any way, meaning it isn’t possible to change a box's background color or have one column larger than the others. Perhaps in future versions of the specification it might be. For now, however, we are able to change the spacing and add lines between columns.

## The `column-gap` property

The gap between our columns is controlled by the `column-gap` property. This property was originally defined in the Multi-column Layout specification. However, it is now defined in [Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment) in order to unify gaps between boxes in other specifications such as [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout).

The initial value of `column-gap` in multicol is `1em`. This means your columns will not run into each other. In other layout methods the initial value for `column-gap` is 0. If you use the keyword value “normal” the gap will be set to 1em.

You can change the gap by using any length unit as the value of `column-gap`. In the example below, the `column-gap` is set to 40px.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

The allowed value for `column-gap` is a `<length-percentage>`, this means percentages are allowed. Percentage values for `column-gap` are calculated as a percentage of the width of the multicol container.

## Column rules

The specification defines `column-rule-width`, `column-rule-style` and `column-rule-color`, providing a shorthand `column-rule`. These properties work in exactly the same way as the `border` properties: any valid `border-style` can be used as a `column-rule-style`.

These properties are applied to the element which is the multicol container and therefore all columns will have the same rule. Rules are only drawn between columns and not on the outer edges. Rules should also only be drawn between columns which have content.

In this next example I have created a 5px dotted rule with a color of rebeccapurple, using the longhand values.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

Note that the rule itself does not take up any space: a wide rule will not push the columns apart to make space for the rule. Instead, the rule overlays the gap.

In this next example we have a very wide rule of 40px and a 10px gap. The rule displays under the content of the columns. In order to make space on both sides of the rule, the gap would need to be increased to be larger than 40px.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Summary

This details all the current ways in which column boxes can be styled. In the next guide we will take a look at making elements inside a container [span across all columns](/en-US/docs/Web/CSS/CSS_Columns/Spanning_Columns).
