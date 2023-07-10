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

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
