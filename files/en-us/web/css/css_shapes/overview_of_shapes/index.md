---
title: Overview of shapes
slug: Web/CSS/CSS_shapes/Overview_of_shapes
page-type: guide
---

{{CSSRef}}

The [CSS Shapes module](/en-US/docs/Web/CSS/CSS_shapes) describes geometric shapes in CSS. This article provides an overview of how you can use shapes to wrap text around floated elements that are not necessarily rectangular.

When you float an item left, text will wrap around the right and bottom of the item in a rectangular fashion. With CSS shapes you can, for example, apply a circle shape, and the text will wrap around the line of the circle.

There are several ways to create this circle. In this guide, we will look at how CSS Shapes work and how to use them.

## What does the specification define?

The specification defines a few properties, including:

- {{cssxref("shape-outside")}} — Allows definition of basic shapes.
- {{cssxref("shape-image-threshold")}} — Sets an opacity threshold value. If an image is being used to define a shape, only the parts of the image that are the same opacity or greater than the threshold value are used in the shape. Any other parts are ignored.
- {{cssxref("shape-margin")}} — Sets a margin around the defined shape.

## Defining basic shapes

The `shape-outside` property allows us to define a shape. It takes a variety of values that define different shapes specified in the {{cssxref("&lt;basic-shape&gt;")}} data type.

In the following example, an image is floated to the left. We apply the `shape-outside` property with a `circle(50%)` value. The result is that the content now curves around the circular shape rather than following the rectangle created by the box of the image.

```html live-sample___circle
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "280px")}}

Here we used the {{cssxref("basic-shape/circle", "circle()")}} function, which is supported across all modern browsers. If we used a newer shape type that doesn't have full support, users of non-supporting browsers would see the content flowing around the sides of a rectangular, due to the image being floated. Shapes are a visual progressive enhancement.

### Basic shapes

The value `circle(50%)` is an example of a basic shape. The specification defines several `<basic-shape>` values, including:

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

Three of these functions only define rectangles. With the `inset()` function, you define four offset values, thus pulling the line boxes of any wrapping content closer to the object than they otherwise would. The `rect()` function defines a rectangle by specifying the distance from the top and left edges of the containing block. The `xywh()` function works by specifying distances from the top and left edges of the reference box and setting the width and height of the rectangle from that starting point.

We have already seen how `circle()` creates a circular shape. An `ellipse()` is essentially a squashed circle. If none of these simple shapes do the trick you can create more complex shapes using the `polygon()` function, which allows the definition of a series of lines. The `path()` and `shape()` functions can be used to create ANY shape via a series of line, curve, and move commands.

In our [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes) we explore each of the possible Basic Shapes and how to create them.

### Shapes from the box value

Shapes can also be created around the box value. Therefore, you could create your shape on:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

In the example below, you can change the value `border-box` to any of the other allowed values to see how the shape moves closer or further away from the box.

```html live-sample___box
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___box
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  background-color: rebeccapurple;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("box", "", "320px")}}

To explore the box values in more detail, see our guide covering [Shapes from box values](/en-US/docs/Web/CSS/CSS_shapes/From_box_values).

### Shapes from images

An interesting way to generate your path is to use an image with an alpha channel—the text will then wrap around the non-transparent parts of the image. This allows the overlay of wrapped content around an image or the use of an image that is never displayed on the page purely as a method of creating a complex shape without needing to carefully map a polygon.

Note that images used in this way must be [CORS compatible](/en-US/docs/Web/HTTP/CORS), otherwise `shape-outside` will act as if `none` had been given as the value, and you will get no shape.

In this next example, we have an image with a fully transparent area, and we are using an image as the URL value for `shape-outside`. The shape is created around the opaque area — the image of the balloon.

```html live-sample___image
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___image
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: url(https://mdn.github.io/shared-assets/images/examples/round-balloon.png);
}
```

{{EmbedLiveSample("image", "", "280px")}}

