---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - mimeType
  - Deprecated
browser-compat: api.MimeTypeArray
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`MimeTypeArray`** interface returns an array of {{domxref('MimeType')}} instances, each of which contains information about a supported browser plugins. This object is returned by {{domxref("Navigator.mimeTypes")}}.

## Properties

- {{domxref("MimeTypeArray.length")}} {{Deprecated_Inline}}
  - : The number of items in the array.

## Methods

- {{domxref("MimeTypeArray.item()")}} {{Deprecated_Inline}}
  - : Returns the `MimeType` object with the specified index.
- {{domxref("MimeTypeArray.namedItem()")}} {{Deprecated_Inline}}
  - : Returns the `MimeType` object with the specified name.

## Example

The following example tests whether a plugin is available for the application/pdf mime type and if so, which plugin that is.

```js
const mimeTypes = navigator.mimeTypes;
const flashPlugin = mimeTypes['video/x-flv'];
if (typeof flashPlugin === "undefined") {
  const vid = document.createElement('video');
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
