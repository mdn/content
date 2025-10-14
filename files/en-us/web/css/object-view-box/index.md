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

The `object-view-box` property can be used to crop or resize {{glossary("replaced elements")}}, including images and videos. It works by showing a section of the content of the replaced element in the available space reserved for that element. The section of the replaced element that is displayed is defined by the value of the property. The available reserved space is determined by the element's default {{glossary("extrinsic size")}}. The subsection of the content displayed can be presented zoomed-in, panned-out, or at its original size, while maintaining the content's intrinsic {{glossary("aspect ratio")}}.

The property value is a `<basic-shape-rect>`, one of the {{cssxref("basic-shape")}} functions limited to defining a rectangular shape. For example, the value can be a {{cssxref("basic-shape/xywh","xywh()")}} function:

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

In this case, the top left corner of the section of the image that will be displayed is `410px` from the left edge and `0` from the top, as defined by x and y coordinate parameters. The size of the section of the original image that will be displayed is `400px` wide by `150px` tall; the `w` and `h` components of the function. This 400x150 section of the image will be displayed in the space that was reserved for the image itself when the page was laid out. Whether the content section displayed is its original intrinsic size, zoomed in, or zoomed out depends on whether the viewbox is 400px x 150px, smaller, or larger than the image element's size, respectively.

![The leopard image cropped using object-view-box property, with a 400px by 150px viewbox displaying an unscaled section of the image](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

In this case, as the rectangular viewbox defined by the `object-view-box` property and the rectangular area of the `<img>` element are the same size, i.e., 400 x 150 pixels, the replaced element is not scaled.

Decrease the `w` and `h` values to create a zoomed-in effect; as the smaller image section is stretched, it has a zoomed-in effect.

Increase the `w` and `h` argument values to create a zoomed-out effect; as the larger image section is shrunk, it has a zoomed-out effect.

Animating the `x` and `y` coordinates creates a panning effect by moving the element's viewbox while the element itself remains in its original location.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates the basic usage and the effects of the `object-view-box` property, with examples using the three different `<basic-shape-rect>` functions.

#### HTML

We have three almost identical {{htmlelement("img")}} elements wrapped in {{htmlelement("figure")}} elements; the only difference is their class names.

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

We style all the images to have the same width and height, then set each class, and therefore each image, to have a different `object-view-box` value. The intrinsic size of the painted hand image is `298px` by `332px`. We set the {{cssxref("height")}} and {{cssxref("width")}}, setting the extrinsic size to `200px` by `200px`.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

We set three different `object-view-box` property values using three different shape functions. The `intrinsic` element's {{cssxref("basic-shape/xywh","xywh()")}} function value displays a `200px` square section of the image content, starting from the `70px` from the left and `90px` from the top. The `zoom-in` element's {{cssxref("basic-shape/rect","rect()")}} function displays a `160px` square section of the original element, going from `110px` to `270px` from the top edge and `90px` to `250px` from the left edge. The `zoom-out` replaced element's {{cssxref("basic-shape/inset","inset()")}} function displays a `298px` square section of the original element; showing the entire width of the image while cutting of a 17px from the top and bottom.

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(17px 0 17px 0);
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

The `intrinsic` version is showing an unscaled section of the image. The `zoom-in` version is showing a smaller section (`160px` square) of the image, scaled up to fit `200px` square viewbox. As the section is stretched, it looks zoomed in. The `zoom-out` version is showing a larger (`298px` square) section of the image, scaled down to fit `200px` square viewbox. As the section is shrunk, it looks zoomed out.

### Live zoom-in using object-view-box property

This example demonstrates using the `object-view-box` property to zoom a section of a replaced element in and out, within a statically sized HTML element. In this case, the eye of the leopard, within a very large image, serves as the focal point of the zoom effect.

#### HTML

We include an {{htmlelement("img")}} element and a [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} element, with an associated {{htmlelement("label")}}. The natural dimensions, or intrinsic size, of the original leopard image are `1244px` wide by `416px` tall, with an {{glossary("aspect ratio")}} of `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

#### CSS

We define a `--box-size` custom property, which is used as the height and width in the {{cssxref("basic-shape/xywh", "xywh()")}} function, creating a square viewbox with an aspect ratio of `1:1`. The view box's offset point, the focal point in our zoom effect, is set at `500px` for the `x` coordinate and `30px` for the `y` coordinate, which corresponds to the top-left corner of the leopard's right eye.

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
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
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

#### JavaScript

We add an event listener to the slider that updates the value of the `--boxSize` custom property when the user interacts with it. To increase the zoom-in effect when the slider is moved to the right, the slider's value is inverted by subtracting it from `500px`, as reducing the view box size increases the zoom-in effect.

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

#### Result

{{ EmbedLiveSample("Live zoom in using object-view-box property", "", 480) }}

Move the slider to the right to increase the zoom-in effect and left to reduce it. The slider only affects the dimensions of the view box, while the x and y values, the origin point of the viewbox, remain constant. The size of the `<img>` element doesn't change either.

### Panning using the object-view-box property

This example demonstrates panning an image by animating the `object-view-box` property value.

#### HTML

The HTML includes a single image.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
```

#### CSS

We define an image size and keep the viewbox dimensions, the `w` and `h` components of the `xywh()` function, constant, as we animate the top and left positions, changing the position of the `x` and `y` parameters over five seconds.

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 -50px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 68px 400px 400px);
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
