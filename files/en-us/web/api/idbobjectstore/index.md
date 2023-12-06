---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
page-type: web-api-interface
browser-compat: api.IDBObjectStore
---

{{APIRef("IndexedDB")}}

The **`IDBObjectStore`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents an object store in a database. Records within an object store are sorted according to their keys. This sorting enables fast insertion, look-up, and ordered retrieval.

{{AvailableInWorkers}}

## Instance properties

- {{domxref("IDBObjectStore.indexNames")}} {{ReadOnlyInline}}
  - : A list of the names of [indexes](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#index) on objects in this object store.
- {{domxref("IDBObjectStore.keyPath")}} {{ReadOnlyInline}}
  - : The [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) of this object store. If this attribute is `null`, the application must provide a key for each modification operation.
- {{domxref("IDBObjectStore.name")}}
  - : The name of this object store.
- {{domxref("IDBObjectStore.transaction")}} {{ReadOnlyInline}}
  - : The {{domxref("IDBTransaction")}} object to which this object store belongs.
- {{domxref("IDBObjectStore.autoIncrement")}} {{ReadOnlyInline}}
  - : The value of the auto increment flag for this object store.

## Instance methods

- {{domxref("IDBObjectStore.add()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) of the `value`, and stores the cloned value in the object store. This is for adding new records to an object store.
- {{domxref("IDBObjectStore.clear()")}}
  - : Creates and immediately returns an {{domxref("IDBRequest")}} object, and clears this object store in a separate thread. This is for deleting all current records out of an object store.
- {{domxref("IDBObjectStore.count()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns the total number of records that match the provided key or {{domxref("IDBKeyRange")}}. If no arguments are provided, it returns the total number of records in the store.
- {{domxref("IDBObjectStore.createIndex()")}}
  - : Creates a new index during a version upgrade, returning a new {{domxref("IDBIndex")}} object in the connected database.
- {{domxref("IDBObjectStore.delete()")}}
  - : returns an {{domxref("IDBRequest")}} object, and, in a separate thread, deletes the store object selected by the specified key. This is for deleting individual records out of an object store.
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : Destroys the specified index in the connected database, used during a version upgrade.
- {{domxref("IDBObjectStore.get()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns the store object store selected by the specified key. This is for retrieving specific records from an object store.
- {{domxref("IDBObjectStore.getKey()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread retrieves and returns the record key for the object in the object stored matching the specified parameter.
- {{domxref("IDBObjectStore.getAll()")}}
  - : Returns an {{domxref("IDBRequest")}} object retrieves all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : Returns an {{domxref("IDBRequest")}} object retrieves record keys for all objects in the object store matching the specified parameter or all objects in the store if no parameters are given.
- {{domxref("IDBObjectStore.index()")}}
  - : Opens an index from this object store after which it can, for example, be used to return a sequence of records sorted by that index using a cursor.
- {{domxref("IDBObjectStore.openCursor()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns a new {{domxref("IDBCursorWithValue")}} object. Used for iterating through an object store by primary key with a cursor.
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, returns a new {{domxref("IDBCursor")}}. Used for iterating through an object store with a key.
- {{domxref("IDBObjectStore.put()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) of the `value`, and stores the cloned value in the object store. This is for updating existing records in an object store when the transaction's mode is `readwrite`.

## Example

This example shows a variety of different uses of object stores, from updating the data structure with {{domxref("IDBObjectStore.createIndex")}} inside an `onupgradeneeded` function, to adding a new item to our object store with {{domxref("IDBObjectStore.add")}}. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in db.
  db = DBOpenRequest.result;
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
DBOpenRequest.onupgradeneeded = (event) => {
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

// Create a new item to add in to the object store
const newItem = [
  {
    taskTitle: "Walk dog",
    hours: 19,
    minutes: 30,
    day: 24,
    month: "December",
    year: 2013,
    notified: "no",
  },
];

// open a read/write db transaction, ready for adding the data
const transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of the transaction completing, when everything is done
transaction.oncomplete = (event) => {
  note.innerHTML += "<li>Transaction completed.</li>";
};

transaction.onerror = (event) => {
  note.innerHTML +=
    "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
};

// create an object store on the transaction
const objectStore = transaction.objectStore("toDoList");
// make a request to add our newItem object to the object store
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Request successful .</li>";
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
