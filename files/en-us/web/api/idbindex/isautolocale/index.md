---
title: IDBIndex.isAutoLocale
slug: Web/API/IDBIndex/isAutoLocale
page-type: web-api-instance-property
tags:
  - API
  - Database
  - Experimental
  - IDBIndex
  - IndexedDB
  - Property
  - Reference
  - Storage
  - isAutoLocale
  - Non-standard
browser-compat: api.IDBIndex.isAutoLocale
---
{{APIRef("IndexedDB")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`isAutoLocale`** read-only property of the {{domxref("IDBIndex")}} interface returns a boolean value indicating whether the index had a `locale` value of `auto` specified upon its creation (see [`createIndex()`'s optionalParameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters).)

## Value

A boolean value.

## Examples

In the following example we open a transaction and an object store, then get the index `lName` from a simple contacts database. We then open a basic cursor on the index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a cursor directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted based on the index, not the primary key.

The `isAutoLocale` value is logged to the console.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  const transaction = db.transaction(['contactsList'], 'readonly');
  const objectStore = transaction.objectStore('contactsList');

  const myIndex = objectStore.index('lName');
  console.log(myIndex.isAutoLocale);

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

Not currently part of any specification.

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
