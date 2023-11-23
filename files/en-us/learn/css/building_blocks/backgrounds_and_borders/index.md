---
title: Backgrounds and borders
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In this lesson, we will take a look at some of the creative things you can do with CSS backgrounds and borders. From adding gradients, background images, and rounded corners, backgrounds and borders are the answer to a lot of styling questions in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To learn how to style the background and border of boxes.</td>
    </tr>
  </tbody>
</table>

## Styling backgrounds

The CSS {{cssxref("background")}} property is a shorthand for a number of background longhand properties that we will meet in this lesson. If you discover a complex background property in a stylesheet, it might seem a little hard to understand as so many values can be passed in at once.

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      ) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

We'll return to how the shorthand works later in the tutorial, but first let's have a look at the different things you can do with backgrounds in CSS, by looking at the individual background properties.

### Background colors

The {{cssxref("background-color")}} property defines the background color on any element in CSS. The property accepts any valid [`<color>`](/en-US/docs/Web/CSS/color_value). A `background-color` extends underneath the content and padding box of the element.

In the example below, we have used various color values to add a background color to the box, a heading, and a {{htmlelement("span")}} element.

**Play around with these, using any available [\<color>](/en-US/docs/Web/CSS/color_value) value.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 700)}}

### Background images

The {{cssxref("background-image")}} property enables the display of an image in the background of an element. In the example below, we have two boxes — one has a background image which is larger than the box ([balloons.jpg](https://mdn.github.io/css-examples/learn/backgrounds-borders/balloons.jpg)), the other has a small image of a single star ([star.png](https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png)).

This example demonstrates two things about background images. By default, the large image is not scaled down to fit the box, so we only see a small corner of it, whereas the small image is tiled to fill the box.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 700)}}

**If you specify a background color in addition to a background image then the image displays on top of the color. Try adding a `background-color` property to the example above to see that in action.**

#### Controlling tiling of background images

The {{cssxref("background-repeat")}} property is used to control the tiling behavior of images. The available values are:

- `no-repeat` — stop the background from repeating altogether.
- `repeat-x` — repeat horizontally.
- `repeat-y` — repeat vertically.
- `repeat` — the default; repeat in both directions.

**Try these values out in the example below. We have set the value to `no-repeat` so you will only see one star. Try out the different values — `repeat-x` and `repeat-y` — to see what their effects are.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 600)}}

#### Controlling the size of background images

The _balloons.jpg_ image used in the initial background images example, is a large image that was cropped due to being larger than the element it is a background of. In this case we could use the {{cssxref("background-size")}} property, which can take [length](/en-US/docs/Web/CSS/length) or [percentage](/en-US/docs/Web/CSS/percentage) values, to size the image to fit inside the background.

You can also use keywords:

- `cover` — the browser will make the image just large enough so that it completely covers the box area while still retaining its aspect ratio. In this case, part of the image is likely to end up outside the box.
- `contain` — the browser will make the image the right size to fit inside the box. In this case, you may end up with gaps on either side or on the top and bottom of the image, if the aspect ratio of the image is different from that of the box.

In the example below I have used the _balloons.jpg_ image along with length units to size it inside the box. You can see this has distorted the image.

Try the following.

- Change the length units used to modify the size of the background.
- Remove the length units and see what happens when you use `background-size: cover` or `background-size: contain`.
- If your image is smaller than the box, you can change the value of `background-repeat` to repeat the image.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### Controlling the position of background images

The {{cssxref("background-position")}} property allows you to choose the position in which the background image appears on the box it is applied to. This uses a coordinate system in which the top-left-hand corner of the box is `(0,0)`, and the box is positioned along the horizontal (`x`) and vertical (`y`) axes.

> **Note:** The default `background-position` value is `(0,0)`.

The most common `background-position` values take two individual values — a horizontal value followed by a vertical value.

You can use keywords such as `top` and `right` (look up the others on the {{cssxref("background-position")}} page):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

And [Lengths](/en-US/docs/Web/CSS/length), and [percentages](/en-US/docs/Web/CSS/percentage):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

You can also mix keyword values with lengths or percentages, in which case the first value must refer to the horizontal position or offset and the second vertical. For example:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Finally, you can also use a 4-value syntax in order to indicate a distance from certain edges of the box — the length unit, in this case, is an offset from the value that precedes it. So in the CSS below we are positioning the background 20px from the top and 10px from the right:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**Use the example below to play around with these values and move the star around inside the box.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 600)}}

> **Note:** `background-position` is a shorthand for {{cssxref("background-position-x")}} and {{cssxref("background-position-y")}}, which allow you to set the different axis position values individually.

#### Using multiple background images

It is also possible to have multiple background images — you specify multiple `background-image` values in a single property value, separating each one with a comma.

When you do this you may end up with background images overlapping each other. The backgrounds will layer with the last listed background image at the bottom of the stack, and each previous image stacking on top of the one that follows it in the code.

> **Note:** Gradients can be happily mixed with regular background images.

