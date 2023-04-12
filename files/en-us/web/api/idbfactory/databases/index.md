---
title: "IDBFactory: databases() method"
short-title: databases()
slug: Web/API/IDBFactory/databases
page-type: web-api-instance-method
browser-compat: api.IDBFactory.databases
---

{{ APIRef("IndexedDB") }}

The **`databases`** method of the {{domxref("IDBFactory")}} interface returns a list representing all the available databases, including their names and versions.

{{AvailableInWorkers}}

> **Note:** This method is introduced in a draft of a specifications and browser compatibility is limited.

## Syntax

```js-nolint
databases()
```

### Parameters

The method does not take in any parameters.

### Return value

A promise that resolves either to an error or a list of dictionaries, each with two elements, `name` and `version`:

- `name`
  - : The database name.
- `version`
  - : The database version.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the method is called from an [opaque origin](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802).

## Examples

```js
const promise = indexedDB.databases();
promise.then((databases) => {
  console.log(databases);
});
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
