---
title: background-repeat
slug: Web/CSS/background-repeat
page-type: css-property
browser-compat: css.properties.background-repeat
---

{{CSSRef}}

The **`background-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

## Description

The property accepts two `<repeat-style>` keyterms, or one keyterm as a shorthand for the two values. When two values are provided, the first value defines the horizontal repetition behavior and the second value defines the vertical behavior.

The default value is `repeat repeat`. By default, the background image maintains its intrinsic {{glossary("aspect ratio")}}, repeating both horizontally and vertically to cover the entire background paint area, with edge images being clipped to the size of the element. Property values can be used to repeat only horizontally, vertically, or not at all.

The repeating images can be evenly spaced apart, ensuring it maintains its aspect ratio without being clipped, with the `space` value. When space is used, if the background paint area has a different aspect ratio than the image or does not otherwise have a size that a multiple of the background size in both directions, there will be areas not covered by the background image.

Alternatively, the repeated background image can be scaled to cover the entire area without clipping, by setting the `round` value. This value by lead the background image to be stretched if the aspect ratio of the background image is not the same as the paint area's aspect ratio. With `round`, the repeated images will stretch to fill all the available space until there is room to add an additional repeated image. When an additional image is able to fit. For example, if an image has a width of `100px`, the image will be repeated 10 times in the horizontal direction when the container is 1000px to 1099px wide, with the image being stretch to 109.9px wide. If the width of the container increases by 1px, to be 1100px wide, an 11th image will fit, with all the images being 100px wide again.

When one `<repeat-style>` keyterm is provided, the value is shorthand for the following two-value syntax:

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Single value</strong></td>
      <td><strong>Two-value equivalent</strong></td>
    </tr>
    <tr>
      <td><code>repeat-x</code></td>
      <td><code>repeat no-repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat-y</code></td>
      <td><code>no-repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat</code></td>
      <td><code>repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>space</code></td>
      <td><code>space space</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td><code>round round</code></td>
    </tr>
    <tr>
      <td><code>no-repeat</code></td>
      <td><code>no-repeat no-repeat</code></td>
    </tr>
  </tbody>
</table>

## Syntax

```css
/* Keyword values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
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

### Values

The `<repeat-style>` values are:

- `repeat`

  - : The default value. The image is repeated as many times as needed to cover the entire background image painting area, with the edge image being clipped if the dimension of the painting area is not a multiple of the dimension of your background image.

- `no-repeat`

  - : The image is not repeated (and hence the background image painting area will not necessarily be entirely covered). The position of the non-repeated background image is defined by the {{cssxref("background-position")}} CSS property.

- `space`

  - : The image is repeated as much as possible without clipping. The first and last images are pinned to either side of the element, and whitespace is distributed evenly between the images. The {{cssxref("background-position")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using <code>space</code> is when there isn't enough room to display one image.

- `round`

  - : As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. This is the only `<repeat-style>` value that can lead to the distortion of the background image's {{glossary("aspect ratio")}}, which will occur if the aspect ratio of the background image differs from the aspect ratio of the background paint area.

- `repeat-x`

  - : Shorthand for `repeat no-repeat`, the background image repeats horizontally only, with the edge image being clipped if the width of the paint area is not a multiple of the background image's width.

- `repeat-y`

  - : Shorthand for `no-repeat repeat`, the background image repeats vertically only, with the edge image being clipped if the height of the paint area is not a multiple of the background image's height.

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
  background-image: url(starsolid.gif);
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
  background-image: url(starsolid.gif), url(favicon32.png);
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

- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
