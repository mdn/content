---
title: IDBFactory.cmp()
slug: Web/API/IDBFactory/cmp
tags:
  - API
  - Database
  - IDBFactory
  - IndexedDB
  - Method
  - Reference
  - Storage
  - cmp
browser-compat: api.IDBFactory.cmp
---
{{ APIRef("IndexedDB") }}

The **`cmp()`** method of the {{domxref("IDBFactory")}}
interface compares two values as keys to determine equality and ordering for IndexedDB
operations, such as storing and iterating.

{{AvailableInWorkers}}

> **Note:** Do not use this method for comparing arbitrary JavaScript
> values, because many JavaScript values are either not valid IndexedDB keys (booleans
> and objects, for example) or are treated as equivalent IndexedDB keys (for example,
> since IndexedDB ignores arrays with non-numeric properties and treats them as empty
> arrays, so any non-numeric arrays are treated as equivalent). This throws an exception
> if either of the values is not a valid key.

## Syntax

```js
var result = indexedDB.cmp(first, second);
```

### Parameters

- first
  - : The first key to compare.
- second
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

This method may raise a {{domxref("DOMException")}} of the following types:

| Attribute                                   | Description                                   |
| ------------------------------------------- | --------------------------------------------- |
| [`DataError`](/en-US/docs/Web/API/DOMError) | One of the supplied keys was not a valid key. |

## Example

```js
var a = 1;
var b = 2;
var result = window.indexedDB.cmp(a, b);
console.log( "Comparison results: " + result );
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
