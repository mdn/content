---
title: Styling columns
slug: Web/CSS/CSS_multicol_layout/Styling_columns
page-type: guide
---

{{CSSRef}}

As column boxes created inside multi-column (_multicol_) containers are anonymous boxes, styling individual columns is not possible, but we can style the gaps between the columns and the container in general. This guide explains how to change the gap and style rules between columns.

## Column gaps

The gap between columns is controlled using the {{CSSXref("column-gap")}} or {{CSSXref("gap")}} property. The `column-gap` property is defined in the [multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module. The `gap` property is defined in the [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module. This is a unified property to define gaps between boxes in all layouts that support gaps, including [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) and [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

The initial value of `column-gap` is `1em`, which prevents columns from running into each other. In other layout methods, `column-gap` is supported as a synonym for `gap`, but with an initial value of `0`. The keyword value `normal` sets `column-gap` to the initial value.

You can change the gap by using any {{cssxref("length")}} value. In the example below, the `column-gap` is set to `40px`.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

The allowed value for `column-gap` is a {{cssxref("length-percentage")}}, meaning percentages are allowed. Percentage values for `column-gap` are calculated as a percentage of the width of the multicol container.

## Column rules

The specification defines {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} and {{CSSXref("column-rule-color")}}, providing a shorthand {{CSSXref("column-rule")}}. These properties work in exactly the same way as the {{CSSXref("border")}} properties: any {{CSSXref("line-style")}} can be used as a `column-rule-style`, just as for valid {{CSSXref("border-style")}}.

These properties are applied to the element, which is the multicol container, and therefore, all columns will have the same rule. Rules are only drawn between columns and not on the outer edges. Rules are also only drawn between columns that have content.

In this next example, a 5px-dotted rule with a color of `rebeccapurple` has been created using the longhand values.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

Note that the rule itself does not take up any space: a wide rule will not push the columns apart to make space for the rule. Instead, the rule overlays the gap.

The example below uses a very wide rule of `40px` and a `10px` gap. The rule displays under the column content. To make space on both sides of the rule, the gap would need to be increased to be larger than `40px`.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Next steps

This article details all the current ways in which column boxes can be styled. In the next guide, we will take a look at making elements inside a container [span across all columns](/en-US/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns).
