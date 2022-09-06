---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
page-type: web-api-interface
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Interface
  - Reference
  - Storage
browser-compat: api.IDBKeyRange
---
{{APIRef("IndexedDB")}}

The **`IDBKeyRange`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a continuous interval over some data type that is used for keys. Records can be retrieved from {{domxref("IDBObjectStore")}} and {{domxref("IDBIndex")}} objects using keys or a range of keys. You can limit the range using lower and upper bounds. For example, you can iterate over all values of a key in the value range A–Z.

A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is _bounded_; if it has no bounds, it is _unbounded_. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs:

| Range                       | Code                                                              |
| --------------------------- | ----------------------------------------------------------------- |
| All keys ≥ **x**            | {{domxref("IDBKeyRange.lowerBound")}}`(x)`             |
| All keys > **x**            | {{domxref("IDBKeyRange.lowerBound")}}`(x, true)`       |
| All keys ≤ **y**            | {{domxref("IDBKeyRange.upperBound")}}`(y)`             |
| All keys < **y**            | {{domxref("IDBKeyRange.upperBound")}}`(y, true)`       |
| All keys ≥ **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y)`              |
| All keys > **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, true, true)`  |
| All keys > **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y, true, false)` |
| All keys ≥ **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, false, true)` |
| The key = **z**             | {{domxref("IDBKeyRange.only")}}`(z)`                     |

A key is in a key range if the following conditions are true:

- The lower value of the key range is one of the following:

  - `undefined`
  - Less than key value
  - Equal to key value if `lowerOpen` is `false`.

- The upper value of the key range is one of the following:

  - `undefined`
  - Greater than key value
  - Equal to key value if `upperOpen` is `false`.

{{AvailableInWorkers}}

## Properties

- {{domxref("IDBKeyRange.lower")}} {{ReadOnlyInline}}
  - : Lower bound of the key range.
- {{domxref("IDBKeyRange.upper")}} {{ReadOnlyInline}}
  - : Upper bound of the key range.
- {{domxref("IDBKeyRange.lowerOpen")}} {{ReadOnlyInline}}
  - : Returns false if the lower-bound value is included in the key range.
- {{domxref("IDBKeyRange.upperOpen")}} {{ReadOnlyInline}}
  - : Returns false if the upper-bound value is included in the key range.

## Methods

### Static methods

- {{domxref("IDBKeyRange.bound()")}}
  - : Creates a new key range with upper and lower bounds.
- {{domxref("IDBKeyRange.only()")}}
  - : Creates a new key range containing a single value.
- {{domxref("IDBKeyRange.lowerBound()")}}
  - : Creates a new key range with only a lower bound.
- {{domxref("IDBKeyRange.upperBound()")}}
  - : Creates a new upper-bound key range.

### Instance methods

- {{domxref("IDBKeyRange.includes()")}}
  - : Returns a boolean indicating whether a specified key is inside the key range.

## Examples

The following example illustrates how you'd use a key range. Here we declare a `keyRangeValue` as a range between values of `"A"` and `"F"`. We open a transaction (using {{domxref("IDBTransaction")}}) and an object store, and open a cursor with {{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as its optional key range value. This means that the cursor will only retrieve records with keys inside that range. This range includes the values `"A"` and `"F"`, as we haven't declared that they should be open bounds.
If we used `IDBKeyRange.bound("A", "F", true, true);`, then the range would not include `"A"` and `"F"`, only the values between them.

> **Note:** For a more complete example allowing you to experiment with key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

  const transaction = db.transaction(['fThings'], 'readonly');
  const objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement('li');
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
