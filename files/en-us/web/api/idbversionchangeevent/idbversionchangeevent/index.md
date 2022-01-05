---
title: IDBVersionChangeEvent()
slug: Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent
tags:
  - API
  - Constructor
  - Reference
  - IDBVersionChangeEvent
  - IndexedDB
  - Storage
  - Database
browser-compat: api.IDBVersionChangeEvent.IDBVersionChangeEvent
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("IndexedDB")}}

The **`IDBVersionChangeEvent()`** constructor
creates a new {{domxref("IDBVersionChangeEvent")}} object, which is used to represent
when a version of the database has changed, as a result of the
{{domxref('IDBOpenDBRequest.onupgradeneeded')}} event handler.

## Syntax

```js
var idbVersionChangeEvent = new IDBVersionChangeEvent();
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating the event which occurred. For
    `IDBVersionChangeEvent` this is `versionchange`.
- `eventInitDict`

  - : An optional dictionary of initial values for the event's properties. These are as
    follows:

    - `oldVersion`: An unsigned long representing the previous version of
      the database. Default is `0`.
    - `newVersion`: An unsigned long representing the new version of the
      database, or `null` if the database is being deleted. Default is
      `null`.

## Examples

For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
