---
title: "IDBCursor: continuePrimaryKey() method"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
page-type: web-api-instance-method
browser-compat: api.IDBCursor.continuePrimaryKey
---

{{APIRef("IndexedDB")}}

The **`continuePrimaryKey()`** method of the
{{domxref("IDBCursor")}} interface advances the cursor to the item whose key
matches the key parameter as well as whose primary key matches the primary key
parameter.

A typical use case, is to resume the iteration where a previous cursor has been closed,
without having to compare the keys one by one.

Calling this method more than once before new cursor data has been loaded - for
example, calling `continuePrimaryKey()` twice from the same onsuccess handler
\- results in an `InvalidStateError` being thrown on the second call because
the cursor's got value flag has been unset.

This method is only valid for cursors coming from an index. Using it for cursors coming
from an object store will throw an error.

{{AvailableInWorkers}}

## Syntax

```js-nolint
continuePrimaryKey(key, primaryKey)
```

### Parameters

- `key`
  - : The key to position the cursor at.
- `primaryKey`
  - : The primary key to position the cursor at.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this IDBCursor's transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key parameter has any of the following conditions:
    - The key is not a valid key.
    - The key is less than or equal to this cursor's position and the cursor's direction is `next` or `nextunique`.
    - The key is greater than or equal to this cursor's position and this cursor's direction is `prev` or `prevunique`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the cursor is currently being iterated or has iterated past its end.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the cursor's direction is not `prev` or `next`.

## Examples

here's how you can resume an iteration of all articles tagged with
`"javascript"` since your last visit:

```js
let request = articleStore.index("tag").openCursor();
let count = 0;
let unreadList = [];
request.onsuccess = (event) => {
  let cursor = event.target.result;
  if (!cursor) {
    return;
  }
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
