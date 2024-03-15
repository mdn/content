---
title: "HTMLSourceElement: width property"
short-title: width
slug: Web/API/HTMLSourceElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{domxref("HTMLSourceElement")}} interface is a non-negative number indicating the width of the image resource in CSS pixels.

The property has an effect only if the parent of the current {{HTMLElement("source")}} element is a {{HTMLElement("picture")}} element.

It reflects the `width` attribute of the {{HTMLElement("source")}} element.

## Value

A non-negative number indicating the width of the image resource in CSS pixels.

## Examples

```html
<picture id="img">
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(min-width: 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image used when the browser does not support the sources"
    width="500"
    height="400" />
</picture>
```

```js
const img = document.getElementById("img");
const sources = img.querySelectorAll("source");
console.log(Array.from(sources).map((el) => el.width)); // Output: [1000, 800, 600]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
