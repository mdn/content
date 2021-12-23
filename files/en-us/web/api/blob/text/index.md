---
title: Blob.text()
slug: Web/API/Blob/text
tags:
  - API
  - Blob
  - File API
  - Method
  - Reference
  - String
  - Text
  - Utf-8
  - get
  - read
browser-compat: api.Blob.text
---
{{APIRef("File API")}}

The **`text()`** method in the
{{domxref("Blob")}} interface returns a {{jsxref("Promise")}} that resolves with a
string containing the contents of the blob, interpreted as UTF-8.

## Syntax

```js
var textPromise = blob.text();

blob.text().then(text => /* do something with the text */);

var text = await blob.text();
```

### Parameters

None.

### Returns

A promise that resolves with a {{domxref("USVString")}} which contains the blob's data
as a text string. The data is _always_ presumed to be in UTF-8 format.

## Usage notes

The {{domxref("FileReader")}} method {{domxref("FileReader.readAsText",
  "readAsText()")}} is an older method that performs a similar function. It works on both
`Blob` and {{domxref("File")}} objects. There are two key differences:

- `Blob.text()` returns a promise, whereas
  `FileReader.readAsText()` is an event based API.
- `Blob.text()` always uses UTF-8 as encoding, while
  `FileReader.readAsText()` can use a different encoding depending on the
  blob's type and a specified encoding name.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.text()")}}
- [Streams API](/en-US/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
