---
title: LockedFile.readAsArrayBuffer()
slug: Web/API/LockedFile/readAsArrayBuffer
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

The `readAsArrayBuffer` method is used to read the content of the
{{domxref("LockedFile")}} object and provide the result of that reading as an
{{jsxref("ArrayBuffer")}}. In many ways, it performs like the
{{domxref("FileReader.readAsArrayBuffer()")}} method.

The reading operation starts at the position given by the
{{domxref("LockedFile.location")}} property.

## Syntax

```js
var request = instanceOfLockedFile.readAsArrayBuffer(size);
```

### Parameters

- `size`
  - : A number representing the number of bytes to read in the file.

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.
In case of success, the request's `result` is an {{jsxref("ArrayBuffer")}}
representing the data that have been read.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
