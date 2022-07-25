---
title: IDBFileHandle.fileHandle
slug: Web/API/IDBFileHandle/fileHandle
page-type: web-api-instance-property
tags:
  - API
  - Files
  - Property
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.fileHandle
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The read-only **`fileHandle`** property of the {{domxref("IDBFileHandle")}} interface
returns the {{domxref("IDBMutableFile")}} object that produced this object.

## Value

A {{domxref("IDBMutableFile")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This property is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
