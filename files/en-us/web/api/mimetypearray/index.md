---
title: MimeTypeArray
slug: Web/API/MimeTypeArray
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.MimeTypeArray
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`MimeTypeArray`** interface returns an array of {{domxref('MimeType')}} instances, each of which contains information about a supported browser plugins. This object is returned by {{domxref("Navigator.mimeTypes")}}.

> **Note:** This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs use types that wrap around ECMAScript array types instead, so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

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
const pdf = mimeTypes.namedItem("application/pdf");

if (pdf) {
  console.log(pdf.description);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
