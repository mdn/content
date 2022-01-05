---
title: LockedFile.flush()
slug: Web/API/LockedFile/flush
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

The `flush` method is used to ensure any change made to a file is properly
written on disk.

For performance reasons, a {{domxref("LockedFile")}} object buffers all its operation
in memory. This allows fast writing and reading operations. Periodically, the data are
written onto disk. However, if something goes wrong before that, some operations can be
lost. To avoid that, it's possible to force a write onto the disk by calling the
`flush` method.

## Syntax

```js
var request = instanceOfLockedFile.flush();
```

### Return

A {{domxref("FileRequest")}} object to handle the success or failure of the operation.

## Specifications

| Specification                        | Status                           | Comment        |
| ------------------------------------ | -------------------------------- | -------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal |

## See also

- {{domxref("LockedFile")}}
