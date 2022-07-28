---
title: IDBDatabase.close()
slug: Web/API/IDBDatabase/close
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBDatabase.close
---
{{ APIRef("IndexedDB") }}

The **`close()`** method of the {{domxref("IDBDatabase")}}
interface returns immediately and closes the connection in a separate thread.

The connection is not actually closed until all transactions created using this
connection are complete. No new transactions can be created for this connection once
this method is called. Methods that create transactions throw an exception if a closing
operation is pending.

{{AvailableInWorkers}}

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4); // opening a database.

// Create event handlers for both success and failure of
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db variable.
  db = DBOpenRequest.result;

  // now let's close the database again!
  db.close();
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
