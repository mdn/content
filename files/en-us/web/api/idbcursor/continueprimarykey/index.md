---
title: IDBCursor.continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
tags:
  - API
  - IDBCursor
  - IndexedDB
  - Method
  - Reference
  - Storage
  - Web
browser-compat: api.IDBCursor.continuePrimaryKey
---
{{APIRef("IndexedDB")}}

The **`continuePrimaryKey()`** method of the
{{domxref("IDBCursor")}} interface advances the cursor to the to the item whose key
matches the key parameter as well as whose primary key matches the primary key
parameter.

A typical use case, is to resume the iteration where a previous cursor has been closed,
without having to compare the keys one by one.

Calling this method more than once before new cursor data has been loaded - for
example, calling `continuePrimaryKey()` twice from the same onsuccess handler
\- results in an `InvalidStateError` being thrown on the second call because
the cursor’s got value flag has been unset.

This method is only valid for cursors coming from an index. Using it for cursors coming
from an object store will throw an error.

{{AvailableInWorkers}}

## Syntax

```js
cursor.continuePrimaryKey(key, primaryKey);
```

### Parameters

- `key`
  - : The key to position the cursor at.
- `primaryKey`
  - : The primary key to position the cursor at.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>This IDBCursor's transaction is inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>The key parameter may have any of the following conditions:</p>
        <ul>
          <li>The key is not a valid key.</li>
          <li>
            The key is less than or equal to this cursor's position and the
            cursor's direction is <code>next</code> or <code>nextunique</code>.
          </li>
          <li>
            The key is greater than or equal to this cursor's position and this
            cursor's direction is <code>prev</code> or <code>prevunique</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        The cursor is currently being iterated or has iterated past its end.
      </td>
    </tr>
    <tr>
      <td><code>InvalidAccessError</code></td>
      <td>
        The cursor's direction is not <code>prev</code> or <code>next</code>.
      </td>
    </tr>
  </tbody>
</table>

## Example

here’s how you can resume an iteration of all articles tagged with
`"javascript"` since your last visit:

```js
let request = articleStore.index("tag").openCursor();
let count = 0;
let unreadList = [];
request.onsuccess = (event) => {
    let cursor = event.target.result;
    if (!cursor) { return; }
    let lastPrimaryKey = getLastIteratedArticleId();
    if (lastPrimaryKey > cursor.primaryKey) {
      cursor.continuePrimaryKey("javascript", lastPrimaryKey);
      return;
    }
    // update lastIteratedArticleId
    setLastIteratedArticleId(cursor.primaryKey);
    // preload 5 articles into the unread list;
    unreadList.push(cursor.value);
    if (++count < 5) {
      cursor.continue();
    }
};
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
