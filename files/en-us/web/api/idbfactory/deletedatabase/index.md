---
title: IDBFactory.deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBFactory
  - IndexedDB
  - Method
  - Reference
  - Storage
  - deleteDatabase
browser-compat: api.IDBFactory.deleteDatabase
---
{{APIRef("IndexedDB")}}

The **`deleteDatabase()`** method of the
{{DOMxRef("IDBFactory")}} interface requests the deletion of a database. The method
returns an {{DOMxRef("IDBOpenDBRequest")}} object immediately, and performs the deletion
operation asynchronously.

If the database is successfully deleted, then a `success` event is fired on
the request object returned from this method, with its `result` set to
`undefined`. If an error occurs while the database is being deleted, then an
`error` event is fired on the request object that is returned from this
method.

When `deleteDatabase()` is called, any other open connections to this
particular database will get a [versionchange](/en-US/docs/Web/API/IDBDatabase/versionchange_event) event.

{{AvailableInWorkers}}

## Syntax

```js
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
- `options` {{optional_inline}} {{NonStandardBadge}}
  - : In Gecko, since [version 26](/en-US/docs/Mozilla/Firefox/Releases/26), you can include
    a non-standard optional storage parameter that specifies whether you want to delete a
    `permanent` (the default value) IndexedDB, or an indexedDB in
    `temporary` storage (aka shared pool.)

### Return value

A {{DOMxRef("IDBOpenDBRequest")}} on which subsequent events related to this request
are fired.

## Examples

```js
const DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = (event) => {
  console.error("Error deleting database.");
};

DBDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");

  console.log(event.result); // should be undefined
};
```

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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([View the example live](https://mdn.github.io/to-do-notifications/)).
