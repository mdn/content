---
title: "IDBKeyRange: includes() method"
short-title: includes()
slug: Web/API/IDBKeyRange/includes
page-type: web-api-instance-method
browser-compat: api.IDBKeyRange.includes
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The `includes()` method of the {{domxref("IDBKeyRange")}}
interface returns a boolean indicating whether a specified key is inside the key
range.

## Syntax

```js-nolint
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
const keyRangeValue = IDBKeyRange.bound("A", "K", false, false);

keyRangeValue.includes("F");
// Returns true

keyRangeValue.includes("W");
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
