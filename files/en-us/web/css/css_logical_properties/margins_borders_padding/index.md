---
title: Logical properties for margins, borders, and padding
slug: Web/CSS/CSS_Logical_Properties/Margins_borders_padding
tags:
  - CSS
  - CSS Logical Properties
  - Guide
  - concepts
  - writing modes
---
{{CSSRef}}

The [Logical Properties and Values specification](https://drafts.csswg.org/css-logical/) defines flow-relative mappings for the various margin, border, and padding properties and their shorthands. In this guide, we take a look at these.

If you have looked at the main page for [CSS Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties) you will see there are a huge number of properties listed. This is mostly because there are four longhand values each for margin, border, and padding side, plus all the shorthand values.

## Mappings for margins, borders, and padding

The specification details mappings for each logical value to a physical counterpart. In the table below I have given these mapped values assuming that the {{cssxref("writing-mode")}} in use is `horizontal-tb` — with a left to right direction. The inline direction therefore runs horizontally — left to right — and {{cssxref("margin-inline-start")}} would be equivalent to {{cssxref("margin-left")}}.

If you were using a `horizontal-tb` writing mode with a right-to-left text direction then {{cssxref("margin-inline-start")}} would be the same as {{cssxref("margin-right")}}, and in a vertical writing mode it would be the same as using {{cssxref("margin-top")}}.

| Logical property                                     | Physical Property                                        |
| ---------------------------------------------------- | -------------------------------------------------------- |
| {{cssxref("border-block-end")}}             | {{cssxref("border-bottom")}}                     |
| {{cssxref("border-block-end-color")}}     | {{cssxref("border-bottom-color")}}             |
| {{cssxref("border-block-end-style")}}     | {{cssxref("border-bottom-style")}}             |
| {{cssxref("border-block-end-width")}}     | {{cssxref("border-bottom-width")}}             |
| {{cssxref("border-block-start")}}         | {{cssxref("border-top")}}                         |
| {{cssxref("border-block-start-color")}} | {{cssxref("border-top-color")}}                 |
| {{cssxref("border-block-start-style")}} | {{cssxref("border-top-style")}}                 |
| {{cssxref("border-block-start-width")}} | {{cssxref("border-top-width")}}                 |
| {{cssxref("border-inline-end")}}         | {{cssxref("border-right")}}                     |
| {{cssxref("border-inline-end-color")}} | {{cssxref("border-right-color")}}             |
| {{cssxref("border-inline-end-style")}} | {{cssxref("border-right-style")}}             |
| {{cssxref("border-inline-end-width")}} | {{cssxref("border-right-width")}}             |
| {{cssxref("border-inline-start")}}         | {{cssxref("border-left")}}                     |
| {{cssxref("border-inline-start-color")}} | {{cssxref("border-left-color")}}             |
| {{cssxref("border-inline-start-style")}} | {{cssxref("border-left-style")}}             |
| {{cssxref("border-inline-start-width")}} | {{cssxref("border-left-width")}}             |
| {{cssxref("border-start-start-radius")}} | {{cssxref("border-top-left-radius")}}         |
| {{cssxref("border-end-start-radius")}} | {{cssxref("border-bottom-left-radius")}}     |
| {{cssxref("border-start-end-radius")}} | {{cssxref("border-top-right-radius")}}     |
| {{cssxref("border-end-end-radius")}}     | {{cssxref("border-bottom-right-radius")}} |
| {{cssxref("margin-block-end")}}             | {{cssxref("margin-bottom")}}                     |
| {{cssxref("margin-block-start")}}         | {{cssxref("margin-top")}}                         |
| {{cssxref("margin-inline-end")}}         | {{cssxref("margin-right")}}                     |
| {{cssxref("margin-inline-start")}}         | {{cssxref("margin-left")}}                     |
| {{cssxref("padding-block-end")}}         | {{cssxref("padding-bottom")}}                 |
| {{cssxref("padding-block-start")}}         | {{cssxref("padding-top")}}                     |
| {{cssxref("padding-inline-end")}}         | {{cssxref("padding-right")}}                     |
| {{cssxref("padding-inline-start")}}     | {{cssxref("padding-left")}}                     |

There are also some additional shorthands, made possible because we can target both block or both inline edges of the box simultaneously. These shorthands have no physical equivalent.

| Property                                     | Purpose                                                                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}         | Sets {{cssxref("border-color")}}, {{cssxref("border-style")}}, and {{cssxref("border-width")}} for both block borders. |
| {{cssxref("border-block-color")}} | Sets `border-color` for both block borders.                                                                                                       |
| {{cssxref("border-block-style")}} | Sets `border-style` for both block borders.                                                                                                       |
| {{cssxref("border-block-width")}} | Sets `border-width` for both block borders.                                                                                                       |
| {{cssxref("border-inline")}}         | Sets `border-color`, `-style`, and `-width` for both inline borders.                                                                              |
| {{cssxref("border-inline-color")}} | Sets `border-color` for both inline borders.                                                                                                      |
| {{cssxref("border-inline-style")}} | Sets `border-style` for both inline borders.                                                                                                      |
| {{cssxref("border-inline-width")}} | Sets `border-width` for both inline borders.                                                                                                      |
| {{cssxref("margin-block")}}         | Sets all the block {{cssxref("margin")}}s.                                                                                                 |
| {{cssxref("margin-inline")}}         | Sets all the inline `margin`s.                                                                                                                    |
| {{cssxref("padding-block")}}         | Sets the block {{cssxref("padding")}}.                                                                                                      |
| {{cssxref("padding-inline")}}     | Sets the inline `padding`.                                                                                                                        |

