---
title: IDBFileHandle.truncate()
slug: Web/API/IDBFileHandle/truncate
page-type: web-api-instance-method
tags:
  - API
  - Files
  - Method
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.truncate
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`truncate`** method of the {{domxref("IDBFileHandle")}} interface
removes some data within the file.

If the method is called with no argument, the operation removes all the bytes starting
at the index set in {{domxref("IDBFileHandle.location", "location")}}.

If the method is called with an argument, the operation removes all the bytes starting
at the index corresponding to the parameter and regardless of the value of
{{domxref("IDBFileHandle.location", "location")}}.

## Syntax

```js
truncate()
truncate(start)
```

### Parameters

- `start` {{optional_inline}}
  - : A number representing the index where to start the operation.

### Return value

An {{domxref("IDBFileRequest")}}` object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This method is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
