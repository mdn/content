---
title: IDBFileHandle.flush()
slug: Web/API/IDBFileHandle/flush
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.flush
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`flush()`** method of the {{domxref("IDBFileHandle")}} interface
ensures any change made to a file is properly written on disk.

For performance reasons, a {{domxref("IDBFileHandle")}} object buffers all its operation in memory.
This allows fast writing and reading operations.
Periodically, the data are written onto disk.
However, if something goes wrong before that, some operations can be lost.
To avoid that, it's possible to force a write onto the disk by calling the `flush()` method.

## Syntax

```js
flush()
```

### Parameters

None.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This method is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
