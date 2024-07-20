---
title: "IDBKeyRange: upperBound() static method"
short-title: upperBound()
slug: Web/API/IDBKeyRange/upperBound_static
page-type: web-api-static-method
browser-compat: api.IDBKeyRange.upperBound_static
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`upperBound()`** static method of the
{{domxref("IDBKeyRange")}} interface creates a new upper-bound key range. By default,
it includes the upper endpoint value and is closed.

## Syntax

```js-nolint
IDBKeyRange.upperBound(upper)
IDBKeyRange.upperBound(upper, open)
```

### Parameters

- `upper`
  - : Specifies the upper bound of the new key range.
- `open` {{optional_inline}}
  - : Indicates whether the upper bound excludes the endpoint value. The default is false.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key associated with the `upper` parameter is not a valid key.

## Examples

The following example illustrates how you'd use an upper bound key range. Here we
declare `keyRangeValue = IDBKeyRange.upperBound("F");` — a range that
includes the value "F" and everything before it. We open a transaction (using
{{domxref("IDBTransaction")}}) and an object store, and open a Cursor with
{{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as its
optional key range value.

If we used `IDBKeyRange.upperBound("F", true);`, then the range excludes
"F"; and instead only includes the values before it.

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo
> ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.upperBound("F");

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
