---
title: IDBIndexSync
slug: Web/API/IDBIndexSync
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

The `IDBIndexSync` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) provides synchronous access to an [index](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#index) in a database.

## Method overview

<table class="no-markdown">
  <tbody>
    <tr>
      <td>
        <code
          >any <a href="#add">add</a> (in any value, in optional any key) raises
          (<a href="/IDBDatabaseException">IDBDatabaseException</a>);</code
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
          >any <a href="#getobject">getObject</a> (in any key) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#opencursor">openCursor</a> (in optional
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
          >void <a href="#openobjectcursor">openObjectCursor</a> (in optional
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
      <td><code>keyPath</code></td>
      <td><code>readonly DOMString</code></td>
      <td>
        The
        <a href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path"
          >key path</a
        >
        of this index. If this attribute is null, this index is not
        auto-populated.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>readonly DOMString</code></td>
      <td>The name of this index.</td>
    </tr>
    <tr>
      <td><code>storeName</code></td>
      <td><code>readonly DOMString</code></td>
      <td>
        This index's referenced
        <a
          href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store"
          >object store</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>unique</code></td>
      <td><code>readonly boolean</code></td>
      <td>
        If true, a key can have only one value within the index; if false, a key
        can have duplicate values.
      </td>
    </tr>
  </tbody>
</table>

## Methods

### add()

Stores the given value into this index, optionally with the specified key. If a record already exists with the given key, an exception is raised.

    any add(
      in any value,
      in optional any key
    ) raises (IDBDatabaseException);

##### Parameters

##### Returns

##### Exceptions

This method can raise a IDBDatabaseException with the following code:

- value
  - : The value to store into the index.
- key
  - : A key to use for identifying the record.
- `any`
  - : The key for the stored record.
- [`CONSTRAINT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#constraint_err)
  - : If a record exists in this index with a key corresponding to the _key_ parameter or the index is auto-populated, or if no record exists with a key corresponding to the _value_ parameter in the index's referenced object store.

### get()

Retrieves the value from this index for the record that corresponds to the given key.

    any get (
      in any key
    ) raises (IDBDatabaseException);

##### Parameters

- key
  - : The key that identifies the record to be retrieved.

##### Returns

- `any`
  - : The retrieved value from the index.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no record exists in this index for the given key.

### getObject()

Retrieves and returns the value from this index's referenced object store that corresponds to the given key.

    any getObject (
      in any key
    ) raises (IDBDatabaseException);

##### Parameters

- key
  - : The key that identifies the record to be retrieved.

##### Returns

- `any`
  - : The retrieved value from the referenced object store.

##### Exceptions

This method can raise a IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no record exists in this index for the given key.

### openCursor()

Creates a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) over the records of this index. The range of the new cursor matches the specified [key range](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_range); if the key range is not specified or is null, then the range includes all the records.

    void openCursor (
      in optional IDBKeyRange range,
      in optional unsigned short direction
    ) raises (IDBDatabaseException);

##### Parameters

- range
  - : The key range to use as the cursor's range.
- direction
  - : The cursor's required direction.

##### Returns

{{jsxref('undefined')}}.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no records exist in this index for the requested key range.

### openObjectCursor()

Creates a cursor over the records of this index's referenced object store, as arranged by this index. The range of the new cursor matches the specified key range; if the key range is not specified or is null, then the range includes all the records.

    void openObjectCursor (
      in optional IDBKeyRange range,
      in optional unsigned short direction
    ) raises (IDBDatabaseException);

##### Parameters

- range
  - : The key range to use as the cursor's range.
- direction
  - : The cursor's required direction.

##### Returns

{{jsxref('undefined')}}.

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If no records exist in this index for the requested key range.

### put()

Stores the given value in this index and returns the key for the stored record. If a record already exists with the given key, the record is overwritten.

    any put (
      in any value,
      in optional any key) raises (IDBDatabaseException);

##### Parameters

- value
  - : The value to be stored in the record.
- key
  - : The key to be used to identify the record.

##### Returns

- any
  - : The key for the stored record.

### remove()

Removes from this index any records that correspond to the given key.

    void remove (
      in any key
    ) raises (IDBDatabaseException);

##### Parameters

- key
  - : Key of the records to be removed.

##### Exceptions

This method can raise a DatabaseException with the following code:

- [`NOT_FOUND_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_found_err)
  - : If a record does not exist in this index with the given key.
