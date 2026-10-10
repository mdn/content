---
title: "IDBFactory: deleteDatabase() method"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
page-type: web-api-instance-method
browser-compat: api.IDBFactory.deleteDatabase
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`deleteDatabase()`** method of the {{DOMxRef("IDBFactory")}} interface requests the deletion of a database. The method returns an {{DOMxRef("IDBOpenDBRequest")}} object immediately, and performs the deletion operation asynchronously.

## Syntax

```js-nolint
// For the current standard:
deleteDatabase(name)

// For the experimental version with `options` (see below):
deleteDatabase(name)
deleteDatabase(name, options)
```

### Parameters

- `name`
  - : The name of the database you want to delete. Note that attempting to delete a
    database that doesn't exist does not throw an exception, in contrast to
    {{DOMxRef("IDBDatabase.deleteObjectStore()")}}, which does throw an exception if the
    named object store does not exist.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko, since [version 26](/en-US/docs/Mozilla/Firefox/Releases/26), you can include
    a non-standard optional storage parameter that specifies whether you want to delete a
    `permanent` (the default value) IndexedDB, or an indexedDB in
    `temporary` storage (aka shared pool.)

### Return value

An {{DOMxRef("IDBOpenDBRequest")}} on which subsequent events related to this request are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is `undefined`.

## Description

If the database is successfully deleted, then a `success` event is fired on the request object returned from `deleteDatabase()`, with its `result` set to `undefined`. If an error occurs during deletion, an `error` event is fired on the request object returned from this method.

When `deleteDatabase()` is called, any other open connections to this particular database are sent a [`versionchange`](/en-US/docs/Web/API/IDBDatabase/versionchange_event) event, allowing them to close so that the deletion can proceed.

If a connection is not closed in response to the `versionchange` event, the deletion is blocked: the request's `success` event does not fire, and a [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event) event is fired on the request instead. The deletion stays pending until every connection to the database is closed.

To let it complete, close each connection. This is typically done by calling {{domxref("IDBDatabase.close()")}} from inside the `versionchange` event handler:

```js
// db is an open connection (e.g. from a previous indexedDB.open() success)
db.addEventListener("versionchange", () => {
  db.close();
});
```

While the deletion is blocked, connections that are still open keep working as normal: they can still run transactions until they are closed. Any later {{domxref("IDBFactory.open()", "open()")}} or `deleteDatabase()` request for the same database is queued behind the pending deletion, and only proceeds once the deletion has completed.

## Examples

### Basic usage

```js
const dbDeleteRequest = indexedDB.deleteDatabase("toDoList");

dbDeleteRequest.onerror = (event) => {
  console.error("Error deleting database.");
};

dbDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");

  console.log(dbDeleteRequest.result); // undefined
};
```

### Handling a blocked deletion

If another connection to the database is still open, for example in another tab, the deletion waits and a `blocked` event fires. This example tells the user what is happening, then reports when the deletion has gone through.

```js
const dbDeleteRequest = indexedDB.deleteDatabase("toDoList");

dbDeleteRequest.onblocked = (event) => {
  console.warn(
    "Deletion is blocked: close other tabs that have this app open to continue.",
  );
};

dbDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");
};
```

In the other tabs, closing the connection in a `versionchange` handler, as shown in the [Description](#description), lets the deletion proceed without the user having to do anything.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{DOMxRef("IDBDatabase")}}
- Using transactions: {{DOMxRef("IDBTransaction")}}
- Setting a range of keys: {{DOMxRef("IDBKeyRange")}}
- Retrieving and making changes to your data: {{DOMxRef("IDBObjectStore")}}
- Using cursors: {{DOMxRef("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
