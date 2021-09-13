---
title: LockedFile.getMetadata()
slug: Web/API/LockedFile/getMetaData
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

The `getMetadata` method allows to retrieve some metadata about the locked
file.

## Syntax

```js
var request = instanceOfLockedFile.getMetadata(param);
```

### Parameters

- `param` {{optional_inline}}
  - : An object used to request specific metadata. Each key is a boolean where
    `true` means the metadata is expected and where `false` means it
    is not expected. Note that if the key is `undefined`, it is considered as
    if it were `true`. The following metadata are supported:

<!---->

- `size` : will provide the size of the file
- `lastModified` : will provide the date when the file was last modified

### Return

A {{domxref("FileRequest")}} object. In case of success, the request's
`result` is an object with the metadata requested through the param object.
They have the following format:

- `size` : a number
- `lastModified` : a
  [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
  object

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
