---
title: IDBFactory.databases
slug: Web/API/IDBFactory/databases
tags:
  - API
  - Database
  - IDBFactory
  - Method
  - Reference
  - Storage
  - databases
browser-compat: api.IDBFactory.databases
---
{{ APIRef("IndexedDB") }}

The **`databases`** method of the {{domxref("IDBFactory")}} interface returns a list representing all the available databases, including their names and versions.

{{AvailableInWorkers}}

> **Note:** This method is introduced in a draft of a specifications and browser compatibility is limited.

## Syntax

    const promise = indexedDB.databases()

### Parameters

The method does not take in any parameters.

### Return value

A promise that resolves either to an error or a list of dictionaries, each with two elements, `name` and `version`:

- `name`
  - : The database name.
- `version`
  - : The database version.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

| Attribute                                | Description                                          |
| ---------------------------------------- | ---------------------------------------------------- |
| {{exception("SecurityError")}} | The method is called from an opaque origin.          |
| Other error                              | Specification does not describe all possible errors. |

## Example

    const promise = indexedDB.databases()
    promise.then(databases => {
      console.log(databases)
    })

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
