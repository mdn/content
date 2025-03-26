---
title: Logical properties for margins, borders, and padding
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
page-type: guide
---

{{CSSRef}}

The [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module defines flow-relative mappings for the various margin, border, and padding properties and their shorthands. In this guide, we take a look at these.

If you look at the [logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values) module, you may notice the list of module properties is very long. This is mostly because there are four longhand values each for margin, border, and padding side, plus all the shorthand values.

## Mappings for margins, borders, and padding

The module details mappings for each logical value to a physical counterpart. The table below maps these values for when the {{cssxref("writing-mode")}} is `horizontal-tb` — with a left to right direction. The inline direction therefore runs horizontally — left to right — and {{cssxref("margin-inline-start")}} would be equivalent to {{cssxref("margin-left")}}.

If you were using a `horizontal-tb` writing mode with a right-to-left text direction then {{cssxref("margin-inline-start")}} would be the same as {{cssxref("margin-right")}}, and in a vertical writing mode it would be the same as using {{cssxref("margin-top")}}.

| {{glossary("Logical properties","Logical property")}} | {{glossary("Physical properties", "Physical property")}} |
| ----------------------------------------------------- | -------------------------------------------------------- |
| {{cssxref("border-block-end")}}                       | {{cssxref("border-bottom")}}                             |
| {{cssxref("border-block-end-color")}}                 | {{cssxref("border-bottom-color")}}                       |
| {{cssxref("border-block-end-style")}}                 | {{cssxref("border-bottom-style")}}                       |
| {{cssxref("border-block-end-width")}}                 | {{cssxref("border-bottom-width")}}                       |
| {{cssxref("border-block-start")}}                     | {{cssxref("border-top")}}                                |
| {{cssxref("border-block-start-color")}}               | {{cssxref("border-top-color")}}                          |
| {{cssxref("border-block-start-style")}}               | {{cssxref("border-top-style")}}                          |
| {{cssxref("border-block-start-width")}}               | {{cssxref("border-top-width")}}                          |
| {{cssxref("border-inline-end")}}                      | {{cssxref("border-right")}}                              |
| {{cssxref("border-inline-end-color")}}                | {{cssxref("border-right-color")}}                        |
| {{cssxref("border-inline-end-style")}}                | {{cssxref("border-right-style")}}                        |
| {{cssxref("border-inline-end-width")}}                | {{cssxref("border-right-width")}}                        |
| {{cssxref("border-inline-start")}}                    | {{cssxref("border-left")}}                               |
| {{cssxref("border-inline-start-color")}}              | {{cssxref("border-left-color")}}                         |
| {{cssxref("border-inline-start-style")}}              | {{cssxref("border-left-style")}}                         |
| {{cssxref("border-inline-start-width")}}              | {{cssxref("border-left-width")}}                         |
| {{cssxref("border-start-start-radius")}}              | {{cssxref("border-top-left-radius")}}                    |
| {{cssxref("border-end-start-radius")}}                | {{cssxref("border-bottom-left-radius")}}                 |
| {{cssxref("border-start-end-radius")}}                | {{cssxref("border-top-right-radius")}}                   |
| {{cssxref("border-end-end-radius")}}                  | {{cssxref("border-bottom-right-radius")}}                |
| {{cssxref("margin-block-end")}}                       | {{cssxref("margin-bottom")}}                             |
| {{cssxref("margin-block-start")}}                     | {{cssxref("margin-top")}}                                |
| {{cssxref("margin-inline-end")}}                      | {{cssxref("margin-right")}}                              |
| {{cssxref("margin-inline-start")}}                    | {{cssxref("margin-left")}}                               |
| {{cssxref("padding-block-end")}}                      | {{cssxref("padding-bottom")}}                            |
| {{cssxref("padding-block-start")}}                    | {{cssxref("padding-top")}}                               |
| {{cssxref("padding-inline-end")}}                     | {{cssxref("padding-right")}}                             |
| {{cssxref("padding-inline-start")}}                   | {{cssxref("padding-left")}}                              |

There are also some additional shorthands, made possible because we can target both block or both inline edges of the box simultaneously. These shorthands have no physical equivalent.

| Property                           | Purpose                                                                                                                |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Sets {{cssxref("border-color")}}, {{cssxref("border-style")}}, and {{cssxref("border-width")}} for both block borders. |
| {{cssxref("border-block-color")}}  | Sets `border-color` for both block borders.                                                                            |
| {{cssxref("border-block-style")}}  | Sets `border-style` for both block borders.                                                                            |
| {{cssxref("border-block-width")}}  | Sets `border-width` for both block borders.                                                                            |
| {{cssxref("border-inline")}}       | Sets `border-color`, `-style`, and `-width` for both inline borders.                                                   |
| {{cssxref("border-inline-color")}} | Sets `border-color` for both inline borders.                                                                           |
| {{cssxref("border-inline-style")}} | Sets `border-style` for both inline borders.                                                                           |
| {{cssxref("border-inline-width")}} | Sets `border-width` for both inline borders.                                                                           |
| {{cssxref("margin-block")}}        | Sets all the block {{cssxref("margin")}}s.                                                                             |
| {{cssxref("margin-inline")}}       | Sets all the inline `margin`s.                                                                                         |
| {{cssxref("padding-block")}}       | Sets the block {{cssxref("padding")}}.                                                                                 |
| {{cssxref("padding-inline")}}      | Sets the inline `padding`.                                                                                             |

## Margin examples

The mapped margin properties of {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, and {{cssxref("margin-inline-end")}} can be used instead of their physical counterparts.

This example has two boxes with different sized margins to each edge. An extra container with a border has been included to make the margin more apparent.

One box uses physical properties and the other logical properties. Try changing the {{cssxref("direction")}} property to `rtl` to cause the boxes to display in a right-to-left direction; the margins on the first box will stay in the same place, while the margins on the inline dimension of the second box will switch.

Also try changing the `writing-mode` from `horizontal-tb` to `vertical-rl`. Notice how the margins stay in the same place for the first box, but switch around to follow the text direction in the second.

```html live-sample___margin-longhands
<div class="container">
  <div class="inner">
    <div class="physical box">
      margin-top: 5px<br />
      margin-right: 0<br />
      margin-bottom: 2em<br />
      margin-left: 50px
    </div>
  </div>
  <div class="inner">
    <div class="logical box">
      margin-block-start: 5px<br />
      margin-inline-end: 0<br />
      margin-block-end: 2em<br />
      margin-inline-start: 50px
    </div>
  </div>
</div>
```

```css hidden live-sample___margin-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.inner {
  border: 2px dotted grey;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___margin-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  margin-top: 5px;
  margin-right: 0;
  margin-bottom: 2em;
  margin-left: 50px;
}

.logical {
  margin-block-start: 5px;
  margin-inline-end: 0;
  margin-block-end: 2em;
  margin-inline-start: 50px;
}
```

{{EmbedLiveSample("margin-longhands", "", "300px")}}

### Margin shorthands

There are shorthands available to target either both the inline sides or both the block sides, {{cssxref("margin-inline")}} and {{cssxref("margin-block")}} respectively. Each accepts two values. The first value will apply to the start of that dimension, the second to the end. If only one value is set, it is applied to both.

In a horizontal writing mode this CSS would apply a `5px` margin to the top of the box and a `10px` margin to the bottom.

```css
.box {
  margin-block: 5px 10px;
}
```

## Padding examples

The mapped padding properties of {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, and {{cssxref("padding-inline-end")}} can be used instead of their physical counterparts.

In this example, there are two boxes. One has physical padding properties set and the other uses logical padding properties. With a `writing-mode` of `horizontal-tb`, both boxes should appear the same.

Try changing the `direction` property to `rtl` to cause the boxes to display in a right-to-left direction. The padding on the first box will stay in the same place, whereas the padding on the inline dimension of the second box will switch.

You can also try changing the `writing-mode` from `horizontal-tb` to `vertical-rl`. Again, notice how the padding stays in the same place for the first box, but switches around to follow the text direction in the second.

```html live-sample___padding-longhands
<div class="container">
  <div class="physical box">
    padding-top: 5px<br />
    padding-right: 0<br />
    padding-bottom: 2em<br />
    padding-left: 50px
  </div>

  <div class="logical box">
    padding-block-start: 5px<br />
    padding-inline-end: 0<br />
    padding-block-end: 2em<br />
    padding-inline-start: 50px
  </div>
</div>
```

```css hidden live-sample___padding-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  margin: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___padding-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  padding-top: 5px;
  padding-right: 0;
  padding-bottom: 2em;
  padding-left: 50px;
}

.logical {
  padding-block-start: 5px;
  padding-inline-end: 0;
  padding-block-end: 2em;
  padding-inline-start: 50px;
}
```

{{EmbedLiveSample("padding-longhands", "", "300px")}}

### Padding shorthands

As with margin, there are two-value shorthands for padding — {{cssxref("padding-inline")}} and {{cssxref("padding-block")}} — which allow you to set the padding of the two inline, and two block dimensions, respectively.

In a horizontal `writing-mode`, this CSS would apply `5px` of padding to the top of the box and `10px` of padding to the bottom:

```css
.box {
  padding-block: 5px 10px;
}
```

## Border examples

The border properties are the main reason that this module seems to have so many properties, as it provides longhand logical properties for the color, width, and style of the border on each side of a box, along with the shorthand to set all three at once for each side. As with margin and padding, there is a mapped version of each physical property.

The demo below uses some longhands and three shorthand values. As with the other demos, try changing the `direction` property to `rtl` to cause the boxes to display in a right-to-left direction, or changing the `writing-mode` from `horizontal-tb` to `vertical-rl`.

```html live-sample___border-longhands
<div class="container">
  <div class="physical box">Borders using physical properties.</div>
  <div class="logical box">Borders using logical properties.</div>
</div>
```

```css hidden live-sample___border-longhands
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  display: flex;
}
.box {
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  margin: 10px;
  width: 220px;
  height: 220px;
}
```

```css live-sample___border-longhands
.box {
  writing-mode: horizontal-tb;
  direction: ltr;
}

.physical {
  border-top: 2px solid hotpink;
  border-right-style: dotted;
  border-right-color: goldenrod;
  border-right-width: 5px;
  border-bottom: 4px double black;
  border-left: none;
}

.logical {
  border-block-start: 2px solid hotpink;
  border-inline-end-style: dotted;
  border-inline-end-color: goldenrod;
  border-inline-end-width: 5px;
  border-block-end: 4px double black;
  border-inline-start: none;
}
```

{{EmbedLiveSample("border-longhands", "", "260px")}}

### Border shorthands

There are two-value shorthands to set the width, style, and color of the block or inline dimension, and shorthands to set all three values in the block or inline dimension. The below code, in a horizontal writing mode, would give you a `2px green solid` border on the top and bottom of the box, and a `4px dotted purple` border on the left and right.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flow relative border-radius properties

The module has flow-relative equivalents for the {{cssxref("border-radius")}} longhands. The below example, in a horizontal `writing-mode`, would set the top-right border radius to `1em`, the bottom-right to `0`, the bottom-left to `20px` and the top-left to `40px`.

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

Using any four-value shorthand such as `margin`, `padding`, or `border` will currently use the physical versions, so if following the flow of the document is important, use the longhand properties for the time being.
