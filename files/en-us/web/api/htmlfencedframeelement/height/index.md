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

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
