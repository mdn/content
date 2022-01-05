---
title: IDBDatabaseSync
slug: Web/API/IDBDatabaseSync
tags:
  - API
  - Experimental
  - IndexedDB
  - Interface
  - Deprecated
  - Reference
---
{{APIRef("IndexedDB")}} {{ draft() }}

> **Warning:** The synchronous version of the IndexedDB API was originally intended for use only with [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), and was eventually removed from the spec because its need was questionable. It may however be reintroduced in the future if there is enough demand from web developers.

The `DatabaseSync` interface in the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a synchronous [connection to a database](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection).

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBObjectStoreSync"
            >IDBObjectStoreSync</a
          >
          <a href="#createobjectstore">createObjectStore</a> (in DOMString name,
          in DOMString keypath, in optional boolean autoIncrement) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBObjectStoreSync"
            >IDBObjectStoreSync</a
          >
          <a href="#openobjectstore">openObjectStore</a> (in DOMString name, in
          optional unsigned short mode) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#removeobjectstore">removeObjectStore</a> (in DOMString
          storeName) raises (<a href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#setversion">setVersion</a> (in DOMString
          version);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBTransactionSync"
            >IDBTransactionSync</a
          >
          <a href="#transaction">transaction</a> (in optional DOMStringList
          storeNames, in optional unsigned int timeout) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributes

| Attribute      | Type                     | Description                                                                                   |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| `description`  | `readonly DOMString`     | The human-readable description of the connected database.                                     |
| `name`         | `readonly DOMString`     | The name of the connected database.                                                           |
| `objectStores` | `readonly DOMStringList` | The names of the object stores that exist in the connected database.                          |
| `version`      | `readonly DOMString`     | The version of the connected database. Has the null value when the database is first created. |

## Methods

### createObjectStore()

Creates and returns a new object store with the given name in the connected database.

     IDBObjectStoreSync createObjectStore(
      in DOMString name,
      in DOMString keypath,
      in optional boolean autoIncrement
    ) raises  (IDBDatabaseException);

##### Parameters

- name
  - : The name of a new object store.
- keypath
  - : The [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) used by the new object store. If a null path is specified, then the object store does not have a key path, and uses out-of-line keys.
- autoIncrement
  - : If true, the object store uses a [key generator](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator); if false, it does not use one.

##### Returns

- [`IDBObjectStoreSync`](/en-US/docs/Web/API/IDBObjectStoreSync)
  - : An object to access the newly created object store.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`CONSTRAINT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#constraint_err)
  - : If an object store with the same name (based on case-sensitive comparison) already exists in the connected database.

### openObjectStore()

Opens the object store with the given name in the connected database using the specified mode.

    IDBObjectStoreSync openObjectStore (
      in DOMString name,
      in optional unsigned short mode
    ) raises (IDBDatabaseException);

##### Parameters

- name
  - : The name of the object store to open.
- mode
  - : The mode that is used to access the object store.

##### Returns

- [`IDBObjectStoreSync`](/en-US/docs/Web/API/IDBObjectStoreSync)
  - : An object to access the opened object store.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If an object store with the given name (based on case-sensitive comparison) already exists in the connected database.

### removeObjectStore()

Destroys an object store with the given name, as well as all indexes that reference that object store.

    void removeObjectStore (
      in DOMString storeName
    ) raises (IDBDatabaseException);

##### Parameters

- storeName
  - : The name of an existing object store to remove.

##### Returns

{{jsxref('undefined')}}.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If the object store with the given name (based on case-sensitive comparison) does not exist in the connected database.

### setVersion()

Sets the version of the connected database.

    void setVersion (
      in DOMString version
    );

##### Parameters

##### Returns

{{jsxref('undefined')}}.

- version
  - : The version to store in the database.

### transaction()

Creates and returns a transaction, acquiring locks on the given database objects, within the specified timeout duration, if possible.

    IDBTransactionSync transaction (
      in optional DOMStringList storeNames,
      in optional unsigned int timeout
    ) raises (IDBDatabaseException);

##### Parameters

- storeNames
  - : The names of object stores and indexes in the scope of the new transaction.
- timeout
  - : The interval that this operation is allowed to take to acquire locks on all the objects stores and indexes identified in `storeNames`.

##### Returns

- [`IDBTransactionSync`](/en-US/docs/Web/API/IDBTransactionSync)
  - : An object to access the newly created transaction.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`TIMEOUT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#timeout_err)
  - : If reserving all the database objects identified in `storeNames` takes longer than the `timeout` interval.
