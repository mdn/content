---
title: "HTMLEmbedElement: width property"
short-title: width
slug: Web/API/HTMLEmbedElement/width
page-type: web-api-instance-property
browser-compat: api.HTMLEmbedElement.width
---

{{APIRef("HTML DOM")}}

The **`width`** property of the {{domxref("HTMLEmbedElement")}} interface returns a string that reflects the `width` attribute of the {{HTMLElement("embed")}} element, indicating the displayed width of the resource in CSS pixels.

## Value

A string indicating the displayed width of the resource in CSS pixels.

## Examples

```html
<embed id="el" width="800" height="600" />
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
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