#### `shape-image-threshold`

The `shape-image-threshold` property is used to set the threshold of image transparency used to define the area of the image used for the shape. If the value of `shape-image-threshold` is `0.0` (which is the initial value) then the area must be fully transparent. If the value is `1.0` then it is fully opaque. Values in between mean that you can set a semi-transparent area as the defining area of the shape.

You can see the threshold in action if we use a gradient as the image on which to define our shape. In the example below, if you change the threshold the path that the shape takes changes based on the level of opacity you have selected.

```html live-sample___threshold
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___threshold
body {
  font: 1.2em / 1.4 sans-serif;
}

.shape {
  float: left;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-outside: linear-gradient(
    45deg,
    rebeccapurple,
    transparent 80%,
    transparent
  );
  shape-image-threshold: 0.4;
}
```

{{EmbedLiveSample("threshold", "", "280px")}}

To learn more about creating shapes from images, see the [Shapes from images](/en-US/docs/Web/CSS/CSS_shapes/Shapes_from_images) guide.

## The `shape-margin` property

The {{cssxref("shape-margin")}} property adds a margin to `shape-outside`. This will further shorten the line boxes of any content wrapping the shape, pushing it away from the shape itself.

In the example below we have added a `shape-margin` to a basic shape. Change the margin to push the text further away from the path the shape would take by default.

```html live-sample___shape-margin
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___shape-margin
body {
  font: 1.2em / 1.4 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 5px;
}
```

{{EmbedLiveSample("shape-margin", "", "280px")}}

## Using Generated Content as the floated item

In the examples above, we have used images or a visible element to define the shape, meaning that you can see the shape on the page. Instead, you might want to flow some text along a non-rectangular invisible line. We could, for example, add an empty floated {{htmlelement("div")}} or {{htmlelement("span")}} element to our DOM and make it invisible. However, we can create a shape with only CSS using [generated content](/en-US/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) and keep all our styling functionality inside the CSS.

In this example, we use generated content to insert an element with a height and width of 150px. We can then use basic shapes, box values, or even the alpha channel of an image to create a shape for the text to wrap around.

```html live-sample___generated-content
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___generated-content
body {
  font: 1.2em sans-serif;
}

.box::before {
  content: "";
  display: block;
  height: 150px;
  width: 150px;
  padding: 20px;
  margin: 20px;
  border-radius: 50%;
  float: left;
  shape-outside: border-box;
}
```

{{EmbedLiveSample("generated-content", "", "260px")}}

## Relationship to `clip-path`

The basic shapes and box values used to create shapes are the same as those used as values for {{cssxref("clip-path")}}. Therefore, if you want to create a shape using an image, and also clip away part of that image, you can use the same values.

The image below is a square image with a blue background. We have defined a shape using `shape-outside: ellipse(40% 50%);` and also used `clip-path: ellipse(40% 50%);` to clip away the same area that we used to define the shape.

```html live-sample___clip-path
<div class="box">
  <img
    alt="An orange hot air balloon as seen from below"
    src="https://mdn.github.io/shared-assets/images/examples/balloon-small.jpg" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___clip-path
body {
  font: 1.2em / 1.4 sans-serif;
}

img {
  float: left;
  shape-outside: ellipse(40% 50%);
  clip-path: ellipse(40% 50%);
}
```

{{EmbedLiveSample("clip-path", "", "280px")}}

## Developer Tools for Shapes

There is a [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in the Firefox DevTools. This tool can be used to inspect the `circle()`, `inset()`, `ellipse()`, and `polygon()` values. If your polygon isn't quite right you can use the Shapes Editor to tweak it, then copy the new value back into your CSS.

## More CSS Shapes Features

In this guide, we discussed wrapping text around floated shapes. See the [CSS shapes module](/en-US/docs/Web/CSS/CSS_shapes) for links to all the module features plus additional related features. This includes all the shape functions and relevant guides.
