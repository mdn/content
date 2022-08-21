---
title: IDBFileHandle.active
slug: Web/API/IDBFileHandle/active
page-type: web-api-instance-property
tags:
  - API
  - Files
  - Property
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.abort
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The read-only **`active`** property of the {{domxref("IDBFileHandle")}} interface
indicates if the object is still usable (`true`), or not (`false`). If the object is inactive then it is impossible to perform any
read or write operation with it.
Typically, an {{domxref("IDBFileHandle")}} object becomes inactive when the {{domxref("IDBFileHandle.abort()")}} method is called,
or if an error occurs.

## Value

A boolean value.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This property is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
