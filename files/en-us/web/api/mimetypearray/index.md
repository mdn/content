---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
tags:
  - API
  - Interface
  - Reference
  - mimeType
browser-compat: api.MimeTypeArray
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`MimeTypeArray`** interface returns an array of {{domxref('MimeType')}} instances, each of which contains information about a supported browser plugins. This object is returned by {{domxref("Navigator.mimeTypes")}}.

## Properties

- {{domxref("MimeTypeArray.length")}}
  - : The number of items in the array.

## Methods

- {{domxref("MimeTypeArray.item()")}}
  - : Returns the `MimeType` object with the specified index.
- {{domxref("MimeTypeArray.namedItem()")}}
  - : Returns the `MimeType` object with the specified name.

## Example

The following example tests whether a plugin is available for the application/pdf mime type and if so, which plugin that is.

```js
var mimeTypes = navigator.mimeTypes;
var flashPlugin = mimeTypes['video/x-flv'];
if (typeof flashPlugin === "undefined") {
  var vid = document.createElement('video');
  // Use vid.canPlayType() to test for a supported mime type.
} else {
  // Notify the user that flash is being deprecated and they
  //   should upgrade their browser.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
