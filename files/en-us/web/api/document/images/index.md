---
title: Document.images
slug: Web/API/Document/images
page-type: web-api-instance-property
tags:
  - API
  - Document
  - HTML DOM
  - Images
  - Property
  - Reference
browser-compat: api.Document.images
---
{{APIRef("DOM")}}

The **`images`** read-only property of
the {{domxref("Document")}} interface returns a [collection](/en-US/docs/Web/API/HTMLCollection) of the [images](/en-US/docs/Web/API/HTMLImageElement/Image) in the current HTML document.

## Value

An {{domxref("HTMLCollection")}} providing a live list of all of the images contained
in the current document. Each entry in the collection is an
{{domxref("HTMLImageElement")}} representing a single image element.

## Usage notes

You can use either JavaScript array notation or the {{domxref("HTMLCollection.item",
  "item()")}} method on the returned collection to access the items in the collection. The
following are equivalent:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Examples

This example looks through the list of images and finds one whose name is
`"banner.gif"`.

```js
const ilist = document.images;

for (let i = 0; i < ilist.length; i++) {
    if (ilist[i].src === 'banner.gif') {
        // found the banner
    }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
