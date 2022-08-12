---
title: 'IDBFileRequest: progress event'
slug: Web/API/IDBFileRequest/progress_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Files
  - Event
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileRequest.progress_event
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`progress`** is fired periodically when the request in progress.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('complete', (event) => { });
onerror = (complete) => { };
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

request.onprogress = (status) => {
  const progress = document.querySelector('progress');

  progress.value = status.loaded;
  progress.max   = status.total;
}
```

## Specifications

Not part of any current specification.

## Browser compatibility

This event is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{ domxref("IDBFileRequest") }}
- {{ domxref("IDBMutableFile") }}
