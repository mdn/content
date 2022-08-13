---
title: IDBKeyRange.includes()
slug: Web/API/IDBKeyRange/includes
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Method
  - Reference
  - Storage
  - includes
browser-compat: api.IDBKeyRange.includes
---
{{ APIRef("IndexedDB") }}

The `includes()` method of the {{domxref("IDBKeyRange")}}
interface returns a boolean indicating whether a specified key is inside the key
range.

{{AvailableInWorkers}}

## Syntax

```js
includes(key)
```

### Parameters

- `key`
  - : The key you want to check for in your key range. This can be any type.

### Return value

A boolean value.

### Exceptions

- `DataError` {{domxref("DOMException")}}
  - : Thrown if the supplied key was not a valid key.

## Examples

```js
const keyRangeValue = IDBKeyRange.bound('A', 'K', false, false);

keyRangeValue.includes('F');
// Returns true

keyRangeValue.includes('W');
// Returns false
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
