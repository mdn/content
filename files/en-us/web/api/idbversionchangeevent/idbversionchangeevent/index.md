---
title: IDBVersionChangeEvent()
slug: Web/API/IDBVersionChangeEvent/IDBVersionChangeEvent
page-type: web-api-constructor
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
{{securecontext_header}}{{DefaultAPISidebar("IndexedDB")}}

The **`IDBVersionChangeEvent()`** constructor
creates a new {{domxref("IDBVersionChangeEvent")}} object, which is used to represent
when a version of the database has changed, as a result of the
{{domxref('IDBOpenDBRequest.upgradeneeded_event', 'onupgradeneeded')}} event handler.

## Syntax

```js
new IDBVersionChangeEvent(type)
new IDBVersionChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `versionchange`, `success`, or `blocked`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `oldVersion` {{optional_inline}}
      - : A number representing the previous version of the database. It defaults to `0`.
    - `newVersion` {{optional_inline}}
      - : An unsigned long representing the new version of the database,
        or `null` if the database is being deleted. It defaults is `null`.

### Return value

A new {{domxref("IDBVersionChangeEvent")}} object.

## Examples

For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
