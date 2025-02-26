---
title: "HTMLFencedFrameElement: width property"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLFencedFrameElement.width
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`width`** property of the {{domxref("HTMLFencedFrameElement")}} gets and sets the value of the corresponding {{htmlelement("fencedframe")}} `width` attribute, which specifies the width of the element.

The size of the embedded content may be set by internal `contentWidth` and `contentHeight` properties of the `<fencedframe>`'s {{domxref("HTMLFencedFrameElement.config", "config")}} object. In such cases, changing the `width` or {{domxref("HTMLFencedFrameElement.height", "height")}} of the `<fencedframe>` will change the size of the embedded container on the page, but the document inside the container will be visually scaled to fit. The reported width and height of the embedded document (i.e. {{domxref("Window.innerWidth")}} and {{domxref("Window.innerHeight")}}) will be unchanged.

## Value

A string representing the width of the element in CSS pixels. The default value is `300`.

## Examples

```js
const frame = document.createElement("fencedframe");
frame.width = "480";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) on developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com
