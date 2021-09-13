---
title: IDBFactorySync
slug: Web/API/IDBFactorySync
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

The `IDBFactorySync` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) provide a synchronous means of accessing the capabilities of indexed databases.

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBDatabaseSync">IDBDatabaseSync</a>
          <a href="#open">open</a> (in DOMString name, in DOMString description,
          in optional boolean modifyDatabase) raises (<a
            href="/en-US/docs/Web/API/IDBDatabaseException"
            >IDBDatabaseException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Methods

### open()

Opens and returns a [connection to a database](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection). Blocks the calling thread until the connection object is ready to return. If there is already a database with the specified name, it uses that one; otherwise, it creates the database using the specified name and description.

    IDBDatabaseSync open (
      in DOMString name,
      in DOMString description
    ) raises (IDBDatabaseException);

##### Parameters

- name
  - : The name for the database.
- description
  - : The description for the database.

##### Returns

- [`IDBDatabaseSync`](/en-US/docs/Web/API/IDBDatabaseSync)
  - : An object to access the open database.

##### Exceptions

This method can raise an IDBDatabaseException with the following codes:

- [`NON_TRANSIENT_ERR`](/en-US/docs/Web/API/IDBDatabaseException#non_transient_err)
  - : If the `name` parameter is not valid. A valid name is any string including the empty string.
- [`UNKNOWN_ERR`](/en-US/docs/Web/API/IDBDatabaseException#unknown_err)
  - : If an error occurs while the database is being opened.
