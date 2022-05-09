---
title: 'IDFileHandle: abort event'
slug: Web/API/IDBFileHandle/abort_event
tags:
  - API
  - Files
  - Non-standard
  - Event
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.abort_event
---
{{APIRef("IndexedDB")}}{{ non-standard_header }}

The **`abort`** is fired when the associated file has been aborted with the {{domxref("IDBFileHandle.abort()")}} method.

This event is not cancelable and does not bubble.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('abort', event => { });
onabort = event => { };
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
