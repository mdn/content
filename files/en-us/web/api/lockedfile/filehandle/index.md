---
title: LockedFile.fileHandle
slug: Web/API/LockedFile/fileHandle
tags:
  - API
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
{{APIRef("File System API")}}{{non-standard_header}}

## Summary

The `fileHandle` property gives access to the {{domxref("IDBMutableFile")}}
object that produced the {{domxref("LockedFile")}} object.

## Syntax

```js
var handler = instanceOfLockedFile.fileHandle
```

## Value

A {{domxref("IDBMutableFile")}} object.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft Proposal. |

## See also

- {{domxref("LockedFile")}}
