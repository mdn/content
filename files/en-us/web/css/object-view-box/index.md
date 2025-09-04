---
title: object-view-box
slug: Web/CSS/object-view-box
page-type: css-property
browser-compat: css.properties.object-view-box
---

{{CSSRef}}

The **`object-view-box`** [CSS](/en-US/docs/Web/CSS) property defines a rectangle as a viewable area (view box) within a {{glossary("replaced elements", "replaced element")}}, enabling the content of an element to be zoomed or panned. It works similarly to the SVG {{SVGAttr("viewBox")}} attribute.

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

/* Rectangular shape functions */
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
  - : The default. The element does not have a view box.

- [`<basic-shape-rect>`](/en-US/docs/Web/CSS/basic-shape#basic-shape-rect)
  - : A {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/xywh","xywh()")}}, or {{cssxref("basic-shape/rect","rect()")}} function specifying a view box for an element with natural dimensions (replaced elements). Resolves to `none` otherwise.

## Description

The `object-view-box` property enabled defining a view box within {{glossary("replaced elements")}}, enabling displaying just a section of the replaced content, with that area being at it's intrinsic size, zoomed in, or panned out, while maintaining the content's intrinsic {{glossary("aspect ratio")}} .

The replaced elements on web pages have two sizes [extrinsic size](/en-US/docs/Glossary/Intrinsic_Size#extrinsic_sizing) and [intrinsic size](/en-US/docs/Glossary/Intrinsic_Size). The extrinsic size is the dimension of the HTML element in which the content is rendered, and the intrinsic size is the original size of the content itself. Size of the visible content is always the size of the rendering element (extrinsic size). The [`object-fit`](/en-US/docs/Web/CSS/object-fit) property allows us to control how the content is rendered, but it has limited capability. In the following image, we have a 1200 x 400 pixel leopard picture and a 400 x 200 HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img) image. The image content is positioned using `object-fit: cover;` declaration.

![An image demonstrating extrinsic and intrinsic image sizes](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/extrinsic-intrinsic_sizes.jpg)

The `object-view-box` property is more flexible than the `object-fit` property, and it is capable of doing more things. For example, it can be used to crop, zoom, and pan images. The property sets viewable area (view box), which defines what part of the content to show and how to fit it inside the extrinsic size. The view box value contains a rectangle and its position relative to the intrinsic area of the content, but _physical size of the view box remains equal to the extrinsic size_. The view box marks the area in the content to be displayed, and then it is transformed to match the extrinsic dimensions fitting into the HTML element. In the following image, we have the same leopard picture in a 400 x 150 image element. However, this time we have used `object-view-box` property to crop the leopard's eye portion of the picture.

![An image showing leopard eyes cropped from an leopard image using object-view-box property](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

Notice, in this case, the extrinsic size and view box size have been kept the same, i.e., 400 x 150 pixels. In other words, the aspect ratios have been kept the same. Maintaining the same aspect ratio prevents image distortion.

Various image operations can be achieved by having different extrinsic and view box sizes.

### Crop and pan operations when view box size equals extrinsic size

When both sizes are the same, the view box is not transformed to match the extrinsic size. So the content resolution remains the same. We get a fixed window into the content, as shown in the last image of the previous section.

If we change only the coordinates of the view box window, in `xywh()` function, and keep the size the same, we get a panning operation.

### Zoom-in operation when view box size is less than extrinsic size

In this case, the smaller view box is stretched to fit the extrinsic size. As the portion of the image is stretched, it gives a zoom-in effect.

### Zoom-out operation when view box size is greater than extrinsic size

In this case, the bigger view box is shrunk to fit extrinsic size. As the portion of the image is shrunk, it gives a zoom-out effect.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Live zoom-in using object-view-box property

In this example, we display part of a large image of a leopard. Users can zoom in and out on the image, with the eye of the leopard serving as the focal point. Using the `object-view-box` property, we can do this without changing the dimensions of the HTML image element itself.

#### HTML

We include an {{htmlelement("img")}} and a [`range`](Web/HTML/Reference/Elements/input/range) {{htmlelement("input")}} element, associating a {{htmlelement("label")}} with the `<input>` . The natural dimensions of the original image is `1244px` by `416px` tall, with an {{glossary("aspect ratio")}} of `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="100" max="350" value="150" />
</p>
```

#### CSS

We define a custom property `--box-size` to adjust the view box size. Decreasing the size of the view box gives a zoom-in effect. Increasing the view box size gives a zoom-out effect. The {{cssxref("basic-shape/xywh","xywh()")}} function accepts an offset point and size of the view box as parameters. The view box's offset point, the focal point in our zoom effects, is set at `(500px, 30px)`, which corresponds to the top-left corner of the leopard's right eye.

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
img {
  width: 350px;
  height: 350px;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

Note, in order not to distort the rendered image portion, the extrinsic (350x350 px) and view box window aspect ratios have been kept the same, that is, 1:1.

#### JavaScript

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");

function update() {
  img.style.setProperty("--box-size", `${500 - zoom.value}px`);
}

zoom.addEventListener("input", update);
update();
```

Reducing the view box size increases the zoom-in effect, because smaller content is stretched to fit the HTML element's dimensions. To increase the zoom-in effect when the slider is moved to the right, the slider's value is inverted by subtracting it from 500px.

#### Result

{{ EmbedLiveSample("Live zoom in using object-view-box property", 500, 450) }}

Move the slider to the right to increase the zoom-in effect. The slider controls only the dimensions of the view box. As we are not changing the x and y positions of the view box, the picture zooms in diagonally towards the bottom right corner.

### Panning using object-view-box property

In this example, we keep the view box dimensions constant and change only the horizontal position. This gives a horizontal panning effect. Most of the code remains the same as the previous example.

#### HTML

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="position">Horizontal pan: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
</p>
```

#### CSS

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
img {
  width: 400px;
  height: 400px;

  --x-position: 0;
  object-view-box: xywh(var(--x-position) 30px 400px 400px);
}
```

The HTML image element determines the 400x400 px window size. The `--x-position` variable allows adjustable horizontal positioning.
Both the element size and view box have the same dimensions, which keeps the aspect ratio the same and prevents image distortion.

#### JavaScript

```js
const img = document.querySelector("img");
const position = document.getElementById("position");

function update() {
  img.style.setProperty("--x-position", `${position.value}px`);
}

position.addEventListener("input", update);
update();
```

#### Result

{{ EmbedLiveSample("Live zoom in using object-view-box property", 500, 500) }}

Move the slider to pan the picture horizontally.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Understanding aspect ratio](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
