---
title: IDBKeyRange.bound()
slug: Web/API/IDBKeyRange/bound
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Method
  - Reference
  - Storage
  - bound
browser-compat: api.IDBKeyRange.bound
---
{{ APIRef("IndexedDB") }}

The **`bound()`** method of the {{domxref("IDBKeyRange")}}
interface creates a new key range with the specified upper and lower bounds. The
bounds can be open (that is, the bounds exclude the endpoint values) or closed (that
is, the bounds include the endpoint values). By default, the bounds are closed.

{{AvailableInWorkers}}

## Syntax

```js
var myIDBKeyRange = IDBKeyRange.bound(lower, upper);
var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen);
var myIDBKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
```

### Parameters

- lower
  - : specifies the lower bound of the new key range.
- upper
  - : specifies the upper bound of the new key range.
- lowerOpen {{optional_inline}}
  - : indicates whether the lower bound excludes the endpoint value. The default is
    false.
- upperOpen {{optional_inline}}
  - : Indicates whether the upper bound excludes the endpoint value. The default is
    false.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

This method may raise a {{domxref("DOMException")}} of
the following type:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>The following conditions raise an exception:</p>
        <ul>
          <li>The lower or upper parameters were not passed a valid key.</li>
          <li>The lower key is greater than the upper key.</li>
          <li>
            The lower key and upper key match and either of the bounds are open.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Example

The following example illustrates how you'd use a bound key range. Here we declare
a `keyRangeValue = IDBKeyRange.bound("A", "F");` — a range between values of
"A" and "F". We open a transaction (using {{domxref("IDBTransaction")}}) and an object
store, and open a Cursor with {{domxref("IDBObjectStore.openCursor")}},
declaring `keyRangeValue` as its optional key range value. This means that
the cursor will only retrieve records with keys inside that range. This range includes
the values "A" and "F", as we haven't declared that they should be open  bounds. If we
used `IDBKeyRange.bound("A", "F", true, true);`, then the range would not
include `"A"` and `"F"`, only the values between them.

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at the idbkeyrange directory [in the
> indexeddb-examples](https://github.com/mdn/indexeddb-examples/tree/master/idbkeyrange) repo ([view the example live
> too](https://mdn.github.io/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("A", "F");

  var transaction = db.transaction(['fThings'], 'readonly');
  var objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
    var cursor = event.target.result;
      if(cursor) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<strong>' + cursor.value.fThing + '</strong>, ' + cursor.value.fRating;
        list.appendChild(listItem);

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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
