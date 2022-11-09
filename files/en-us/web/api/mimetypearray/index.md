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

## Instance properties

- {{domxref("MimeTypeArray.length")}} {{Deprecated_Inline}}
  - : The number of items in the array.

## Instance methods

- {{domxref("MimeTypeArray.item()")}} {{Deprecated_Inline}}
  - : Returns the `MimeType` object with the specified index.
- {{domxref("MimeTypeArray.namedItem()")}} {{Deprecated_Inline}}
  - : Returns the `MimeType` object with the specified name.

## Example

The following example tests whether a plugin is available for the 'application/pdf' mime type and if so, logs its description.

```js
const mimeTypes = navigator.mimeTypes;
const pdf = mimeTypes.namedItem('application/pdf');

if (pdf) {
  console.log(pdf.description);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
