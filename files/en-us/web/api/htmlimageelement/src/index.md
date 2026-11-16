---
title: "HTMLImageElement: src property"
short-title: src
slug: Web/API/HTMLImageElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{domxref("HTMLImageElement")}} interface specifies the image to display in the {{HTMLElement("img")}} element. It reflects the `<img>` element's [`src`](/en-US/docs/Web/HTML/Reference/Elements/img#src) content attribute.

Setting `src` property triggers scheduling of a task to fetch the specified resource; the element does not need to be inserted into the active document first.
Unless loading is set to `lazy`, the image will be fetched almost immediately (if lazy loading is specified the request is deferred until the element is near the viewport: which can't happen until the element is inserted).

## Value

A string. For more information about the syntax of the `src` attribute, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#src) reference.

## Examples

### Setting the src attribute

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.currentSrc")}}
- {{domxref("HTMLImageElement.srcset")}}
- {{domxref("HTMLImageElement.sizes")}}