The other `background-*` properties can also have comma-separated values in the same way as `background-image`:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Each value of the different properties will match up to the values in the same position in the other properties. Above, for example, `image1`'s `background-repeat` value will be `no-repeat`. However, what happens when different properties have different numbers of values? The answer is that the smaller numbers of values will cycle — in the above example there are four background images but only two `background-position` values. The first two position values will be applied to the first two images, then they will cycle back around again — `image3` will be given the first position value, and `image4` will be given the second position value.

**Let's play. In the example below I have included two images. To demonstrate the stacking order, try switching which background image comes first in the list. Or play with the other properties to change the position, size, or repeat values.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 600)}}

### Background gradients

A gradient — when used for a background — acts just like an image and is also set by using the {{cssxref("background-image")}} property.

You can read more about the different types of gradients and things you can do with them on the MDN page for the [`<gradient>`](/en-US/docs/Web/CSS/gradient) data type. A fun way to play with gradients is to use one of the many CSS Gradient Generators available on the web, such as [this one](https://cssgradient.io/). You can create a gradient then copy and paste out the source code that generates it.

Try some different gradients in the example below. In the two boxes respectively, we have a linear gradient that is stretched over the whole box, and a radial gradient with a set size, which therefore repeats.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 700)}}

### Background attachment

Another option we have available for backgrounds is specifying how they scroll when the content scrolls. This is controlled using the {{cssxref("background-attachment")}} property, which can take the following values:

- `scroll`: causes the element's background to scroll when the page is scrolled. If the element content is scrolled, the background does not move. In effect, the background is fixed to the same position on the page, so it scrolls as the page scrolls.
- `fixed`: causes an element's background to be fixed to the viewport so that it doesn't scroll when the page or element content is scrolled. It will always remain in the same position on the screen.
- `local`: fixes the background to the element it is set on, so when you scroll the element, the background scrolls with it.

The {{cssxref("background-attachment")}} property only has an effect when there is content to scroll, so we've made a demo to demonstrate the differences between the three values — have a look at [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (also [see the source code](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) here).

### `background` shorthand property

You will often see backgrounds specified using the {{cssxref("background")}} property. This shorthand lets you set all of the different properties at once.

If using multiple backgrounds, you need to specify all of the properties for the first background, then add your next background after a comma. In the example below we have a gradient with a size and position, then an image background with `no-repeat` and a position, then a color.

There are a few rules that need to be followed when writing background image shorthand values, for example:

- A `background-color` may only be specified after the final comma.
- The value of `background-size` may only be included immediately after `background-position`, separated with the '/' character, like this: `center/80%`.

Take a look at the MDN page for {{cssxref("background")}} to see all of the considerations.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 900)}}

### Accessibility considerations with backgrounds

When placing text on top of a background image or color, you should take care that you have enough contrast for the text to be legible for your visitors. If specifying an image, and if text will be placed on top of that image, you should also specify a `background-color` that will allow the text to be legible if the image does not load.

Screen readers cannot parse background images; therefore, they should be purely decoration. Any important content should be part of the HTML page and not contained in a background.

## Styling borders

When learning about the Box Model, we discovered how borders affect the size of our box. In this lesson we will look at how to use borders creatively. Typically when we add borders to an element with CSS we use a shorthand property that sets the color, width, and style of the border in one line of CSS.

We can set a border for all four sides of a box with {{cssxref("border")}}:

```css
.box {
  border: 1px solid black;
}
```

Or we can target one edge of the box, for example:

```css
.box {
  border-top: 1px solid black;
}
```

The individual properties for these shorthands would be:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

And for the longhands:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **Note:** These top, right, bottom, and left border properties also have mapped _logical_ properties that relate to the writing mode of the document (e.g. left-to-right or right-to-left text, or top-to-bottom). We'll be exploring these in the next lesson, which covers [handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

There are a variety of styles that you can use for borders. In the example below, we have used two different border styles for the box and two different border styles for the heading. Play with the border style, width, and color to see how borders work.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### Rounded corners

Rounding corners on a box is achieved by using the {{cssxref("border-radius")}} property and associated longhands which relate to each corner of the box. Two lengths or percentages may be used as a value, the first value defining the horizontal radius, and the second the vertical radius. In a lot of cases, you will only pass in one value, which will be used for both.

For example, to make all four corners of a box have a 10px radius:

```css
.box {
  border-radius: 10px;
}
```

Or to make the top right corner have a horizontal radius of 1em, and a vertical radius of 10%:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

We have set all four corners in the example below and then changed the values for the top right corner to make it different. You can play with the values to change the corners. Take a look at the property page for {{cssxref("border-radius")}} to see the available syntax options.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

### Border images

Border images allow you to use images for your element's borders, thereby offering you a unique and creative way to style elements. Each aspect of the border image can be controlled using the specific {{cssxref("border-image")}} CSS property.

To explore these properties interactively and check how they interplay with each other, check out our [Border-image generator](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator) tool.

#### Specifying the border image

The {{cssxref("border-image-source")}} property is used to specify the image to be used as a border. This is the first step in creating a border image.

