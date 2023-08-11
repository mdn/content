---
title: "IDBKeyRange: only() static method"
short-title: only()
slug: Web/API/IDBKeyRange/only_static
page-type: web-api-static-method
browser-compat: api.IDBKeyRange.only_static
---

{{ APIRef("IndexedDB") }}

The **`only()`** static method of the {{domxref("IDBKeyRange")}}
interface creates a new key range containing a single value.

{{AvailableInWorkers}}

## Syntax

```js-nolint
IDBKeyRange.only(value)
```

### Parameters

- `value`
  - : The value for the new key range.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `value` parameter was not a valid key.

## Examples

The following example illustrates how you'd use an only key range. Here we declare
a `keyRangeValue = IDBKeyRange.only("A");` — a range that only includes the
value "A". We open a transaction (using {{domxref("IDBTransaction")}}) and an object
store, and open a Cursor with {{domxref("IDBObjectStore.openCursor")}},
declaring `keyRangeValue` as its optional key range value. This means that
the cursor will only retrieve the record with the key value "A".

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)
> repo ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.only("A");

  const transaction = db.transaction(["fThings"], "readonly");
  const objectStore = transaction.objectStore("fThings");

  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
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
