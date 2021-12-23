---
title: IDBCursorSync
slug: Web/API/IDBCursorSync
tags:
  - API
  - Experimental
  - IndexedDB
  - Interface
  - NeedsMarkupWork
  - Deprecated
  - Reference
---
{{APIRef("IndexedDB")}} {{ draft() }}

> **Warning:** The synchronous version of the IndexedDB API was originally intended for use only with [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), and was eventually removed from the spec because its need was questionable. It may however be reintroduced in the future if there is enough demand from web developers.

The `IDBCursorSync` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) for iterating over multiple records in a database. You can have only one instance of `IDBCursorSync` representing a cursor, but you can have an unlimited number of cursors at the same time. Operations are performed on the underlying index or object store. It enables an application to synchronously process all the records in the cursor's range.

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >bool <a href="#continue">continue</a> (in optional any key);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#remove">remove</a> () raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributes

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>count</code></td>
      <td><code>readonly unsigned long long</code></td>
      <td>The total number of objects that share the current key.</td>
    </tr>
    <tr>
      <td><code>direction</code></td>
      <td><code>readonly unsigned short</code></td>
      <td>
        The direction of traversal of the cursor. See Constants for possible
        values.
      </td>
    </tr>
    <tr>
      <td><code>key</code></td>
      <td><code>readonly any</code></td>
      <td>The key for the record at the cursor's position.</td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td><code>any</code></td>
      <td>
        <p>
          The value for the record at the cursor's position. Setting this
          attribute can raise an IDBDatabaseException with the following codes:
        </p>
        <dl>
          <dt>
            <code
              ><a href="/en-US/docs/Web/API/IDBDatabaseException#data_err"
                >DATA_ERR</a
              ></code
            >
          </dt>
          <dd>
            If the underlying object store uses
            <a
              href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#in-line_key"
              >in-line keys</a
            >
            and the property at the
            <a
              href="/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path"
              >key path</a
            >
            does not match the key in this cursor's position.
          </dd>
          <dt>
            <code
              ><a
                href="/en-US/docs/Web/API/IDBDatabaseException#not_allowed_err"
                >NOT_ALLOWED_ERR</a
              ></code
            >
          </dt>
          <dd>
            If the underlying index or object store does not support updating
            the record because it is open in the
            <code
              ><a href="/en-US/docs/Web/API/IDBObjectStoreSync#const_read_only"
                >READ_ONLY</a
              ></code
            >
            or
            <code
              ><a href="/en-US/docs/Web/API/IDBCursorSync#const_snapshot_read"
                >SNAPSHOT_READ</a
              ></code
            >
            mode, or if an index record cannot be changed because the underlying
            index is auto-populated.
          </dd>
          <dt>
            <code
              ><a href="/en-US/docs/Web/API/IDBDatabaseException#serial_err"
                >SERIAL_ERR</a
              ></code
            >
          </dt>
          <dd>
            If the data being stored could not be serialized by the internal
            structured cloning algorithm.
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

## Constants

| Constant            | Value | Description                                                                                                  |
| ------------------- | ----- | ------------------------------------------------------------------------------------------------------------ |
| `NEXT`              | 0     | This cursor includes duplicates, and its direction is monotonically increasing in the order of keys.         |
| `NEXT_NO_DUPLICATE` | 1     | This cursor does not include duplicates, and its direction is monotonically increasing in the order of keys. |
| `PREV`              | 2     | This cursor includes duplicates, and its direction is monotonically decreasing in the order of keys.         |
| `PREV_NO_DUPLICATE` | 3     | This cursor does not include duplicates, and its direction is monotonically decreasing in the order of keys. |

## Methods

### continue()

Advances the cursor to the next position along its direction, to the item whose key matches the optional `key` parameter. If no key is specified, advance to the immediate next position. Returns false if the cursor has reached the end of its range; otherwise returns true.

    bool continue (
      in optional any key
    );

##### Parameters

- key
  - : The key to which to move the cursor's position.

### remove()

Deletes the record at the cursor's position, without changing the cursor's position

    void delete (
    ) raises (DatabaseException);

##### Exceptions

This method can raise an IDBDatabaseException with the following code:

- [`NOT_ALLOWED_ERR`](/en-US/docs/Web/API/IDBDatabaseException#not_allowed_err)
  - : If the underlying index or object store does not support updating the record because it is open in the [`READ_ONLY`](/en-US/docs/Web/API/IDBObjectStoreSync#const_read_only) or [`SNAPSHOT_READ`](/en-US/docs/Web/API/IDBCursorSync#const_snapshot_read) mode.