Similar to {{cssxref("background-image")}}, this property accepts either a URL to an image file or a gradient and applies it to the border of the box. You can use various image formats like PNG, JPG, or SVG. The specified image will then be processed by other `border-image` property values to render the final border appearance.

If `border-image-source` value is set as `none`, the browser uses the {{cssxref("border-style")}} property to control the appearance of the border.

```css
.box {
  border-image-source: url("border-image.png");
}
```

#### Slicing a border image

The {{cssxref("border-image-slice")}} property specifies the part of the border image that is displayed in an element's border. This property slices a border image using four lines at a given slice distance from their respective sides. These lines determine the size of the regions that will be used for the border. The four slice lines effectively divide the image into nine regions: four corners, four edges, and the middle.

In the example below, the value `30%` means that 30% of the image from each side (top, right, bottom, left) is used for the border.

```css
.box {
  border-image-source: url("border-image.png");
  border-image-slice: 30%;
}
```

How the border image finally appears is also dependent on other properties such as {{cssxref("border-image-width")}}, {{cssxref("border-image-repeat")}}, and {{cssxref("border-image-outset")}}. These properties specify how the sliced regions are scaled, repeated, and positioned. Furthermore, basic border properties like {{cssxref("border-width")}} and {{cssxref("border-style")}} also influence the display of the border image. The `border-width` property sets the available space for the border image, and the `border-style` property ensures that the border image is displayed correctly. For example, setting a `border-style` such as `solid`or `dotted` ensures that the space for the border image is properly established, allowing the border image to be displayed effectively. Together, these properties contribute to the overall visual effect of the border image on an element.

#### Controlling the width of a border image

The {{cssxref("border-image-width")}} property specifies the width of the border image.

In the example below, the `border-image-width` property determines how the sliced sections of the border image are scaled within the border.

```css
.box {
  border-image-source: url("border-image.png");
  border-image-slice: 30%;
  border-image-width: 10px;
}
```

While this property defines how wide or thick the border image will appear, the {{cssxref("border-width")}} property defines the width of the border around an element. So `border-image-width` determines how the border image is scaled within this allocated border area.

- If `border-image-width` is greater than `border-width`, the border image will extend beyond the border box. The extension beyond the border area can be further controlled by the {{cssxref("border-image-outset")}} value.
- If `border-image-width` is smaller than `border-width`, the image may not fill the entire border area, potentially revealing the background or the border color.

#### Controlling the extension of a border image

The {{cssxref("border-image-outset")}} property is used to specify how far the border image can extend beyond the border box. If the border image extends outside the element's box, it can cause the border image to overlap or push adjacent elements or content, thereby affecting the layout of neighboring elements.

Although the order of specifying properties is not strict, but `border-image-outset` is typically specified after the {{cssxref("border-image-width")}} property.

In the example below, the border image will be displayed with a width of `10px`, which is within the border area of the element, defined by `border-width`. The `border-image-outset` values specifies that the border image will extend `5px` outside the border box. This extension is in addition to the width specified by `border-image-width`. This creates a visual effect where the border image is centered within the `15px` border area, with a portion of it extending outward. The total width occupied by the border and its outset will be `20px` (`15px` for the border and an additional `5px` for the outset).

```css
.box {
  border-image-source: url("border-image.png");
  border-image-slice: 30%;
  border-image-width: 10px; /* Width of the border image */
  border-image-outset: 5px; /* Extension of the border image beyond the border area */
  border-width: 15px; /* Width of the border area */
}
```

A larger outset value can make the border appear as if it's floating around the element, while a smaller outset keeps the border image more contained.

#### Controlling the layout of border images

The {{cssxref("border-image-repeat")}} property helps you control how the image is repeated around the border. It works with the slices created using the {{cssxref("border-image-slice")}} property. The sliced image sections (edges and corners) are fitted, repeated, or stretched to fill the border area. This property is often specified last as it deals with the final layout of the border image on the element.

```css
.box {
  border-image-repeat: round;
}
```

The value `round` will make the image repeat around the border in such a way that it fits perfectly without clipping.

In contrast, the value `stretch` will stretch the image to fill the border area without repeating, and the value `repeat` will tile the image across the border, potentially clipping it if it doesn't fit perfectly.

#### Using the `border-image` shorthand property

You can use the shorthand {{cssxref("border-image")}} property to set all the border image properties at once.

In the example below, the shorthand `border-image` property is used to set multiple border image properties at the same time, including {{cssxref("border-image-source")}}, {{cssxref("border-image-slice")}}, and {{cssxref("border-image-repeat")}}.

```css
.box {
  border-image: url("border-image.png") 30% round;
}
```

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Summary

We have covered quite a lot here, and you can see that there is quite a lot to adding a background or a border to a box. Do explore the different property pages if you want to find out more about any of the features we have discussed. Each page on MDN has more examples of usage for you to play with and enhance your knowledge.

In the next article, we'll find out how the Writing Mode of your document interacts with your CSS. What happens when the text does not flow from left to right?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
