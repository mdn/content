---
title: IDBMutableFile.open()
slug: Web/API/IDBMutableFile/open
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBMutableFile.open
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`open()`** method of the {{domxref("IDBMutableFile")}}
returns an {{domxref("IDBFileHandle")}} object
that allows to safely write in the file.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

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

{{Compat}}

## See also

- {{domxref("IDBMutableFile")}}
