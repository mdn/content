---
title: HTMLImageElement.naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
tags:
  - API
  - HTMLImageElement
  - Intrinsic Height
  - Reference
  - Property
  - Vertical
  - naturalHeight
  - size
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
> [degrades the resolution of
> images on low-end devices](https://bugs.chromium.org/p/chromium/issues/detail?id=1187043#c7). In such cases, `naturalHeight` will consider the height of the image modified
> by such browser interventions as the natural height, and returns this value.

## Syntax

```js
let naturalHeight = htmlImageElement.naturalHeight;
```

### Value

An integer value indicating the intrinsic height, in CSS pixels, of the image. This is
the height at which the image is naturally drawn when no constraint or specific value is
established for the image. This natural height is corrected for the pixel density of the
device on which it's being presented, unlike {{domxref("HTMLImageElement.height",
  "height")}}.

If the intrinsic height is not available—either because the image does not specify an
intrinsic height or because the image data is not available in order to obtain this
information, `naturalHeight` returns 0.

## Example

This example displays both the natural, density-adjusted size of an image as well as
its rendered size as altered by the page's CSS and other factors.

### HTML

```html
<div class="box">
  <img src="/files/16797/clock-demo-400px.png" class="image">
</div>
<div class="output">
</div>
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

.output {
  padding-top: 2em;
}
```

The main thing of note in the CSS above is that the style used for the container the
image will be drawn in is 200px wide, and the image will be drawn to fill its width
(100%).

### JavaScript

```js
let output = document.querySelector(".output");
let image = document.querySelector("img");

window.addEventListener("load", event => {
  output.innerHTML += `Natural size: ${image.naturalWidth} x ` +
                      `${image.naturalHeight} pixels<br>`;
  output.innerHTML += `Displayed size: ${image.width} x ` +
                      `${image.height} pixels`;
});
```

The JavaScript code dumps the natural and as-displayed sizes into the
{{HTMLElement("div")}} with the class `output`. This is done in response to
the window's {{domxref("Window.load_event", "load")}} event handler, in order to ensure
that the image is available before attempting to examine its width and height.

### Result

{{EmbedLiveSample("Example", 600, 280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
