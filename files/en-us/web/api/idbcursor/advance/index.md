---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Method
  - Reference
  - Storage
  - advance
browser-compat: api.IDBCursor.advance
---
{{APIRef("IndexedDB")}}

The **`advance()`** method of the {{domxref("IDBCursor")}}
interface sets the number of times a cursor should move
its position forward.

{{AvailableInWorkers}}

## Syntax

```js
cursor.advance(count);
```

### Parameters

- `count`
  - : The number of times to move the cursor forward.

### Exceptions

This method may raise a {{domxref("DOMException")}} of
one of the following types:

| Exception                  | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| `TransactionInactiveError` | This IDBCursor's transaction is inactive.                                  |
| `TypeError`                | The value passed into the `count` parameter was zero or a negative number. |
| `InvalidStateError`        | The cursor is currently being iterated or has iterated past its end.       |

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through the records in the object store. Here we use
`cursor.advance(2)` to jump 2 places forward each time, meaning that only
every other result will be displayed. `advance()` works in a similar way to
{{domxref("IDBCursor.continue")}}, except that it allows you to jump multiple records at
a time, not just always go onto the next record.

Note that in each iteration of the loop, you can grab
data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor
example](https://github.com/mdn/indexeddb-examples/tree/master/idbcursor) ([view example live](https://mdn.github.io/indexeddb-examples/idbcursor/).)>

```js
function advanceResult() {
  list.textContent = '';
  const transaction = db.transaction(['rushAlbumList'], "readonly");
  const objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if(cursor) {
      const listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + cursor.value.albumTitle + '</strong>, ' + cursor.value.year;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log('Every other entry displayed.');
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
