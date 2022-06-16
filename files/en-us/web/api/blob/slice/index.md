---
title: Blob.slice()
slug: Web/API/Blob/slice
page-type: web-api-instance-method
tags:
  - API
  - Blob
  - File API
  - Method
  - Reference
browser-compat: api.Blob.slice
---
{{APIRef("File API")}}

The {{domxref("Blob")}} interface's **`slice()`** method
creates and returns a new `Blob` object which contains data from a subset of
the blob on which it's called.

## Syntax

```js
slice()
slice(start)
slice(start, end)
slice(start, end, contentType)
```

### Parameters

- `start` {{optional_inline}}
  - : An index into the {{domxref("Blob")}} indicating the first byte to include in the
    new {{domxref("Blob")}}. If you specify a negative value, it's treated as an offset
    from the end of the {{domxref("Blob")}} toward the beginning. For example, -10 would
    be the 10th from last byte in the {{domxref("Blob")}}. The default value is 0. If you
    specify a value for `start` that is larger than the size of the source
    {{domxref("Blob")}}, the returned {{domxref("Blob")}} has size 0 and contains no data.
- `end` {{optional_inline}}
  - : An index into the {{domxref("Blob")}} indicating the first byte that will \*not\* be
    included in the new {{domxref("Blob")}} (i.e. the byte exactly at this index is not
    included). If you specify a negative value, it's treated as an offset from the end of
    the {{domxref("Blob")}} toward the beginning. For example, -10 would be the 10th from
    last byte in the {{domxref("Blob")}}. The default value is `size`.
- `contentType` {{optional_inline}}
  - : The content type to assign to the new {{domxref("Blob")}}; this will be the value of
    its `type` property. The default value is an empty string.

### Return value

A new {{domxref("Blob")}} object containing the specified subset of the data contained
within the blob on which this method was called. The original blob is not altered.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
