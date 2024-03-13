---
title: "HTMLSourceElement: height property"
short-title: height
slug: Web/API/HTMLSourceElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLSourceElement")}} interface is a non-negative number indicating the height of the image resource in CSS pixels.

The property has an effect only if the parent of the current {{HTMLElement("source")}} element is a {{HTMLElement("picture")}} element.

It reflects the `height` attribute of the {{HTMLElement("source")}} element.

## Value

A non-negative number indicating the height of the image resource in CSS pixels.

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
console.log(Array.from(sources).map((el) => el.height)); // Output: [400, 800, 800]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
