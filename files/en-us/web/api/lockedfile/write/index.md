---
title: LockedFile.write()
slug: Web/API/LockedFile/write
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

The `write` method is used to write some data within the file.

The write starts at the position set in {{domxref("LockedFile.location")}} and moves
that position by the number of written bytes.

## Syntax

```js
var request = instanceOfLockedFile.write(data);
```

### Parameters

- `data`
  - : The data to write into the file. It can be a string or an
    {{jsxref("ArrayBuffer")}}.

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
