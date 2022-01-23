---
title: IDBObjectStoreSync
slug: Web/API/IDBObjectStoreSync
tags:
  - API
  - IndexedDB
  - Interface
  - Deprecated
  - Reference
---
{{ APIRef("IndexedDB") }}

> **Warning:** The synchronous version of the IndexedDB API was originally intended for use only with [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), and was eventually removed from the spec because its need was questionable. It may however be reintroduced in the future if there is enough demand from web developers.

The `IDBObjectStoreSync` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) provides synchronous access to an [object store](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) of a database.

## Method overview

<table class="no-markdown">
  <tbody>
    <tr>
      <td>
        <code
          >any <a href="#add">add</a> (in any value, in optional any key) raises
          (<a href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/API/IDBIndexSync"><code>IDBIndexSync</code></a>
        <code
          ><a href="#createindex">createIndex</a> (in DOMString name, in
          DOMString storeName, in DOMString keypath, in optional boolean
          unique);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >any <a href="#get">get</a> (in any key) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBCursorSync">IDBCursorSync</a>
          <a href="#opencursor">openCursor</a> (in optional
          <a href="/en-US/docs/Web/API/IDBKeyRange">IDBKeyRange</a> range, in
          optional unsigned short direction) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBIndexSync">IDBIndexSync</a>
          <a href="#openindex">openIndex</a> (in DOMString name) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >any <a href="#put">put</a> (in any value, in optional any key) raises
          (<a href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#remove">remove</a> (in any key) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#removeindex">removeIndex</a> (in DOMString
          indexName) raises (<a href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributes

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>indexNames</code></td>
      <td><code>readonly DOMStringList</code></td>
      <td>
        A list of the names of the
        <a href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#index"
          >indexes</a
        >
        on this object store.
      </td>
    </tr>
    <tr>
      <td><code>keyPath</code></td>
      <td><code>readonly DOMString</code></td>
      <td>
        The
        <a href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path"
          >key path</a
        >
        of this object store. If this attribute is set to null, then the
        application must provide a key for each modification operation.
      </td>
    </tr>
    <tr>
      <td><code>mode</code></td>
      <td><code>readonly unsigned short</code></td>
      <td>
        The mode for isolating access to the data in this object store. For
        possible values, see
        <a href="/en-US/docs/Web/API/IDBObjectStoreSync#constants">Constants</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>readonly DOMString</code></td>
      <td>The name of this object store.</td>
    </tr>
  </tbody>
</table>

##  Constants

### Mode constants

| Constant        | Value | Description                                                                                          |
| --------------- | ----- | ---------------------------------------------------------------------------------------------------- |
| `READ_ONLY`     | 1     | Modification operations are not allowed on this object store.                                        |
| `READ_WRITE`    | 0     | Modification operations are allowed on this object store.                                            |
| `SNAPSHOT_READ` | 2     | Any read operations must access a snapshot view of the data, which cannot change once it is created. |

## Methods

### add()

Stores the given value into this object store, optionally with the specified key. If a record already exists with the given key, an exception is raised.

    any add(
      in any value,
      in optional any key
    ) raises (IDBDatabaseException);

##### Parameters

##### Returns

##### Exceptions

This method can raise a IDBDatabaseException with the following codes:

- value
  - : The value to store into the index.
- key
  - : A key to use for identifying the record.
- `any`
  - : The key for the stored record.
- [`CONSTRAINT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#constraint_err)
  - : If a record exists in this index with a key corresponding to the _key_ parameter or the index is auto-populated, or if no record exists with a key corresponding to the _value_ parameter in the index's referenced object store.
- [`DATA_ERR`](/en-US/docs/Web/API/IDBDatabaseException#data_err)
  - : If this object store uses [out-of-line keys](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#out-of-line_key), and the _key_ parameter was not passed.
- [`SERIAL_ERR`](/en-US/docs/Web/API/IDBDatabaseException#serial_err)
  - : If the data being stored could not be serialized by the internal structured cloning algorithm.

### createIndex()

Creates and returns a new index with the given name in the connected database.

     IDBIndexSync createIndex (
        in DOMString name,
        in DOMString keypath,
        in optional boolean unique
     );

##### Parameters

- name
  - : The name of a new index.
- keyPath
  - : The key path used by the new index.
- unique
  - : If true, keys in the index must be unique; if false, duplicate keys are allowed.

##### Returns

- [`IDBIndexSync`](/en-US/docs/Web/API/IDBIndexSync)
  - : An object to access the newly created index.

### get()

Retrieves and returns the value from this object store for the record that corresponds to the given key.

    any get (
      in any key
    ) raises (IDBDatabaseException);

##### Parameters

- key
  - : The key that identifies the record to be retrieved.

##### Returns

- `any`
  - : The value retrieved from the object store.

##### Exceptions

This method can raise a IDBDatabaseException with the following codes:

- [`SERIAL_ERR`](/en-US/docs/Web/API/IDBDatabaseException#serial_err)
  - : If the data being stored could not be deserialized by the internal structured cloning algorithm.
- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no record exists in this index for the given key.

### openCursor()

Creates a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) over the records of this object store. The range of the new cursor matches the specified [key range](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_range); if the key range is not specified or is null, then the range includes all the records.

    CursorSync openCursor (
      in optional KeyRange range,
      in optional unsigned short direction
    ) raises (DatabaseException);

##### Parameters

- range
  - : The key range to use as the cursor's range.
- direction
  - : The cursor's required direction.

##### Returns

- `IDBIndexSync`
  - : An object for accessing the index.

##### Exceptions

This method can raise a DatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no records exist in this index for the requested key range.

### openIndex()

Opens the index with the given name, using the mode of the current transaction.

     IDBIndexSync openIndex (
       in DOMString name
     ) raises  (IDBDatabaseException);

##### Parameters

- name
  - : The name of the index to open.

##### Returns

- [`IDBIndexSync`](/en-US/docs/Web/API/IDBIndexSync)
  - : An object to access the index.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If the index with the given name does not exist in the connected database.

### put()

Stores the given value in this object store and returns the key for the stored record. If a record already exists with the given key, it is overwritten.

    any put (
      in any value,
      in optional any key
    ) raises (IDBDatabaseException);

##### Parameters

- value
  - : The value to be stored in the record.
- key
  - : The key to be used to identify the record.

##### Returns

- `any`
  - : The key for the stored record.

##### Exceptions

This method can raise an IDBDatabaseException with the following codes:

- [`CONSTRAINT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#constraint_err)
  - : If noOverwrite was true, and a record exists in this index for the given key or this index is auto-populated; or if no record exists with the given key in the index's referenced object store.
- [`DATA_ERR`](/en-US/docs/Web/API/IDBDatabaseException#data_err)
  - : If this object store uses [out-of-line](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#out-of-line_key) keys and no [key generator](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator), but no key was given.
- [`SERIAL_ERR`](/en-US/docs/Web/API/IDBDatabaseException#serial_err)
  - : If the data being stored could not be serialized by the internal structured cloning algorithm.

### remove()

Removes from this object store any records that correspond to the given key.

    void remove (
      in any key
    ) raises (IDBDatabaseException);

##### Parameters

- key
  - : Key of the records to be removed.

##### Returns

{{jsxref('undefined')}}.

##### Exceptions

This method can raise a IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If a record does not exist in this index with the given key.

### removeIndex()

Destroys an index with the given name.

      void removeIndex (
        in DOMString indexName
      ) raises (IDBDatabaseException);

##### Parameters

- indexName
  - : The name of the existing index to remove.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If an index with the given name does not exist in the connected database.
