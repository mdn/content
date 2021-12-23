---
title: FileRequest
slug: Web/API/FileRequest
tags:
  - API
  - DOM
  - Files
  - Interface
  - Non-standard
  - Reference
---
{{APIRef("File System API")}} {{non-standard_header}}

## Summary

The `FileRequest` interface extends the {{domxref("DOMRequest")}} interface to provide some extra properties necessary for the {{domxref("LockedFile")}} objects.

## Properties

_`FileRequest` also inherits properties from the [`DOMRequest`](/en-US/docs/Web/API/DOMRequest#properties) interface_.

- {{domxref("FileRequest.lockedFile")}} {{readonlyinline}}
  - : The {{domxref("LockedFile")}} object from which the request was started.
- {{domxref("FileRequest.onprogress")}}
  - : A callback handler called repeatedly while the operation represented by the `FileRequest` is in progress.

## Methods

None.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("LockedFile")}}