## Margin examples

The mapped margin properties of {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, and {{cssxref("margin-inline-end")}} can be used instead of their physical counterparts.

In the example below I have created two boxes and added different sized margins to each edge. I have added an extra container with a border to make the margin more obvious to see.

One box uses physical properties and the other logical properties. Try changing the {{cssxref("direction")}} property to `rtl` to cause the boxes to display in a right-to-left direction, the margins on the first box will stay in the same place, while the margins on the inline dimension of the second box will switch.

You can also try changing the `writing-mode` from `horizontal-tb` to `vertical-rl`. Again, notice how the margins stay in the same place for the first box, but switch around to follow the text direction in the second.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Margin shorthands

As we can now target both sides of a box — either both inline sides or both block sides — there are new shorthands available, {{cssxref("margin-inline")}} and {{cssxref("margin-block")}}, which accept two values. The first value will apply to the start of that dimension, the second to the end. If you only use one value it is applied to both.

In a horizontal writing mode this CSS would apply a 5px margin to the top of the box and a 10px margin to the bottom.

```css
.box {
  margin-block: 5px 10px;
}
```

## Padding examples

The mapped padding properties of {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, and {{cssxref("padding-inline-end")}} can be used instead of their physical counterparts.

In the example below I have two boxes, one of which is using physical padding properties and the other logical padding properties. With a `writing-mode` of `horizontal-tb`, both boxes should appear the same.

Try changing the `direction` property to `rtl` to cause the boxes to display in a right-to-left direction. The padding on the first box will stay in the same place, whereas the padding on the inline dimension of the second box will switch.

You can also try changing the `writing-mode` from `horizontal-tb` to `vertical-rl`. Again, notice how the padding stays in the same place for the first box, but switches around to follow the text direction in the second.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Padding shorthands

As with margin, there are two-value shorthands for padding — {{cssxref("padding-inline")}} and {{cssxref("padding-block")}} — which allow you to set the padding of the two inline, and two block dimensions, respectively.

In a horizontal `writing-mode` this CSS would apply `5px` of padding to the top of the box and 10px of padding to the bottom:

```css
.box {
  padding-block: 5px 10px;
}
```

## Border examples

The border properties are the main reason that Logical Properties and Values seems to have so many properties, as we have the longhands for the color, width, and style of the border on each side of a box, along with the shorthand to set all three at once for each side. As with margin and padding we have a mapped version of each physical property.

The demo below uses some longhands and three shorthand values. As with the other demos try changing the `direction` property to `rtl` to cause the boxes to display in a right-to-left direction, or changing the `writing-mode` from `horizontal-tb` to `vertical-rl`.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### New border shorthands

There are two-value shorthands to set the width, style and, color of the block or inline dimension, and two-value shorthands to set all three values in the block or inline dimension. The below code, in a horizontal writing mode, would give you a 2px green solid border on the top and bottom of the box, and a 4px dotted purple border on the left and right.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flow relative border-radius properties

The specification has fairly recently added flow-relative values for the {{cssxref("border-radius")}} longhands. These have not yet been implemented by any browser. The below example, in a horizontal `writing-mode`, would set the top-right border radius to 1em, the bottom-right to 0, the bottom-left to 20px and the top-left to 40px.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Indicating logical values for the 4-value shorthand syntax

The specification makes a suggestion for the four-value shorthands such as the `margin` property, however the final decision on how this should be indicated is as yet unresolved, and is discussed in [this issue](https://github.com/w3c/csswg-drafts/issues/1282).

Using any four-value shorthand such as margin, padding, or border will currently use the physical versions, so if following the flow of the document is important, use the longhand properties for the time being.
