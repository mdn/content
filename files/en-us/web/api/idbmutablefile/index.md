---
title: IDBMutableFile
slug: Web/API/IDBMutableFile
page-type: web-api-interface
tags:
  - API
  - DOM
  - Files
  - Reference
  - Interface
  - Deprecated
  - Non-standard
browser-compat: api.IDBMutableFile
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`IDBMutableFile`** interface provides access in read or write mode to a file, dealing with all the necessary locks.

As `IDBMutableFile` objects are bound to a fake file system built using `IndexedDB`, such an object is created using the [`IDBDatabase.createMutableFile()`](/en-US/docs/Web/API/IDBDatabase#idbdatabase.createmutablefile) method.

## Properties

- {{domxref("IDBMutableFile.name")}} {{ReadOnlyInline}}
  - : The name of the handled file.
- {{domxref("IDBMutableFile.type")}} {{ReadOnlyInline}}
  - : The MIME type of the handled file.

## Methods

- {{domxref("IDBMutableFile.open()")}}
  - : Returns a {{domxref("IDBFileHandle")}} object to read or write the associated file safely.

### Events

- {{domxref("IDBMutableFile.abort_event", "abort")}}
  - : Fired when the handled file is aborted.
- {{domxref("IDBMutableFile.error_event", "error")}}
  - : Fired when something goes wrong.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This interface is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
- {{domxref("File")}}
