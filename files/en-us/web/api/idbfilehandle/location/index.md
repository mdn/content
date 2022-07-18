---
title: IDBFileHandle.location
slug: Web/API/IDBFileHandle/location
page-type: web-api-instance-property
tags:
  - API
  - Files
  - Property
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.location
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`location`** property of the {{domxref("IDBFileHandle")}} is a zero-based index
representing the position of the read/write pointer within the file.
Its value indicates at which bytes within the file any write or read operation will start.

This value is changed automatically after every read and write operation. The special
value `null` means end-of-file.

This property can be changed at will.

## Value

A number or the `null` value, meaning end-of-file.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This property is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
