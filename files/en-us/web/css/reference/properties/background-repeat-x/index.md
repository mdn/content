---
title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
page-type: css-property
browser-compat: css.properties.background-repeat-x
sidebar: cssref
---

The **`background-repeat-x`** [CSS](/en-US/docs/Web/CSS) property sets how background images are repeated, or not, along the horizontal axis.

The `background-repeat-x` and {{cssxref("background-repeat-y")}} properties can also be set using the {{cssxref("background-repeat")}} or {{cssxref("background")}} shorthand properties.

{{InteractiveExample("CSS Demo: background-repeat-x")}}

```css interactive-example-choice
background-repeat-x: repeat;
```

```css interactive-example-choice
background-repeat-x: space;
```

```css interactive-example-choice
background-repeat-x: round;
```

```css interactive-example-choice
background-repeat-x: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") no-repeat
    center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## Syntax

```css
/* Keyword values */
background-repeat-x: repeat;
background-repeat-x: space;
background-repeat-x: round;
background-repeat-x: no-repeat;

/* Global values */
background-repeat-x: inherit;
background-repeat-x: initial;
background-repeat-x: revert;
background-repeat-x: revert-layer;
background-repeat-x: unset;
```

The `background-repeat-x` property is specified as one or more values, separated by commas.

## Values

- `repeat`
  - : The default value. The image is repeated as many times as needed to cover the entire width of the background image painting area, with the edge image being clipped if the width of the painting area is not a multiple of the width of your background image.

- `no-repeat`
  - : The image is not repeated. The position of the non-repeated background image is defined by the {{cssxref("background-position")}} CSS property.

- `space`
  - : The image is repeated as much as possible without clipping. The first and last images are pinned to the left and right of the element, and whitespace is distributed evenly between the images. The {{cssxref("background-position-x")}} property is ignored unless only one image can be displayed without clipping. The only case where clipping happens using `space` is when the width of the image is wider than the element, so there isn't enough room to display one image.

- `round`
  - : As the allowed space increases in size, the repeated images will stretch (leaving no gaps) until there is room for another one to be added. If If the image doesn't fit a whole number of times, it is rescaled so that it does.

## Description

The `background-repeat-x` property accepts a comma-separated list of [`<repetition`](#values) keyterms, which define how the background image(s) should repeat horizontally, or not repeat at all.

The default value is `repeat`. With this value, the background image repeats horizontally, covering the entire width of the background paint area, with edge images being clipped to the size of the element. Whether the left, right, or both edges are clipped depends on the value of the corresponding {{cssxref("background-position")}} value. How many times images are repeated and how much the images on the edges are clipped depends on the size of the background painting area and width value of the corresponding {{cssxref("background-size")}} property.

The repeating images can be evenly spaced apart, ensuring the repeated images aren't clipped in the horizontal direction. With the `space` value, if the width of the background paint area is not a multiple of the width of the image or does not otherwise have a size that is a multiple of the background size in the width direction, there will be areas not covered by the background image.

Alternatively, the repeated background image can be stretched to cover the entire width of the background area without clipping. With `round`, the repeated image is stretched to fill all the available space until there is room to add an additional repeated image. For example, given a background image that is 100px x 100px and a background paint area that is 1099px wide, the image will be repeated 10 times in the horizontal direction with each image stretched in to be 109.9px wide, possibly altering the images {{glossary("aspect ratio")}} and distorting it. If the width of the paint area increases by 1px, becoming 1100px wide, an 11th image will fit horizontally, with each image being painted at 100px wide, and no longer stretched in the horizontal direction.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background-repeat-x

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
  background-repeat-x: no-repeat;
}
.two {
  background-repeat-x: repeat;
}
.three {
  background-repeat-x: space;
}
.four {
  background-repeat-x: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-x: repeat) {
    body::before {
      content: "Your browser doesn't support the `background-repeat-x` property.";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### Result

In this example, each list item is matched with a different value of `background-repeat-x`.

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-repeat-y")}} and the {{cssxref("background-repeat")}} shorthand.
- {{cssxref("background")}} shorthand components: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} and {{cssxref("background-position-y")}}), and {{cssxref("background-size")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds) module
- [Understanding aspect ratios](/en-US/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
