---
title: IDBMutableFile.open()
slug: Web/API/IDBMutableFile/open
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBMutableFile.open
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`open()`** method of the {{domxref("IDBMutableFile")}}
returns an {{domxref("IDBFileHandle")}} object
that allows to safely write in the file.

## Syntax

```js
open(mode)
```

### Parameters

- `mode`
  - : A string that specifies the writing mode for the file. It can be `readonly` or `readwrite`.

### Return value

A {{domxref("IDBMutableFile")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This method is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBMutableFile")}}
