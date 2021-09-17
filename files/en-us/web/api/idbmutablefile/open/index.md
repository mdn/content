---
title: FileHandle.open()
slug: Web/API/IDBMutableFile/open
tags:
  - API
  - Files
  - Method
  - Non Standard
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{non-standard_header}}

## Summary

The `open` method returns a {{domxref("LockedFile")}} object that allows to
safely write in the file.

## Syntax

```js
var myFile = instanceOfFileHandle.open(mode);
```

### Parameters

- mode
  - : A string that specifies the writing mode for the file. It can be
    `readonly` or `readwrite`.

### Return

A {{domxref("LockedFile")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## See also

- {{domxref("IDBMutableFile")}}
