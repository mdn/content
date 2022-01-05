---
title: IDBCursor.direction
slug: Web/API/IDBCursor/direction
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Property
  - Reference
  - Storage
  - direction
browser-compat: api.IDBCursor.direction
---
{{ APIRef("IndexedDB") }}

The **`direction`** read-only property of the
{{domxref("IDBCursor")}} interface is a {{domxref("DOMString")}} that returns the
direction of traversal of the cursor (set using
{{domxref("IDBObjectStore.openCursor")}} for example). See the {{anch("Values")}}
section below for possible values.

{{AvailableInWorkers}}

## Syntax

```js
var direction = cursor.direction;
```

### Value

A string (defined by the [`IDBCursorDirection`
enum](https://w3c.github.io/IndexedDB/#enumdef-idbcursordirection)) indicating the direction in which the cursor is traversing the data.
Possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>next</code></td>
      <td>
        This direction causes the cursor to be opened at the start of
        the source.
      </td>
    </tr>
    <tr>
      <td><code>nextunique</code></td>
      <td>
        This direction causes the cursor to be opened at the start of
        the source. For every key with duplicate values, only the first record
        is yielded.
      </td>
    </tr>
    <tr>
      <td><code>prev</code></td>
      <td>
        This direction causes the cursor to be opened at the end of the source.
      </td>
    </tr>
    <tr>
      <td><code>prevunique</code></td>
      <td>
        This direction causes the cursor to be opened at the end of the source.
        For every key with duplicate values, only the first record is
        yielded.<br />
      </td>
    </tr>
  </tbody>
</table>

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. Within each iteration we
log the direction of the cursor, something like this:

      prev

> **Note:** we can't change the direction of travel of the cursor using
> the `direction` property, as it is read-only. We specify the direction of
> travel using the 2nd argument of {{domxref("IDBObjectStore.openCursor")}}.

The cursor does not require us to select the data based on a key; we can just grab all
of it. Also note that in each iteration of the loop, you can grab data from the current
record under the cursor object using `cursor.value.foo`. For a complete
working example, see our [IDBCursor
example](https://github.com/mdn/indexeddb-examples/tree/master/idbcursor) ([view example live](https://mdn.github.io/indexeddb-examples/idbcursor/).)

```js
function backwards() {
  list.textContent = '';
  const transaction = db.transaction(['rushAlbumList'], 'readonly');
  const objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor(null,'prev').onsuccess = function(event) {
    const cursor = event.target.result;
      if(cursor) {
        const listItem = document.createElement('li');
        listItem.innerHTML = '<strong>' + cursor.value.albumTitle + '</strong>, ' + cursor.value.year;
        list.appendChild(listItem);

        console.log(cursor.direction);
        cursor.continue();
      } else {
        console.log('Entries displayed backwards.');
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
