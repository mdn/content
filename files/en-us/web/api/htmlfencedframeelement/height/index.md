---
title: "HTMLFencedFrameElement: height property"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLFencedFrameElement.height
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`height`** property of the {{domxref("HTMLFencedFrameElement")}} gets and sets the value of the corresponding {{htmlelement("fencedframe")}} `height` attribute, which specifies the height of the element.

The size of the embedded content may be set by internal `contentWidth` and `contentHeight` properties of the `<fencedframe>`'s {{domxref("HTMLFencedFrameElement.config", "config")}} object. In such cases, changing the {{domxref("HTMLFencedFrameElement.width", "width")}} or `height` of the `<fencedframe>` will change the size of the embedded container on the page, but the document inside the container will be visually scaled to fit. The reported width and height of the embedded document (i.e. {{domxref("Window.innerWidth")}} and {{domxref("Window.innerHeight")}}) will be unchanged.

## Value

A string representing the height of the element in CSS pixels. The default value is `150`.

## Examples

```js
const frame = document.createElement("fencedframe");
frame.height = "320";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) on developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) on developers.google.com
