---
title: LockedFile.readAsText()
slug: Web/API/LockedFile/readAsText
tags:
  - API
  - Files
  - Method
  - Non Standard
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{non-standard_header}}

## Summary

The `readAsText` method is used to read the content of the
{{domxref("LockedFile")}} object and provide the result of that reading as a string. In
many ways, it performs like the {{domxref("FileReader.readAsText()")}} method.

The reading operation starts at the position given by the
{{domxref("LockedFile.location")}} property.

## Syntax

```js
var request = instanceOfLockedFile.readAsText(size[, encoding]);
```

### Parameters

- `size`
  - : A number representing the number of bytes to read in the file.
- `encoding` {{optional_inline}}
  - : A string indicating the encoding to use for the returned data. By default, UTF-8 is
    assumed if this parameter is not specified.

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.
In case of success, the request's `result` is a string representing the data
that have been read.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
