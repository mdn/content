---
title: Using the CSS object-view-box property
short-title: Using object-view-box
slug: Web/CSS/CSS_images/Using_object-view-box
page-type: guide
sidebar: cssref
---

The {{cssxref("object-view-box")}} property can be used to define a view box within {{glossary("replaced elements")}}, enabling the display of just a section of the replaced content. The subsection of the element displayed can be presented zoomed in, panned out, or at original size, while maintaining the content's intrinsic {{glossary("aspect ratio")}}. In this guide, we take a look at this property, how it compares to {{cssxref("object-fit")}}, zooming in and out, and panning across an element.

## Intrinsic size, extrinsic size, and object-fit

Replaced elements have two sizes; an {{glossary("extrinsic size")}} and an {{glossary("intrinsic size")}}.

The extrinsic size is the dimension of the HTML element in which the content is rendered based on the box and visual formatting models. The [box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) and [visual formatting model](/en-US/docs/Web/CSS/CSS_display/Visual_formatting_model) determine the size of rendered elements based on content, HTML attributes, CSS applied to elements and their ancestors, and the viewport size.

The intrinsic size is the original size of the content itself; the size the element is when no styles are applied and without any layout constraints. While these don't have to be the same size, it is generally important to maintain a replaced element's intrinsic {{glossary("aspect ratio")}}.

CSS has many sizing properties. When it comes to sizing replaced elements, the [`object-fit`](/en-US/docs/Web/CSS/object-fit) property enables us to control how replaced elements are rendered in with a defined box to some extent. For example, the following 1200 x 400 image is displayed using a {{htmlelement("img")}} element that is sized to 400 x 200. The image content is positioned using `object-fit: none;` declaration.

![An image demonstrating extrinsic and intrinsic image sizes; the center 200 by 400 section of a much larger 400 by 1200 image is visible in the 200 by 400 view box that is the size of the element displaying the image.](extrinsic-intrinsic_sizes.jpg)

## `object-view-box` versus `object-fit`

The `object-view-box` property is more flexible than the `object-fit` property, and it is capable of doing more things. For example, it can be used to crop, zoom, and pan images. The property sets viewable area (view box), which defines what part of the content to show and how to fit it inside the extrinsic size. The view box value contains a rectangle and its position relative to the intrinsic area of the content, but _physical size of the view box remains equal to the extrinsic size_. The view box marks the area in the content to be displayed, and then it is transformed to match the extrinsic dimensions fitting into the HTML element. In the following image, we have the same leopard picture in a 400 x 150 image element. However, this time we have used `object-view-box` property to crop the leopard's eye portion of the picture.

![The leopard image cropped using object-view-box property, with a 400px by 150px viewbox displaying an unscaled section of the image](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

As the rectangle defined by the `object-view-box` property and the rectangle viewbox of the `<img>` element are the same size in this case, i.e., 400 x 150 pixels, the aspect ratios of both are the same and the replaced element is neither scaled nor distorted.

## Aspect ratio

Maintaining the same {{glossary("aspect ratio")}} prevents image distortion. With `object-view-box`, we can accomplish various image operations while having different extrinsic and view box sizes, without distorting the replaced element as it scales up and down.

## Zooming in and out

Reducing the view box size increases the zoom-in effect, because smaller content is stretched to fit the HTML element's dimensions. Decreasing it gives it a zoom-out effect.

In this example, you can zoom in and out on a section of a large image of a leopard's eye. The natural dimensions of the original image is `1244px` by `416px` tall, with an {{glossary("aspect ratio")}} of `3:1`. We are able to change the portion of the image that is visible without changing the dimensions of the HTML image element itself. Using the `object-view-box` property, we just change the width and height components of the `xywh()` function value, changing the dimensions of the view box while maintaining it's 1:1 aspect-ratio. In order not to distort the rendered image portion, the extrinsic (350x350 px) and view box window aspect ratios have been kept the same, that is, 1:1.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom-in: </label>
  <input type="range" id="box-size" min="0" max="500" value="150" />
</p>
<output></output>
```

```css hidden
input {
  width: 350px;
}

img {
  width: 350px;
  height: 350px;
  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
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

```js hidden
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const bs = 500 - zoom.value;
  img.style.setProperty("--box-size", `${bs}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${bs}px ${bs}px);`;
}

zoom.addEventListener("input", update);
update();
```

{{ EmbedLiveSample("Live zoom in using object-view-box property", 500, 450) }}

Move the slider to the right to increase the zoom-in effect. The slider controls only the dimensions of the view box. As we are not changing the x and y positions of the view box, the picture zooms in diagonally towards the bottom right corner.

The slider just changes the width and height. We used the {{cssxref("basic-shape/xywh","xywh()")}} function, which accepts an offset point and size of the view box as parameters. The view box's offset point, the focal point in our zoom effects, is set at `(500px, 30px)`, which corresponds to the top-left corner of the leopard's right eye.

## Panning an image

If we change only the coordinates of the view box window, in `xywh()` function, and keep the size the same, we get a panning operation. For example, by keep the view box dimensions constant and changing only the horizontal position - the `x` parameter - we can create a horizontal panning effect.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="position">Left offset: </label>
  <input type="range" id="position" min="0" max="900" value="450" />
  <output>
</p>
```

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
output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

img {
  width: 350px;
  height: 350px;

  --x-position: 0;
  object-view-box: xywh(var(--x-position) 30px 350px 350px);
}
```

```js hidden
const img = document.querySelector("img");
const position = document.getElementById("position");
const output = document.querySelector("output");

function update() {
  img.style.setProperty("--x-position", `${position.value}px`);
  output.innerText = `xywh(${position.value}px 30px 350px 350px);`;
}

position.addEventListener("input", update);
update();
```

{{ EmbedLiveSample("Panning effect", 500, 450) }}
Move the slider and note how increasing and decreasing the `x` value of the `xywh()` function creates a panning effect.

## See also

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("background-size")}}
- [Understanding aspect ratio](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
