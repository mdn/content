---
title: LockedFile.abort()
slug: Web/API/LockedFile/abort
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

The `abort` method is used to release the lock on the
{{domxref("LockedFile")}} object, making it inactive: its {{domxref("LockedFile.active",
  "active")}} property is set to false and all ongoing operations are canceled.

> **Note:** When an ongoing operation is canceled, there is no rollback
> (it is not a database transaction), therefore the file can be corrupted if the
> canceled operation was performing some writing.

## Syntax

```js
var request = instanceOfLockedFile.abort();
```

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
