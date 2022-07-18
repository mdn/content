---
title: IDBFileHandle.abort()
slug: Web/API/IDBFileHandle/abort
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.abort
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`abort()`** method of the {{domxref("IDBFileHandle")}} interface
release the lock on the object, making it inactive:
 its {{domxref("IDBFileHandle.active", "active")}} property is set to `false`
 and all ongoing operations are canceled.

> **Warning:** When an ongoing operation is canceled, there is no rollback
> database transaction, therefore the file can be corrupted if the
> canceled operation was performing some writing.

## Syntax

```js
abort()
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
