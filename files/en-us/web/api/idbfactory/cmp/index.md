---
title: "IDBFactory: cmp() method"
short-title: cmp()
slug: Web/API/IDBFactory/cmp
page-type: web-api-instance-method
browser-compat: api.IDBFactory.cmp
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`cmp()`** method of the {{domxref("IDBFactory")}}
interface compares two values as keys to determine equality and ordering for IndexedDB
operations, such as storing and iterating.

> **Note:** Do not use this method for comparing arbitrary JavaScript
> values, because many JavaScript values are either not valid IndexedDB keys (booleans
> and objects, for example) or are treated as equivalent IndexedDB keys (for example,
> since IndexedDB ignores arrays with non-numeric properties and treats them as empty
> arrays, so any non-numeric arrays are treated as equivalent). This throws an exception
> if either of the values is not a valid key.

## Syntax

```js-nolint
cmp(first, second)
```

### Parameters

- `first`
  - : The first key to compare.
- `second`
  - : The second key to compare.

### Return value

An integer that indicates the result of the comparison; the table below lists the
possible values and their meanings:

| Returned value | Description                         |
| -------------- | ----------------------------------- |
| -1             | 1st key is less than the 2nd key    |
| 0              | 1st key is equal to the 2nd key     |
| 1              | 1st key is greater than the 2nd key |

### Exceptions

- `DataError` {{domxref("DOMException")}}
  - : Thrown if one of the supplied keys was not a valid key.

## Examples

```js
const a = 1;
const b = 2;
const result = window.indexedDB.cmp(a, b);
console.log(`Comparison results: ${result}`);
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
