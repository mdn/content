---
title: "IDBDatabase: objectStoreNames property"
short-title: objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
page-type: web-api-instance-property
browser-compat: api.IDBDatabase.objectStoreNames
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`objectStoreNames`** read-only property of the
{{domxref("IDBDatabase")}} interface is a {{ domxref("DOMStringList") }} containing a
list of the names of the [object stores](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) currently in the connected database.

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
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the names of the object stores of the connected database, which should be
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
