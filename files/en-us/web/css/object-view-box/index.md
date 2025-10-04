---
title: object-view-box
slug: Web/CSS/object-view-box
page-type: css-property
browser-compat: css.properties.object-view-box
---

{{CSSRef}}

The **`object-view-box`** [CSS](/en-US/docs/Web/CSS) property defines a rectangle as a viewable area (viewbox) within a {{glossary("replaced elements", "replaced element")}}, enabling the content of the replaced element to be zoomed or panned. It works similarly to the SVG {{SVGAttr("viewBox")}} attribute.

{{InteractiveExample("CSS Demo: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="A close-up of red flowers and buds on a branch." />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

## Syntax

```css
/* keywords */
object-view-box: none;

/* <basic-shape-rect> functions */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
object-view-box: rect(10px 30px 30px 10px);

/* Global values */
object-view-box: inherit;
object-view-box: initial;
object-view-box: revert;
object-view-box: revert-layer;
object-view-box: unset;
```

### Values

- `none`
  - : The element does not have a view box. This is the default.

- [`<basic-shape-rect>`](/en-US/docs/Web/CSS/basic-shape#basic-shape-rect)
  - : A {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, or {{cssxref("basic-shape/rect","rect()")}} function specifying a view box for an element with natural dimensions (replaced elements). Resolves to `none` otherwise.

## Description

The `object-view-box` property can be used to crop or resize {{glossary("replaced elements")}}, including images and videos. It works by showing a section of the content of the replaced element defined by the value of the property into the available space reserved for the element; the element's default {{glossary("extrinsic size")}}. The subsection of the content displayed can be presented zoomed-in, panned-out, or at original size, while maintaining the content's intrinsic {{glossary("aspect ratio")}}.

The value is a `<basic-shape-rect>`, one of the four {{cssxref("basic-shape")}} functions that is limited to defining a rectangular shape. Taking as an example a {{cssxref("basic-shape/xywh","xywh()")}} function as the value:

```css
img {
  object-view-box: xywh(410px, 0, 400px, 150px);
}
```

In this case, the top left corner of the section of the image that will be displayed is `410px` from the left edge and `0` from the top, as defined by x and y coordinate parameters. The size of the section of the original image that will be displayed is `400px` wide by `150px` tall; the `w` and `h` components of the function. This section of the image will be displayed in the box of space that was reserved for the image itself when the page was laid out. Whether the content section displayed is its original intrinsic size, zoomed in, or zoomed out depends on whether the viewbox is 400px x 150px, smaller, or larger than the image element's size.

![The leopard image cropped using object-view-box property, with a 400px by 150px viewbox displaying an unscaled section of the image](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

As the rectangular viewbox defined by the `object-view-box` property and the rectangular area of the `<img>` element are the same size, i.e., 400 x 150 pixels, the replaced element is not scaled.

To create a zoomed-in effect, we can decrease the `w` and `h` values. As the portion of the image content is stretched, it gives a zoom-in effect.

To create a zoomed-out effect, we would make the `w` and `h` arguments bigger. As the portion of the image content is shrunk, it gives a zoom-out effect.

To pan the element, we would animate the `x` and `y` coordinates, moving the viewbox.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates the basic usage and the effects of the `object-view-box` property.

#### HTML

We have three identical {{htmlelement("img")}} elements wrapped in {{htmlelement("figure")}} elements. The images have only class names different.

```html
<figure>
  <img
    class="intrinsic"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Original scale section of a painted hand" />
  <figcaption>intrinsic</figcaption>
</figure>
<figure>
  <img
    class="zoom-in"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed in section of a painted hand" />
  <figcaption>zoomed in</figcaption>
</figure>
<figure>
  <img
    class="zoom-out"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Zoomed out section of a painted hand" />
  <figcaption>zoomed out</figcaption>
</figure>
```

#### CSS

We style all the images to have the same width and height, then set each class, and therefore each image, to have a different `object-view-box` value. The intrinsic size of the image content is 298px by 332px.

We give all the images the 200px by 200px size, which is the extrinsic size.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

We set three different `object-view-box` property values. The `intrinsic` element is set to display a `200px` square section of the image content, starting from the `70px` from the left and `90px` from the top. The `zoom-in` element is set to display a `160px` square section of the original element, the section going from 110px to 270px from the top edge and 90px to 250px from the left edge. The `zoom-out` replaced element is set to display a 240px square section of the original element.

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(70px 10px 23px 50px);
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}

figure {
  display: inline-block;
  margin: 0;
}

figcaption {
  text-align: center;
}
```

#### Results

{{ EmbedLiveSample("Basic usage", "", "300") }}

### Live zoom-in using object-view-box property

This example demonstrates how the `object-view-box` property can be used to zoom in and out of replaced elements. The eye of the leopard, within a very large image, serves as the focal point for the zoom effect within a statically sized HTML element.

#### HTML

We include an {{htmlelement("img")}} and a [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} element with an associated {{htmlelement("label")}}. The natural dimensions, or intrinsic size, of the original leopard image is `1244px` by `416px` tall, with an {{glossary("aspect ratio")}} of `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
```

#### CSS

We define a custom property `--box-size`, which is used as both the height and width of our viewbox in the {{cssxref("basic-shape/xywh", "xywh()")}} function. We set the aspect ratio of our image to 1:1, defining an equal height and width. The view box's offset point, the focal point in our zoom effects, is set at `(500px, 30px)`, which corresponds to the top-left corner of the leopard's right eye. We added a border to enable visualizing the image size even when the displayed section of the image doesn't fill the viewbox.

```css hidden
input {
  width: 350px;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
:root {
  --box-size: 150px;
}

img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));

  border: 2px solid red;
}
```

#### JavaScript

We add an event listener on the slider that updates the value of the `--boxSize` custom element when the user interacts with it. Because reducing the view box size increases the zoom-in effect: smaller content is stretched to fit the HTML element's dimensions. To increase the zoom-in effect when the slider is moved to the right, the slider's value is inverted by subtracting it from 500px.

```js
const root = document.querySelector("html");
const zoom = document.getElementById("box-size");

function update() {
  root.style.setProperty("--box-size", `${500 - zoom.value}px`);
}

zoom.addEventListener("input", update);
update();
```

#### Result

{{ EmbedLiveSample("Live zoom in using object-view-box property", "", 450) }}

Move the slider to the right to increase the zoom-in effect. The slider controls only the dimensions of the view box while the origin point of the viewbox, the x and y values, remain the same. The image always remains 350px tall.

### Panning using the object-view-box property

In this example, we demonstrate panning through an image using the `object-view-box` property.

#### HTML

The HTML includes a single image.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

We defined a size for the image, then kept the view box dimensions constant, as we animate the horizontal position, changing the position of the left side edge over five seconds.

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 30px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 30px 400px 400px);
  }
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Your browser does not support the 'object-view-box' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Result

{{ EmbedLiveSample("Panning using the object-view-box property", "", 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS `object-view-box` property](/en-US/docs/Web/CSS/CSS_images/Using_object-view-box)
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Understanding aspect ratio](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS images](/en-US/docs/Web/CSS/CSS_images) module
