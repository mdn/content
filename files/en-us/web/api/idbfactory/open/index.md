---
title: "IDBFactory: open() method"
short-title: open()
slug: Web/API/IDBFactory/open
page-type: web-api-instance-method
browser-compat: api.IDBFactory.open
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`open()`** method of the {{domxref("IDBFactory")}} interface requests opening a [connection to a database](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection).

The method returns an {{domxref("IDBOpenDBRequest")}} object immediately, and performs the open operation asynchronously.
If the operation is successful, a `success` event is fired on the request object that is returned from this method, with its `result` attribute set to the new {{domxref("IDBDatabase")}} object for the connection.

May trigger `upgradeneeded`, `blocked` or `versionchange` events.

## Syntax

```js-nolint
open(name)
open(name, version)
```

### Parameters

- `name`
  - : The name of the database.
- `version` {{optional_inline}}
  - : Optional. The version to open the database with. If the version is not provided and the database exists, then a connection to the database will be opened without changing its version.
    If the version is not provided and the database does not exist, then it will be created with version `1`.

### Return value

A {{domxref("IDBOpenDBRequest")}} object on which subsequent events related to this request are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is a {{domxref("IDBDatabase")}} object representing the connection to the database.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the value of `version` is not a number greater than zero.

## Examples

Example of calling `open` with the current specification's `version` parameter:

```js
const request = window.indexedDB.open("toDoList", 4);
```

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases.
For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
// successfully, or not
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Browser storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
