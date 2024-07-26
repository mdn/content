---
title: "IDBKeyRange: lowerBound() static method"
short-title: lowerBound()
slug: Web/API/IDBKeyRange/lowerBound_static
page-type: web-api-static-method
browser-compat: api.IDBKeyRange.lowerBound_static
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`lowerBound()`** static method of the
{{domxref("IDBKeyRange")}} interface creates a new key range with only a lower bound.
By default, it includes the lower endpoint value and is closed.

## Syntax

```js-nolint
IDBKeyRange.lowerBound(lower)
IDBKeyRange.lowerBound(lower, open)
```

### Parameters

- `lower`
  - : Specifies the lower bound of the new key range.
- `open` {{optional_inline}}
  - : Indicates whether the lower bound excludes the endpoint value. The default is
    false.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key associated with the `lower` parameter is not a valid key.

## Examples

The following example illustrates how you'd use a lower bound key range. Here we
declare `keyRangeValue = IDBKeyRange.lowerBound("F", false);` — a range that
includes the value "F" and everything after it. We open a transaction (using
{{domxref("IDBTransaction")}}) and an object store, and open a Cursor with
{{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as its
optional key range value. This means that the cursor will only retrieve the record with
the key value "F" and all that come after it. If we used
`IDBKeyRange.lowerBound("F", true);`, then the range would not include "F";
only the values after it.

> [!NOTE]
> For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo
> ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.lowerBound("F");

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
