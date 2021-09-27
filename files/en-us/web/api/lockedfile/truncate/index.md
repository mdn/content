---
title: LockedFile.truncate()
slug: Web/API/LockedFile/truncate
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

The `truncate` method is used to remove some data within the file.

If the method is called with no argument, the operation removes all the bytes starting
at the index set in {{domxref("LockedFile.location")}}.

If the method is called with an argument, the operation removes all the bytes starting
at the index corresponding to the parameter and regardless of the value of
{{domxref("LockedFile.location")}}.

## Syntax

```js
var request = instanceOfLockedFile.truncate(start);
```

### Parameters

- `start` {{optional_inline}}
  - : A number representing the index where to start the operation.

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
