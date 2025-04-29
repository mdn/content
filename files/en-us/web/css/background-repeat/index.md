---
title: background-repeat
slug: Web/CSS/background-repeat
page-type: css-property
browser-compat: css.properties.background-repeat
---

{{CSSRef}}

The **`background-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

{{InteractiveExample("CSS Demo: background-repeat")}}

```css interactive-example-choice
background-repeat: repeat-x;
```

```css interactive-example-choice
background-repeat: repeat;
```

```css interactive-example-choice
background-repeat: space;
```

```css interactive-example-choice
background-repeat: round;
```

```css interactive-example-choice
background-repeat: no-repeat;
```

```css interactive-example-choice
background-repeat: space repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #ccc url("/shared-assets/images/examples/moon.jpg") center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

## Description

The property accepts a comma-separated list of two [`<repeat-style>`](#values) keyterms, or one keyterm as a shorthand for the two values. When two values are provided, the first value defines the horizontal repetition behavior and the second value defines the vertical behavior.
Property values can be used to repeat only horizontally, vertically, or not at all.

The default value is `repeat repeat`. With this value, the background image maintains its intrinsic {{glossary("aspect ratio")}}, repeating both horizontally and vertically to cover the entire background paint area, with edge images being clipped to the size of the element. Which edges clipped depends on the value of the corresponding {{cssxref("background-position")}} value. How many times they are repeated and how much the images on the edges are clipped depends on the size of the background painting area and the corresponding {{cssxref("background-size")}} value.

The repeating images can be evenly spaced apart, ensuring the repeated image maintains its aspect ratio without being clipped. With the `space` value, if the background paint area has a different aspect ratio than the image or does not otherwise have a size that is a multiple of the background size in either direction, there will be areas not covered by the background image.

Alternatively, the repeated background image can be stretched to cover the entire area without clipping. With `round`, the repeated image is stretched to fill all the available space until there is room to add an additional repeated image if the aspect ratio of the background image is not the same as the paint area's aspect ratio. For example, given a background image that is 100px x 100px and a background paint area of 1099px x 750px, the image will be repeated 10 times in the horizontal direction and 7 times vertically, for a total of 70 repetitions, with each image stretched in both directions to be 109.9px x 105px, altering the image's aspect ratio and potentially distorting it. If the width of the paint area increases by 1px, becoming 1100px wide, an 11th image will fit horizontally for a total of 77 image repetitions, with each image being painted at 100px wide and 105px tall, stretched only in the vertical direction.

## Values

The property accepts a comma-separated list of two `<repeat-style>` keyterms or one keyterm as a shorthand for the two values. The first value is the horizontal repetition. The second value is the vertical behavior. If only a single value is set to a value other than `repeat-x` or `repeat-y`, that value is applied the both vertices. The values include:

- `repeat`

  - : The default value. The image is repeated as many times as needed to cover the entire background image painting area, with the edge image being clipped if the dimension of the painting area is not a multiple of the dimension of your background image.

- `no-repeat`

  - : The image is not repeated (and hence the background image painting area will not necessarily be entirely covered). The position of the non-repeated background image is defined by the {{cssxref("background-position")}} CSS property.

- `space`

  - : The image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images. The {{cssxref("background-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using `space` is when there isn't enough room to display one image.

- `round`

  - : As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. This is the only `<repeat-style>` value that can lead to the distortion of the background image's {{glossary("aspect ratio")}}, which will occur if the aspect ratio of the background image differs from the aspect ratio of the background paint area.

- `repeat-x`

  - : Shorthand for `repeat no-repeat`, the background image repeats horizontally only, with the edge image being clipped if the width of the paint area is not a multiple of the background image's width.

- `repeat-y`

  - : Shorthand for `no-repeat repeat`, the background image repeats vertically only, with the edge image being clipped if the height of the paint area is not a multiple of the background image's height.

When one `<repeat-style>` keyterm is provided, the value is shorthand for the following two-value syntax:

| Single value | Two-value equivalent  |
| ------------ | --------------------- |
| `repeat-x`   | `repeat no-repeat`    |
| `repeat-y`   | `no-repeat repeat`    |
| `repeat`     | `repeat repeat`       |
| `space`      | `space space`         |
| `round`      | `round round`         |
| `no-repeat`  | `no-repeat no-repeat` |

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background-repeat

#### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css
/* Shared for all DIVS in example */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(star-solid.gif);
  width: 160px;
  height: 70px;
}

/* Background repeats */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Multiple images */
.seven {
  background-image: url(star-solid.gif), url(favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### Result

In this example, each list item is matched with a different value of `background-repeat`.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other {{cssxref("background")}} shorthand components: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} and {{cssxref("background-position-y")}}), and {{cssxref("background-size")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds) module
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
