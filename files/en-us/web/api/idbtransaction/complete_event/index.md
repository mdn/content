---
title: "IDBTransaction: complete event"
short-title: complete
slug: Web/API/IDBTransaction/complete_event
page-type: web-api-event
browser-compat: api.IDBTransaction.complete_event
---

{{APIRef("IndexedDB")}}

The **`complete`** event of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) is fired when the transaction has successfully committed, which is either after you explicit call {{domxref("IDBTransaction.commit()")}} or when all requests have been successfully completed, and after handling their results, no new requests have been placed. See {{domxref("IDBTransaction")}} for more information.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("complete", (event) => {});
oncomplete = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Error creating database");
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
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `complete`
  transaction.addEventListener("complete", (event) => {
    console.log("Transaction was completed");
  });

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2019,
  };
  const objectStoreRequest = objectStore.add(newItem);

  objectStoreRequest.onsuccess = () => {
    // Issue a second request in the onsuccess handler,
    // so we can run this request after the first one completes,
    // while still reusing the same transaction
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      // No more requests, so the transaction completes after running this handler
      console.log(getAllRequest.result);
    };
  };
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
