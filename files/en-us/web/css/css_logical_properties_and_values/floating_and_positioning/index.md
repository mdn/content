---
title: Logical properties for floating and positioning
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
page-type: guide
---

{{CSSRef}}

The [Logical Properties and Values specification](https://drafts.csswg.org/css-logical/) contains logical mappings for the physical values of {{cssxref("float")}} and {{cssxref("clear")}}, and also for the positioning properties used with [positioned layout](/en-US/docs/Web/CSS/CSS_Positioning). This guide takes a look at how to use these.

## Mapped properties and values

The table below details the properties and values discussed in this guide along with their physical mappings. They assume a horizontal {{cssxref("writing-mode")}}, with a left-to-right direction.

| Logical property or value          | Physical property or value       |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

In addition to these mapped properties there are some additional shorthand properties made possible by being able to address block and inline dimensions. These have no mapping to physical properties, aside from the {{cssxref("inset")}} property.

| Logical property            | Purpose                                                                         |
| --------------------------- | ------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Sets both of the above inset values for the inline dimension simultaneously.    |
| {{cssxref("inset-block")}}  | Sets both of the above inset values for the block dimension simultaneously.     |
| {{cssxref("inset")}}        | Sets all four inset values simultaneously with physical mapping of multi-value. |

## Float and clear example

The physical values used with the {{cssxref("float")}} and {{cssxref("clear")}} properties are `left`, `right` and `both`. The Logical Properties specification defines the values `inline-start` and `inline-end` as mappings for `left` and `right`.

In the example below I have two boxes — the first has the box floated with `float: left`, the second with `float: inline-start`. If you change the `writing-mode` to `vertical-rl` or the `direction` to `rtl` you will see that the left-floated box always sticks to the left, whereas the `inline-start`-floated item follows the `direction` and `writing-mode`.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## Example: Inset properties for positioned layout

Positioning generally allows us to position an element in a manner relative to its containing block — we essentially inset the item relative to where it would fall based on normal flow. To do this we have historically used the physical properties {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} and {{cssxref("left")}}.

These properties take a length or a percentage as a value, and relate to the user's screen dimensions.

New properties have been created in the Logical Properties specification for when you want the positioning to relate to the flow of text in your writing mode. These are as follows: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} and {{cssxref("inset-inline-end")}}.

In the below example I have used the `inset-block-start` and `inset-inline-end` properties to position the blue box using absolute positioning inside the area with the grey dotted border, which has `position: relative`. Change the `writing-mode` property to `vertical-rl`, or add `direction: rtl`, and see how the flow relative box stays with the text direction.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## New two- and four-value shorthands

As with other properties in the specification we have some new shorthand properties, which give the ability to set two or four values at once.

- {{cssxref("inset")}} — sets all four sides together with physical mapping.
- {{cssxref("inset-inline")}} — sets both logical inline insets.
- {{cssxref("inset-block")}} — sets both logical block insets.

## Example: Logical values for text-align

The {{cssxref("text-align")}} property has logical values that relate to text direction — rather than using `left` and `right` we can use `start` and `end`. In the below example I have set `text-align: right` in the first block and `text-align: end` in the second.

If you change the value of `direction` to `rtl` you will see that the alignment stays to the right for the first block, but goes to the logical end on the left in the second.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

This works more consistently when using box alignment that uses start and end rather than physical directions for alignment.
