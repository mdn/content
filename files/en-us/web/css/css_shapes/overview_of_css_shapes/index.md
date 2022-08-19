---
title: Overview of shapes
slug: Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes
tags:
  - CSS
  - CSS Shapes
  - Guide
  - Overview
  - shapes
---
{{CSSRef}}

The [CSS Shapes Level 1 Specification](https://www.w3.org/TR/css-shapes/) describes geometric shapes in CSS. They are, in Level 1 of the specification, designed to be applied to floated items. This article provides an overview of what you can do with shapes.

You could for example float an item left, which would cause the text to wrap round the right and bottom of the item in a rectangular fashion. If you then apply a circle shape, the text would then wrap round the line of the circle.

There are a number of ways to create these Shapes and in these guides we will find out how CSS Shapes work, and consider some ways you might like to use them.

## What does the specification define?

The specification defines three new properties:

- {{cssxref("shape-outside")}} — allows definition of basic shapes
- {{cssxref("shape-image-threshold")}} — Sets an opacity threshold value. If an image is being used to define the shape, only the parts of the image that are the same opacity or greater than the threshold value are used in the shape. Any other parts are ignored.
- {{cssxref("shape-margin")}} — sets a margin around the defined shape

## Defining basic shapes

The `shape-outside` property allows us to a define a shape. It takes a variety of values, all of which define different shapes, specified in the {{cssxref("&lt;basic-shape&gt;")}} datatype. We can start by looking at a very simple case.

In the following example I have an image floated left. I have then applied the `shape-outside` property to it with a value of `circle(50%)`. The result is that the content now curves around the circular shape rather than following the rectangle created by the box of the image.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

As in this level of the specification an element has to be floated in order to apply `<basic-shape>` to it; this has the side-effect of creating a simple fallback for many cases. If you do not have Shapes support in the browser, the user will see content flowing around the sides of a rectangular box as before. If they do have Shapes support then the visual display is enhanced.

### Basic shapes

The value `circle(50%)` is an example of a basic shape. The specification defines four `<basic-shape>` values, which are:

- `inset()`
- `circle()`
- `ellipse()`
- `polygon()`

Using the value `inset()` wraps text around a rectangular shape however you are able to add offset values, thus pulling the line boxes of any wrapping content closer to the object than would otherwise happen.

We have already seen how `circle()` creates a circular shape. An `ellipse()` is essentially a squashed circle. If none of these simple shapes do the trick you can create a `polygon()` and make the shape as complex as you want.

In our [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) we explore each of the possible Basic Shapes and how to create them.

### Shapes from the box value

Shapes can also be created around the box value. Therefor, you could create your shape on:

- `border-box`
- `padding-box`
- `content-box`
- `margin-box`

In the example below, you can change the value `border-box` to any of the other allowed values to see how the shape moves closer or further away from the box.

{{EmbedGHLiveSample("css-examples/shapes/overview/box.html", '100%', 810)}}

To explore the box values in more detail, see our guide covering [Shapes from box values](/en-US/docs/Web/CSS/CSS_Shapes/From_box_values).

### Shapes from images

An interesting way to generate your path is to use an image with an alpha channel — the text will then wrap around the non-transparent parts of the image. This allows the overlay of wrapped content around an image, or the use of an image which is never displayed on the page purely as a method of creating a complex shape without needing to carefully map a polygon.

Note that images used in this way must be [CORS compatible](/en-US/docs/Web/HTTP/CORS), otherwise `shape-outside` will act as if `none` had been given as the value, and you will get no shape.

In this next example, we have an image with a fully transparent area, and we are using an image as the URL value for `shape-outside`. The shape is created around the opaque area — the image of the balloon.

{{EmbedGHLiveSample("css-examples/shapes/overview/image.html", '100%', 800)}}

#### `shape-image-threshold`

The `shape-image-threshold` property is used to set the threshold of image transparency used to define the area of the image used for the shape. If the value of `shape-image-threshold` is `0.0` (which is the initial value) then the area must be fully transparent. If the value is `1.0` then it is fully opaque. Values in between mean that you can set a semi-transparent area as the defining area of the shape.

You can see the threshold in action if we use a gradient as the image on which to define our shape. In the example below, if you change the threshold the path that the shape takes changes based on the level of opacity you have selected.

{{EmbedGHLiveSample("css-examples/shapes/overview/threshold.html", '100%', 820)}}

We take a deeper look at creating shapes from images in the [Shapes from Images](/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images) guide.

## The `shape-margin` property

The {{cssxref("shape-margin")}} property adds a margin to `shape-outside`. This will further shorten the line boxes of any content wrapping the shape, pushing it away from the shape itself.

In the example below we have added a `shape-margin` to a basic shape. Change the margin to push the text further away from the path the shape would take by default.

{{EmbedGHLiveSample("css-examples/shapes/overview/shape-margin.html", '100%', 800)}}

## Using Generated Content as the floated item

In the examples above, we have used images or a visible element to define the shape, meaning that you can see the shape on the page. Instead, you might want to cause some text to flow along a non-rectangular invisible line. You can do this with Shapes, however you will still need a floated item, which you can then make invisible. That could be a redundant element inserted into the document, an empty {{htmlelement("div")}} or {{htmlelement("span")}} perhaps, but our preference is to use generated content. This means we can keep things used for styling inside the CSS.

In this next example, we use generated content to insert an element with height and width of 150px. We can then use Basic Shapes, Box Values or even the Alpha Channel of an image to create a shape for the text to wrap around.

{{EmbedGHLiveSample("css-examples/shapes/overview/generated-content.html", '100%', 850)}}

## Relationship to `clip-path`

The Basic Shapes and Box values used to create Shapes are the same as those used as values for {{cssxref("clip-path")}}. Therefore if you want to create a shape using an image, and also clip away part of that image, you can use the same values.

The image below is a square image with a blue background. We have defined a shape using `shape-outside: ellipse(40% 50%);` and also used `clip-path: ellipse(40% 50%);` to clip away the same area that we have used to define the shape.

{{EmbedGHLiveSample("css-examples/shapes/overview/clip-path.html", '100%', 800)}}

## Developer Tools for Shapes

Along with CSS Shapes support in the browser, Firefox are shipping a [Shape Path Editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) in the Firefox DevTools. This tool means that you can inspect any shapes on your page, and even change the values in the live page. If your polygon isn't quite right you can use the Shapes Editor to tweak it, then copy the new value back into your CSS.

The Shape Path Editor will be enabled by default in Firefox 60 for shapes generated via `clip-path`. You can also use it to edit shapes generated via `shape-outside`, but only when you enable it via the `layout.css.shape-outside.enabled` pref.

## Future CSS Shapes Features

The initial Shapes specification included a property `shape-inside` for creating shapes inside an element. This property, along with the possibility of creating shapes on non-floated elements, has been moved to [level 2](https://drafts.csswg.org/css-shapes-2/) of the specification. As the `shape-inside` property was initially in Level 1 of the specification, you may find tutorials on the web detailing both properties.
