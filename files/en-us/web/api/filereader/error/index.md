---
title: FileReader.error
slug: Web/API/FileReader/error
tags:
  - API
  - File API
  - Files
  - Property
  - Reference
browser-compat: api.FileReader.error
---
{{APIRef("File API")}}

The {{domxref("FileReader")}} **`error`** property returns the
error that occurred while reading the file.

## Syntax

```js
var error = instanceOfFileReader.error
```

## Value

A {{domxref("DOMError")}} containing the relevant error. In Chrome 48+/Firefox 58+ this
property returns a {{domxref("DOMException")}} because `DOMError` has been
removed from the DOM standard.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
