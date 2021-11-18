---
title: FileHandle.onabort
slug: Web/API/IDBMutableFile/onabort
tags:
  - API
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{ non-standard_header }}

## Summary

Specifies an event listener to receive {{event("abort")}} events. These events occur when the associated locked file has been aborted with the {{domxref("LockedFile.abort()")}} method.

## Syntax

```js
instanceOfFileHandle.onabort = funcRef;
```

Where `funcRef` is a function to be called when the {{event("abort")}} event occurs.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("LockedFile")}}
