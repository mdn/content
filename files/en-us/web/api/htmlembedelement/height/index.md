---
title: "HTMLEmbedElement: height property"
short-title: height
slug: Web/API/HTMLEmbedElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLEmbedElement.height
---

{{APIRef("HTML DOM")}}

The **`height`** property of the {{domxref("HTMLEmbedElement")}} interface returns a string that reflects the `height` attribute of the {{HTMLElement("embed")}} element, indicating the displayed height of the resource in CSS pixels.

## Value

A string indicating the displayed height of the resource in CSS pixels.

## Examples

```html
<embed id="el" width="800" height="600" />
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
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
