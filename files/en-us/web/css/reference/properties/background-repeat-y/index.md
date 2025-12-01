---
title: background-repeat-y
slug: Web/CSS/Reference/Properties/background-repeat-y
page-type: css-property
browser-compat: css.properties.background-repeat-y
sidebar: cssref
---

The **`background-repeat-y`** [CSS](/en-US/docs/Web/CSS) property sets how background images are repeated, or not, along the vertical axis.

The {{cssxref("background-repeat-x")}} and `background-repeat-y` properties can also be set using the {{cssxref("background-repeat")}} or {{cssxref("background")}} shorthand properties.

{{InteractiveExample("CSS Demo: background-repeat-y")}}

```css interactive-example-choice
background-repeat-y: repeat;
```

```css interactive-example-choice
background-repeat-y: space;
```

```css interactive-example-choice
background-repeat-y: round;
```

```css interactive-example-choice
background-repeat-y: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") center /
    120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-repeat-y: repeat;
background-repeat-y: space;
background-repeat-y: round;
background-repeat-y: no-repeat;

/* Global values */
background-repeat-y: inherit;
background-repeat-y: initial;
background-repeat-y: revert;
background-repeat-y: revert-layer;
background-repeat-y: unset;
```

The `background-repeat-y` property is specified as one or more values, separated by commas.

## Values

- `repeat`
  - : The default value. The image is repeated as many times as needed to cover the entire height of the background image painting area, with the edge image being clipped if the height of the painting area is not a multiple of the height of your background image.

- `no-repeat`
  - : The image is not repeated. The position of the non-repeated background image is defined by the {{cssxref("background-position")}} CSS property.

- `space`
  - : The image is repeated as much as possible without clipping. The first and last images are pinned to the top and bottom of the element, and whitespace is distributed evenly between the images. The {{cssxref("background-position-y")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using `space` is when the height of the image is taller than the element, so there isn't enough room to display one image.

- `round`
  - : As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. If the image doesn't fit a whole number of times, it is rescaled so that it does.

## Description

The `background-repeat-y` property accepts a comma-separated list of [`<repetition`](#values) keyterms, which define how background image(s) should repeat vertically, or not repeat at all.

The default value is `repeat`. With this value, the background image repeats vertically, covering the entire height of the background paint area, with edge images being clipped to the size of the element. Whether the top, bottom, or both edges are clipped depends on the value of the corresponding {{cssxref("background-position")}} value. How many times images are repeated and how much the images on the edges are clipped depends on the size of the background painting area and height value of the corresponding {{cssxref("background-size")}} property.

The repeating images can be evenly spaced apart, ensuring the repeated images aren't clipped in the vertical direction. With the `space` value, if the height of the background paint area is not a multiple of the image's height or does not otherwise have a size that is a multiple of the background size in along the y-axis, there will be areas not covered by the background image.

Alternatively, the repeated background image can be stretched to cover the entire height of the background area without clipping. With `round`, if the height of the background paint area is not a multiple of the height of the background image, the repeated image is stretched to fill all the available space until there is room to add an additional repeated image. For example, given a background image that is 100px x 100px and a background paint area that is 1099px tall, the image will be repeated 10 times in the vertical direction with each image stretched to be 109.9px tall, possibly altering the image's {{glossary("aspect ratio")}} and distorting it. If the height of the paint area increases by 1px, becoming 1100px tall, an 11th image will fit vertically, with each image will be painted at 100px tall, no longer being stretched in the vertical direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background-repeat-y

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
    space
    <div class="three"></div>
  </li>
  <li>
    round
    <div class="four"></div>
  </li>
</ol>
```

#### CSS

```css
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url("star-solid.gif");
  width: 160px;
  height: 70px;
}

/* Background repeats */
.one {
  background-repeat-y: no-repeat;
}
.two {
  background-repeat-y: repeat;
}
.three {
  background-repeat-y: space;
}
.four {
  background-repeat-y: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-y: repeat) {
    body::before {
      content: "Your browser doesn't support the `background-repeat-y` property.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Result

In this example, each list item is matched with a different value of `background-repeat-y`.

{{EmbedLiveSample('Setting_background-repeat-y', 240, 460)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-repeat-x")}} and the {{cssxref("background-repeat")}} shorthand.
- {{cssxref("background")}} shorthand components: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} and {{cssxref("background-position-x")}}), and {{cssxref("background-size")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) module
- [Understanding aspect ratios](/en-US/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
