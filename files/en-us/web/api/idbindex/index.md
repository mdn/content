---
title: IDBIndex
slug: Web/API/IDBIndex
page-type: web-api-interface
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Interface
  - Reference
  - Storage
browser-compat: api.IDBIndex
---
{{APIRef("IndexedDB")}}

`IDBIndex` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) provides asynchronous access to an [index](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#index) in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data.

You can retrieve records in an object store through the primary key or by using an index. An index lets you look up records in an object store using properties of the values in the object stores records other than the primary key

The index is a persistent key-value storage where the value part of its records is the key part of a record in the referenced object store. The records in an index are automatically populated whenever records in the referenced object store are inserted, updated, or deleted. Each record in an index can point to only one record in its referenced object store, but several indexes can reference the same object store. When the object store changes, all indexes that refers to the object store are automatically updated.

You can grab a set of keys within a range. To learn more, see {{domxref("IDBKeyRange")}}.

{{AvailableInWorkers}}

## Properties

- {{domxref("IDBIndex.isAutoLocale")}} {{ReadOnlyInline}} {{ Non-Standard_inline() }} {{Experimental_Inline}}
  - : Returns a boolean value indicating whether the index had a `locale` value of `auto` specified upon its creation (see [`createIndex()`'s optionalParameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- {{domxref("IDBIndex.locale")}} {{ReadOnlyInline}} {{ Non-Standard_inline() }} {{Experimental_Inline}}
  - : Returns the locale of the index (for example `en-US`, or `pl`) if it had a `locale` value specified upon its creation (see [`createIndex()`'s optionalParameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters).)
- {{domxref("IDBIndex.name")}}
  - : The name of this index.
- {{domxref("IDBIndex.objectStore")}} {{ReadOnlyInline}}
  - : The name of the object store referenced by this index.
- {{domxref("IDBIndex.keyPath")}} {{ReadOnlyInline}}
  - : The [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) of this index. If null, this index is not auto-populated.
- {{domxref("IDBIndex.multiEntry")}} {{ReadOnlyInline}}
  - : Affects how the index behaves when the result of evaluating the index's key path yields an array. If `true`, there is one record in the index for each item in an array of keys. If `false`, then there is one record for each key that is an array.
- {{domxref("IDBIndex.unique")}} {{ReadOnlyInline}}
  - : If `true`, this index does not allow duplicate values for a key.

## Methods

Inherits from: [EventTarget](/en-US/docs/Web/API/EventTarget)

- {{domxref("IDBIndex.count()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and in a separate thread, returns the number of records within a key range.
- {{domxref("IDBIndex.get()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, finds either the value in the referenced object store that corresponds to the given key or the first corresponding value, if `key` is an {{domxref("IDBKeyRange")}}.
- {{domxref("IDBIndex.getKey()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, finds either the given key or the primary key, if `key` is an {{domxref("IDBKeyRange")}}.
- {{domxref("IDBIndex.getAll()")}}
  - : Returns an {{domxref("IDBRequest")}} object, in a separate thread, finds all matching values in the referenced object store that correspond to the given key or are in range, if `key` is an {{domxref("IDBKeyRange")}}.
- {{domxref("IDBIndex.getAllKeys()")}}
  - : Returns an {{domxref("IDBRequest")}} object, in a separate thread, finds all matching keys in the referenced object store that correspond to the given key or are in range, if `key` is an {{domxref("IDBKeyRange")}}.
- {{domxref("IDBIndex.openCursor()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) over the specified key range.
- {{domxref("IDBIndex.openKeyCursor()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a cursor over the specified key range, as arranged by this index.

## Example

In the following example we open a transaction and an object store, then get the index `lName` from a simple contacts database. We then open a basic cursor on the index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a cursor directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted based on the index, not the primary key.

Finally, we iterate through each record, and insert the data into an HTML table. For a complete working example, see our [IndexedDB-examples demo repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  const transaction = db.transaction(['contactsList'], 'readonly');
  const objectStore = transaction.objectStore('contactsList');

  const myIndex = objectStore.index('lName');
  myIndex.openCursor().onsuccess = (event) => {
   const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td>${cursor.value.id}</td>`
                         + `<td>${cursor.value.lName}</td>`
                         + `<td>${cursor.value.fName}</td>`
                         + `<td>${cursor.value.jTitle}</td>`
                         + `<td>${cursor.value.company}</td>`
                         + `<td>${cursor.value.eMail}</td>`
                         + `<td>${cursor.value.phone}</td>`
                         + `<td>${cursor.value.age}</td>`;
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
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
