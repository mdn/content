---
title: 'IDBFileRequest: progress event'
slug: Web/API/IDBFileRequest/progress_event
tags:
  - API
  - DOM
  - Files
  - Non-standard
  - Event
  - Reference
  - WebAPI
browser-compat: api.IDBFileRequest.progress_event
---
{{APIRef("IndexedDB")}} {{non-standard_header}}

The **`progress`** is fired periodically when the request in progress.

This event is not cancelable and does not bubble.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('complete', event => { });
onerror = complete => { };
```

## Event type

A {{domxref("Event")}} with two extra properties:

- `loaded`
  - : A number representing the current amount of bytes processed by the operation.
- `total`
  - : A number representing the total amount of bytes that will be processed by the operation.

## Examples

```js
// Assuming 'request' which is an IDBFileRequest object

request.onprogress = function (status) {
  var progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
```

## Specifications

Not part of any current specification.

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("IDBFileRequest") }}
- {{ domxref("IDBMutableFile") }}
