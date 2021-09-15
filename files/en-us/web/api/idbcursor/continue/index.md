---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Method
  - Reference
  - Storage
  - continue
browser-compat: api.IDBCursor.continue
---
{{APIRef("IndexedDB")}}

The **`continue()`** method of the {{domxref("IDBCursor")}}
interface advances the cursor to the next position along its direction, to the item
whose key matches the optional key parameter. If no key is specified, the cursor
advances to the immediate next position, based on its direction.

{{AvailableInWorkers}}

## Syntax

```js
cursor.continue(key);
```

### Parameters

- `key` {{optional_inline}}
  - : The key to position the cursor at.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>This IDBCursor's transaction is inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>The key parameter may have any of the following conditions:</p>
        <ul>
          <li>The key is not a valid key.</li>
          <li>
            The key is less than or equal to this cursor's position and the
            cursor's direction is <code>next</code> or <code>nextunique</code>.
          </li>
          <li>
            The key is greater than or equal to this cursor's position and this
            cursor's direction is <code>prev</code> or <code>prevunique</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        The cursor is currently being iterated or has iterated past its end.
      </td>
    </tr>
  </tbody>
</table>

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. The cursor does not
require us to select the data based on a key; we can just grab all of it. Also note that
in each iteration of the loop, you can grab data from the current record under the
cursor object using `cursor.value.foo`. For a complete working example, see
our [IDBCursor
example](https://github.com/mdn/indexeddb-examples/tree/master/idbcursor) ([view
example live](https://mdn.github.io/indexeddb-examples/idbcursor/).)

    function displayData() {
      var transaction = db.transaction(['rushAlbumList'], "readonly");
      var objectStore = transaction.objectStore('rushAlbumList');

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor) {
          var listItem = document.createElement('li');
          listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
          list.appendChild(listItem);

          cursor.continue();
        } else {
          console.log('Entries all displayed.');
        }
      };
    };

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
