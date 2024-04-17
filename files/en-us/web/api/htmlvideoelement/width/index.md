---
title: "HTMLVideoElement: width property"
short-title: width
slug: Web/API/HTMLVideoElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{domxref("HTMLVideoElement")}} interface returns an integer that reflects the `width` attribute of the {{HTMLElement("video")}} element, specifying the displayed width of the resource in CSS pixels.

## Value

A positive integer or 0.

## Examples

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.width); // Output: 800
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
- {{domxref("HTMLSourceElement.width")}}
