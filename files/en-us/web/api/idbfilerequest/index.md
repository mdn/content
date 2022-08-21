---
title: IDBFileRequest
slug: Web/API/IDBFileRequest
page-type: web-api-interface
tags:
  - API
  - DOM
  - Files
  - Interface
  - Reference
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileRequest
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`IDBFileRequest`** interface provides some extra properties necessary for the {{domxref("IDBFileHandle")}} objects.

## Properties

_`IDBFileRequest` also inherits properties from the {{domxref("EventTarget")}} interface
as well as the `then()` method from the defunct `DOMRequest` interface described below_.

- {{domxref("IDBFileRequest.lockedFile")}} {{ReadOnlyInline}}
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

This interface is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("IDBFileHandle")}}
