---
title: IDBVersionChangeEvent.oldVersion
slug: Web/API/IDBVersionChangeEvent/oldVersion
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBVersionChangeEvent
  - IndexedDB
  - Property
  - Reference
  - Storage
  - oldVersion
browser-compat: api.IDBVersionChangeEvent.oldVersion
---
{{ APIRef("IndexedDB") }}

The **`oldVersion`** read-only property of the
{{domxref("IDBVersionChangeEvent")}} interface returns the old version number of the
database.

When the opened database doesn't exist yet, the value of `oldVersion` is 0.

{{AvailableInWorkers}}

## Value

A number containing a 64-bit integer.

## Examples

```js
const dbName = "sampleDB";
const dbVersion = 2;
const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (e) => {
  const db = request.result;
  if (e.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (e.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version < 3, 4…
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
  [view example live](https://mdn.github.io/to-do-notifications/).)
