---
title: IDBFileHandle.write()
slug: Web/API/IDBFileHandle/write
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.write
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`write()`** method of the {{domxref("IDBFileHandle")}} interface
writes some data into the file.

The write operation starts at the position set in {{domxref("IDBFileHandle.location", "location")}} and moves
that position by the number of written bytes.

## Syntax

```js
write(data)
```

### Parameters

- `data`
  - : The data to write into the file. It can be a string or an
    {{jsxref("ArrayBuffer")}}.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This method is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
