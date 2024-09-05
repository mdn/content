---
title: "CanvasRenderingContext2D: filter property"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.filter
---

{{APIRef}}

The
**`CanvasRenderingContext2D.filter`**
property of the Canvas 2D API provides filter effects such as blurring and grayscaling.
It is similar to the CSS {{cssxref("filter")}} property and accepts the same values.

## Value

The `filter` property accepts a value of `"none"` or one or more
of the following filter functions in a string.

- [`url()`](/en-US/docs/Web/CSS/url_function)
  - : A CSS {{cssxref("url_function", "url()")}}. Takes any URL that resolves to SVG filter element.
    This can be the ID of an element, a path to external XML file, or even a data encoded SVG value.
- [`blur()`](/en-US/docs/Web/CSS/filter-function/blur)
  - : A CSS {{cssxref("&lt;length&gt;")}}. Applies a Gaussian blur to the drawing. It
    defines the value of the standard deviation to the Gaussian function, i.e., how many
    pixels on the screen blend into each other; thus, a larger value will create more
    blur. A value of `0` leaves the input unchanged.
- [`brightness()`](/en-US/docs/Web/CSS/filter-function/brightness)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Applies a linear multiplier to the drawing,
    making it appear brighter or darker. A value under `100%` darkens the
    image, while a value over `100%` brightens it. A value of `0%`
    will create an image that is completely black, while a value of `100%`
    leaves the input unchanged.
- [`contrast()`](/en-US/docs/Web/CSS/filter-function/contrast)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Adjusts the contrast of the drawing. A
    value of `0%` will create a drawing that is completely black. A value of
    `100%` leaves the drawing unchanged.
- [`drop-shadow()`](/en-US/docs/Web/CSS/filter-function/drop-shadow)

  - : Applies a drop shadow effect to the drawing. A drop shadow is effectively a blurred,
    offset version of the drawing's alpha mask drawn in a particular color, composited
    below the drawing. This function takes up to five arguments:

    - `<offset-x>`
      - : See {{cssxref("&lt;length&gt;")}} for possible
        units. Specifies the horizontal distance of the shadow.
    - `<offset-y>`
      - : See {{cssxref("&lt;length&gt;")}} for possible
        units. Specifies the vertical distance of the shadow.
    - `<blur-radius>`
      - : The larger this value, the bigger the blur, so
        the shadow becomes bigger and lighter. Negative values are not allowed.
    - `<color>`
      - : See {{cssxref("&lt;color&gt;")}} values for possible
        keywords and notations.

- [`grayscale()`](/en-US/docs/Web/CSS/filter-function/grayscale)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Converts the drawing to grayscale. A value
    of `100%` is completely grayscale. A value of `0%` leaves the
    drawing unchanged.
- [`hue-rotate()`](/en-US/docs/Web/CSS/filter-function/hue-rotate)
  - : A CSS {{cssxref("&lt;angle&gt;")}}. Applies a hue rotation on the drawing. A value
    of `0deg` leaves the input unchanged.
- [`invert()`](/en-US/docs/Web/CSS/filter-function/invert)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Inverts the drawing. A value of
    `100%` means complete inversion. A value of `0%` leaves the
    drawing unchanged.
- [`opacity()`](/en-US/docs/Web/CSS/filter-function/opacity)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Applies transparency to the drawing. A
    value of `0%` means completely transparent. A value of `100%`
    leaves the drawing unchanged.
- [`saturate()`](/en-US/docs/Web/CSS/filter-function/saturate)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Saturates the drawing. A value of
    `0%` means completely un-saturated. A value of `100%` leaves the
    drawing unchanged.
- [`sepia()`](/en-US/docs/Web/CSS/filter-function/sepia)
  - : A CSS {{cssxref("&lt;percentage&gt;")}}. Converts the drawing to sepia. A value of
    `100%` means completely sepia. A value of `0%` leaves the
    drawing unchanged.
- `none`
  - : No filter is applied. Initial value.

## Examples

To view these examples, make sure to use a browser that supports this feature; see the
compatibility table below.

### Applying a blur

This example blurs a piece of text using the `filter` property.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.filter = "blur(4px)";
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
```

#### Result

{{ EmbedLiveSample('Applying_a_blur', 700, 180) }}

### Applying multiple filters

You can combine as many filters as you like. This example applies the
`contrast`, `sepia`, and `drop-shadow` filters to a
photo of a rhino.

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
<div style="display:none;">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" />
</div>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  // Draw unfiltered image
  ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

  // Draw image with filter
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
  ctx.drawImage(image, 400, 0, -image.width * 0.6, image.height * 0.6);
});
```

#### Result

{{ EmbedLiveSample('Applying_multiple_filters', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- CSS {{cssxref("filter")}}
- CSS {{cssxref("&lt;filter-function&gt;")}}
