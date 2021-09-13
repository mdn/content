---
title: FileHandle.getFile()
slug: Web/API/IDBMutableFile/getFile
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

The `getFile` method allows to retrieve a read-only snapshot of the handled
file in the form of a {{domxref("File")}} object.

## Syntax

```js
var request = instanceOfFileHandle.getFile();
```

### Return

A {{domxref("DOMRequest")}} object. In case of success, the request's
`result` is a {{domxref("File")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## See also

- {{domxref("IDBMutableFile")}}
