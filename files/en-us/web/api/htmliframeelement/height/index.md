---
title: "HTMLIFrameElement: height property"
short-title: height
slug: Web/API/HTMLIFrameElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLIFrameElement")}} interface returns a string that reflects the `height` attribute of the {{HTMLElement("iframe")}} element, indicating the height of the frame in CSS pixels.

## Value

A string indicating the height of the frame in CSS pixels.

## Examples

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.height); // Output: '600'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
