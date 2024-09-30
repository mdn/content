---
title: "IDBObjectStore: delete() method"
short-title: delete()
slug: Web/API/IDBObjectStore/delete
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.delete
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`delete()`** method of the
{{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object,
and, in a separate thread, deletes the specified record or records.

Either a key or an {{domxref("IDBKeyRange")}} can be passed, allowing one or multiple
records to be deleted from a store. To delete all records in a store, use
{{domxref("IDBObjectStore.clear")}}.

Bear in mind that if you are using a {{domxref("IDBCursor", "IDBCursor")}}, you can use
the {{domxref("IDBCursor.delete()")}} method to more efficiently delete the current
record — without having to explicitly look up the record's key.

## Syntax

```js-nolint
delete(key)
```

### Parameters

- `key`
  - : The key of the record to be deleted, or an {{domxref("IDBKeyRange")}} to delete all
    records with keys in range.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is `undefined`.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this object store's transaction is inactive.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the object store's transaction mode is read-only.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the object store has been deleted.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if `key` is not a [valid key](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key) or a [key range](/en-US/docs/Web/API/IDBKeyRange).

## Examples

The following code snippet shows the `deleteItem()` function,
which is part of the To-do Notifications example app. This app stores to-do
list items using IndexedDB. You can
[see the app's complete code on GitHub](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), and
[try out the app live](https://mdn.github.io/dom-examples/to-do-notifications/).

The `deleteItem()` function is called when the user clicks the
button to delete a to-do list item. The item key is set in the button's
`'data-task'` data attribute, so the function
knows which item to delete. The function opens a database transaction in
which to delete the item, supplying its key. When the transaction completes,
the function updates the app UI to report that the item was deleted.

Note that in this function `db` is a global variable
referring to an {{domxref("IDBDatabase")}} object that is initialized when
the app loads.

```js
function deleteItem(event) {
  // retrieve the name of the task we want to delete
  let dataTask = event.target.getAttribute("data-task");

  // open a database transaction and delete the task, finding it by the name we retrieved above
  let transaction = db.transaction(["toDoList"], "readwrite");
  let request = transaction.objectStore("toDoList").delete(dataTask);

  // report that the data item has been deleted
  transaction.oncomplete = () => {
    // delete the parent of the button, which is the list item, so it no longer is displayed
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    note.appendChild(document.createElement("li")).textContent =
      `Task "${dataTask}" deleted.`;
  };
}
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
