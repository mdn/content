---
title: "HTMLVideoElement: height property"
short-title: height
slug: Web/API/HTMLVideoElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLVideoElement")}} interface returns an integer that reflects the `height` attribute of the {{HTMLElement("video")}} element, specifying the displayed height of the resource in CSS pixels.

## Value

A positive integer or 0.

## Examples

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.height); // Output: 600
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
- {{domxref("HTMLSourceElement.height")}}
