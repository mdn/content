---
title: "HTMLImageElement: naturalHeight property"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.naturalHeight
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} interface's
**`naturalHeight`** property is a read-only value which
returns the intrinsic (natural), density-corrected height of the image in
{{Glossary("CSS pixel", "CSS pixels")}}.

This is the height the image is if
drawn with nothing constraining its height; if you don't specify a height for the image,
or place the image inside a container that either limits or expressly specifies the
image height, it will be rendered this tall.

> **Note:** Most of the time the natural height is the actual height of the image sent by the server.
> Nevertheless, browsers can modify an image before pushing it to the renderer. For example, Chrome
> [degrades the resolution of images on low-end devices](https://crbug.com/1187043#c7). In such cases, `naturalHeight` will consider the height of the image modified
> by such browser interventions as the natural height, and returns this value.

## Value

An integer value indicating the intrinsic height, in CSS pixels, of the image. This is
the height at which the image is naturally drawn when no constraint or specific value is
established for the image. This natural height is corrected for the pixel density of the
device on which it's being presented, unlike {{domxref("HTMLImageElement.height", "height")}}.

If the intrinsic height is not available—either because the image does not specify an
intrinsic height or because the image data is not available in order to obtain this
information, `naturalHeight` returns 0.

## Examples

This example displays both the natural, density-adjusted size of an image as well as
its rendered size as altered by the page's CSS and other factors.

### HTML

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
    class="image"
    alt="A round wall clock with a white dial and black numbers" />
</div>
<pre></pre>
```

The HTML features a 400x398 pixel image which is placed inside a
{{HTMLElement("div")}}.

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}
```

The main thing of note in the CSS above is that the style used for the container the
image will be drawn in is 200px wide, and the image will be drawn to fill its width
(100%).

### JavaScript

```js
const output = document.querySelector("pre");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});
```

The JavaScript code dumps the natural and as-displayed sizes into the
{{HTMLElement("pre")}}. This is done in response to
the images's {{domxref("HTMLElement.load_event", "load")}} event handler, in order to ensure
that the image is available before attempting to examine its width and height.

### Result

{{EmbedLiveSample("Examples", 600, 280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
