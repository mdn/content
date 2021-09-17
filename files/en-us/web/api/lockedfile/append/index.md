---
title: LockedFile.append()
slug: Web/API/LockedFile/append
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

The `append` method is used to write some data at the end of the file.

The write operation is performed at the end of the file, regardless of the
{{domxref("LockedFile.location")}} value, and actually sets this value to
`null`.

## Syntax

```js
var request = instanceOfLockedFile.append(data);
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
