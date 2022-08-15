---
title: 'IDBFileHandle: error_event'
slug: Web/API/IDBFileHandle/error_event
page-type: web-api-event
tags:
  - API
  - Files
  - Event
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle.error_event
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`error`** is fired when something goes wrong with the {{domxref("IDBFileHandle")}} object.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => { })
onerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This event is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBFileHandle")}}
