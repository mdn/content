---
title: "IDBDatabase: version property"
short-title: version
slug: Web/API/IDBDatabase/version
page-type: web-api-instance-property
browser-compat: api.IDBDatabase.version
---

{{ APIRef("IndexedDB") }}

The **`version`** property of the {{domxref("IDBDatabase")}}
interface is a [64-bit integer](/en-US/docs/NSPR_API_Reference/Long_Long_%2864-bit%29_Integers)
that contains the version of the connected database.
When a database is first created, this attribute is an empty string.

{{AvailableInWorkers}}

## Value

An integer containing the version of the connected database.

## Examples

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database
// being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the version of the connected database, which should be "4"
  console.log(db.version);
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
