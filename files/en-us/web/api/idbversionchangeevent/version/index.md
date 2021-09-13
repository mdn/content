---
title: IDBVersionChangeEvent.version
slug: Web/API/IDBVersionChangeEvent/version
tags:
  - API
  - Deprecated
  - IndexedDB
  - NeedsExample
  - Property
  - Reference
browser-compat: api.IDBVersionChangeEvent.version
---
{{ APIRef("IndexedDB") }} {{Deprecated_Header}}

> **Warning:** While this property is still implemented in older browsers,
> the latest specification replaces it with the `oldVersion` and
> `newVersion` attributes. See the compatibility table to know what browsers
> support them.

The **`version`** property of the
{{domxref("IDBVersionChangeEvent")}} interface returns The new version of the database
in a [versionchange](/en-US/docs/Web/API/IDBTransaction#version_change) transaction.

## Syntax

```js
const version = iDBVersionChangeEvent.version;
```

## Value

A [64-bit
integer](</en-US/docs/NSPR_API_Reference/Long_Long_(64-bit)_Integers>).

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
