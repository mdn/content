---
title: IDBDatabase.objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Property
  - Reference
  - Storage
  - objectStoreNames
browser-compat: api.IDBDatabase.objectStoreNames
---
{{ APIRef("IndexedDB") }}

The **`objectStoreNames`** read-only property of the
{{domxref("IDBDatabase")}} interface is a {{ domxref("DOMStringList") }} containing a
list of the names of the [object stores](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) currently in the connected database.

{{AvailableInWorkers}}

## Value

A {{ domxref("DOMStringList") }} containing a list of
the names of the [object stores](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) currently
in the connected database.

## Examples

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the version of the connected database, which should be
  // an object that looks like { ['my-store-name'] }
  console.log(db.objectStoreNames);
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
