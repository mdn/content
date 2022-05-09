---
title: IDBFileRequest
slug: Web/API/IDBFileRequest
tags:
  - API
  - DOM
  - Files
  - Interface
  - Non-standard
  - Reference
browser-compat: api.IDBFileRequest
---
{{APIRef("IndexedDB")}} {{non-standard_header}}

The **`IDBFileRequest`** interface provides some extra properties necessary for the {{domxref("IDBFileHandle")}} objects.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Properties

_`IDBFileRequest` also inherits properties from the {{domxref("EventTarget")}} interface
as well as the `then()` method from the defunct `DOMRequest`interface described below_.

- {{domxref("IDBFileRequest.lockedFile")}} {{readonlyinline}}
  - : The {{domxref("IDBMutableFile")}} object from which the request was started.

## Methods

- `DOMRequest.then()`
  - : Returns a `DOMRequest` and takes two callback functions, one for its success and one for its failure cases, as parameters.

## Events

- {{domxref("IDBFileRequest.progress_event", "progress")}}
  - : Fired periodically while the operation is in progress.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("IDBFileHandle")}}
