---
title: "Document: images property"
short-title: images
slug: Web/API/Document/images
page-type: web-api-instance-property
browser-compat: api.Document.images
---

{{APIRef("DOM")}}

The **`images`** read-only property of the {{domxref("Document")}} interface returns a [collection](/en-US/docs/Web/API/HTMLCollection) of the [images](/en-US/docs/Web/API/HTMLImageElement) in the current HTML document.

## Value

An {{domxref("HTMLCollection")}} providing a live list of all of the images contained in the current document.
Each entry in the collection is an {{domxref("HTMLImageElement")}} representing a single image element.

## Usage notes

You can use either JavaScript array notation or the {{domxref("HTMLCollection.item", "item()")}} method on the returned collection to access the items in the collection.
The following are equivalent:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Examples

This example looks through the list of images and finds those named `"banner.gif"`.

```js
for (const image of document.images) {
  if (image.src === "banner.gif") {
    console.log("Found the banner");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
