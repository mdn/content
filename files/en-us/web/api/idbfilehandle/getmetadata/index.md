---
title: IDBFileHandle.getMetadata()
slug: Web/API/IDBFileHandle/getMetaData
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.getMetadata
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`getMetadata()`** method of the {{domxref("IDBFileHandle")}} allows retrieving some metadata about the file.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
getMetaData()
getMetaData(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object used to request specific metadata. Each key is a boolean where
    `true` means the metadata is expected and where `false` means it
    is not expected. Note that if the key is `undefined`, it is considered as
    if it were `true`.

    The following metadata are supported:

    - `size`
      - : The size of the file.
    - `lastModified`
      - : The [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) when the file was last modified.

### Return value

An {{domxref("IDBFileRequest")}} object. In case of success, the request's
`result` is an object with the metadata requested through the param object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
