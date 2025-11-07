---
title: "HTMLImageElement: alt property"
short-title: alt
slug: Web/API/HTMLImageElement/alt
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.alt
---

{{APIRef("HTML DOM")}}

The **`alt`** property of the {{domxref("HTMLImageElement")}} interface provides fallback (alternate) text to display when the image specified by the {{HTMLElement("img")}} element is not displayed, whether because of an error, because the user has disabled the loading of images, or because the image hasn't finished loading yet. It reflects the `<img>` element's [`alt`](/en-US/docs/Web/HTML/Reference/Elements/img#alt) content attribute.

There are important accessibility implications of providing appropriate alt text, and the requirements may differ based on the purpose of the image. See the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions) reference for more information.

## Value

A string.

## Examples

### Setting the alt attribute

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
