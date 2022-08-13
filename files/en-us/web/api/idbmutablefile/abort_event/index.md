---
title: 'IDBMutableFile: abort event'
slug: Web/API/IDBMutableFile/abort_event
page-type: web-api-event
tags:
  - API
  - Files
  - Event
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBMutableFile.abort_event
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **'abort'** event is fired when the associated locked file has been aborted with the {{domxref("IDBFileHandle.abort()")}} method.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('abort', (event) => { })
onabort = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

This event is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("IDBFileHandle")}}
