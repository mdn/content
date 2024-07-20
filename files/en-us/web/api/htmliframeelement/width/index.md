---
title: "HTMLIFrameElement: width property"
short-title: width
slug: Web/API/HTMLIFrameElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{domxref("HTMLIFrameElement")}} interface returns a string that reflects the `width` attribute of the {{HTMLElement("iframe")}} element, indicating the width of the frame in CSS pixels.

## Value

A string indicating the width of the frame in CSS pixels.

## Examples

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.width); // Output: '800'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
