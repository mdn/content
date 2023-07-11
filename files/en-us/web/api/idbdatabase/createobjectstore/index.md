---
title: "IDBDatabase: createObjectStore() method"
short-title: createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
page-type: web-api-instance-method
browser-compat: api.IDBDatabase.createObjectStore
---

{{ APIRef("IndexedDB") }}

The **`createObjectStore()`** method of the
{{domxref("IDBDatabase")}} interface creates and returns a new {{domxref("IDBObjectStore")}}.

The method takes the name of the store as well as a parameter object that lets you
define important optional properties. You can use the property to uniquely identify
individual objects in the store. As the property is an identifier, it should be unique
to every object, and every object should have that property.

This method can be called _only_ within a [`versionchange`](/en-US/docs/Web/API/IDBTransaction#version_change)
transaction.

{{AvailableInWorkers}}

## Syntax

```js-nolint
createObjectStore(name)
createObjectStore(name, options)
```

### Parameters

- `name`
  - : The name of the new object store to be created. Note that it is possible to create
    an object store with an empty name.
- `options` {{optional_inline}}

  - : An options object whose attributes are optional parameters to the method. It
    includes the following properties:
    - `keyPath` {{optional_inline}}
      - : The [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path)
        to be used by the new object store. If empty or not specified, the
        object store is created without a key path and uses
        [out-of-line keys](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#out-of-line_key).
        You can also pass in an array as a `keyPath`.
    - `autoIncrement` {{optional_inline}}
      - : If `true`, the object store has a [key generator](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator).
        Defaults to <code>false</code>.

### Return value

A new {{domxref("IDBObjectStore")}}.

### Exceptions

This method may raise a {{domxref("DOMException")}} with a {{domxref("DOMError")}} of
one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the method was not called from a
    `versionchange` transaction callback.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if a request is made on a source database that does not exist
    (for example, when the database has been deleted or removed). In Firefox previous to version 41,
    an `InvalidStateError` was raised in this case as well, which
    was misleading; this has now been fixed (see [Webkit bug 1176165](https://bugzil.la/1176165)).
- `ConstraintError` {{domxref("DOMException")}}
  - : Thrown if an object store with the given name (based on a case-sensitive comparison)
    already exists in the connected database.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if `autoIncrement` is set to true and `keyPath` is
    either an empty string or an array containing an empty string.

## Examples

```js
// Let us open our database
const request = window.indexedDB.open("toDoList", 4);

// This handler is called when a new version of the database
// is created, either when one has not been created before
// or when a new version number is submitted by calling
// window.indexedDB.open().
// This handler is only supported in recent browsers.
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>Error loading database.</li>";
  };

  // Create an objectStore for this database

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Object store created.</li>";
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
