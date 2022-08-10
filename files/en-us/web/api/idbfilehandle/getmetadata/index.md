---
title: IDBFileHandle.getMetadata()
slug: Web/API/IDBFileHandle/getMetaData
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.getMetadata
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`getMetadata()`** method of the {{domxref("IDBFileHandle")}} allows retrieving some metadata about the file.

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

This method is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
