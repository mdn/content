---
title: IDBDatabaseException
slug: Web/API/IDBDatabaseException
tags:
  - API
  - Deprecated
  - Reference
browser-compat: api.IDBDatabaseException
---
{{APIRef("IndexedDB")}}{{Deprecated_Header}}

> **Warning:** This interface was removed from the specification and was replaced by usage of {{ domxref("DOMException") }}.

In the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API), an `IDBDatabaseException` object represents exception conditions that can be encountered while performing database operations.

## Attributes

| Attribute | Type             | Description                                        |
| --------- | ---------------- | -------------------------------------------------- |
| `code`    | `unsigned short` | The most appropriate error code for the condition. |
| `message` | `DOMString`      | Error message describing the exception raised.     |

## Constants

> **Note:** Do not rely on the numeric values of the constants, which might change as the specifications continue to change. Use the constant names instead.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ABORT_ERR</code></td>
      <td><code>8</code></td>
      <td>
        A request was aborted, for example, through a call to<a
          href="/en-US/docs/Web/API/IDBTransaction#abort"
        >
          <code>IDBTransaction.abort</code></a
        >.
      </td>
    </tr>
    <tr>
      <td><code>CONSTRAINT_ERR</code></td>
      <td><code>4</code></td>
      <td>
        A mutation operation in the transaction failed because a constraint was
        not satisfied. For example, an object, such as an object store or index,
        already exists and a request attempted to create a new one.
      </td>
    </tr>
    <tr>
      <td><code>DATA_ERR</code></td>
      <td><code>5</code></td>
      <td>Data provided to an operation does not meet requirements.</td>
    </tr>
    <tr>
      <td><code>NON_TRANSIENT_ERR</code></td>
      <td><code>2</code></td>
      <td>
        An operation was not allowed on an object. Unless the cause of the error
        is corrected, retrying the same operation would result in failure.
      </td>
    </tr>
    <tr>
      <td><code>NOT_ALLOWED_ERR</code></td>
      <td><code>6</code></td>
      <td>
        <p>
          An operation was called on an object where it is not allowed or at a
          time when it is not allowed. It also occurs if a request is made on a
          source object that has been deleted or removed.
        </p>
        <p>
          More specific variants of this error includes:
          <code>TRANSACTION_INACTIVE_ERR</code> and <code>READ_ONLY_ERR</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td><code>3</code></td>
      <td>
        The operation failed because the requested database object could not be
        found; for example, an object store did not exist but was being opened.
      </td>
    </tr>
    <tr>
      <td><code>QUOTA_ERR</code></td>
      <td><code>11</code></td>
      <td>
        Either there's not enough remaining storage space or the storage quota
        was reached and the user declined to give more space to the database.
      </td>
    </tr>
    <tr>
      <td><code>READ_ONLY_ERR</code></td>
      <td><code>9</code></td>
      <td>
        A mutation operation was attempted in a
        <code>READ_ONLY</code> transaction.
      </td>
    </tr>
    <tr>
      <td><code>TIMEOUT_ERR</code></td>
      <td><code>10</code></td>
      <td>
        A lock for the transaction could not be obtained in a reasonable time.
      </td>
    </tr>
    <tr>
      <td><code>TRANSACTION_INACTIVE_ERR</code></td>
      <td><code>7</code></td>
      <td>
        A request was made against a transaction that is either not currently
        active or is already finished.
      </td>
    </tr>
    <tr>
      <td><code>UNKNOWN_ERR</code></td>
      <td><code>1</code></td>
      <td>
        The operation failed for reasons unrelated to the database itself, and
        it is not covered by any other error code--for example, a failure due to
        disk IO errors.
      </td>
    </tr>
    <tr>
      <td><code>VER_ERR</code></td>
      <td><code>12</code></td>
      <td>
        A request to open a database with a version lower than the one it
        already has. This can only happen with
        <a href="/en-US/docs/Web/API/IDBOpenDBRequest"
          ><code>IDBOpenDBRequest</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
