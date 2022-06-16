---
title: IDBFileHandle.mode
slug: Web/API/IDBFileHandle/mode
page-type: web-api-instance-property
tags:
  - API
  - Files
  - Property
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.mode
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`mode`** read-only property of the {{domxref("IDBFileHandle")}} interface
provides the read/write status of the file.

## Value

A string, either `readonly` or `readwrite`.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This interface is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
