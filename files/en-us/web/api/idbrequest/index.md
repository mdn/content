---
title: IDBRequest
slug: Web/API/IDBRequest
page-type: web-api-interface
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Interface
  - Reference
  - Storage
browser-compat: api.IDBRequest
---
{{APIRef("IndexedDB")}}

The **`IDBRequest`** interface of the IndexedDB API provides access to results of asynchronous requests to databases and database objects using event handler attributes. Each reading and writing operation on a database is done using a request.

The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the `IDBRequest` instance.

All asynchronous operations immediately return an {{domxref("IDBRequest")}} instance. Each request has a `readyState` that is set to the `'pending'` state; this changes to `'done'` when the request is completed or fails. When the state is set to `done`, every request returns a `result` and an `error`, and an event is fired on the request. When the state is still `pending`, any attempt to access the `result` or `error` raises an `InvalidStateError` exception.

In plain words, all asynchronous methods return a request object. If the request has been completed successfully, the result is made available through the `result` property and an event indicating success is fired at the request ({{domxref("IDBRequest.success_event", "success")}}). If an error occurs while performing the operation, the exception is made available through the `result` property and an error event is fired ({{domxref("IDBRequest.error_event", "error")}}).

The interface {{domxref("IDBOpenDBRequest")}} is derived from `IDBRequest`.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Properties

_Also inherits properties from {{domxref("EventTarget")}}._

- {{domxref("IDBRequest.error")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMException")}} in the event of an unsuccessful request, indicating what went wrong.
- {{domxref("IDBRequest.result")}} {{ReadOnlyInline}}
  - : Returns the result of the request. If the request failed and the result is not available, an InvalidStateError exception is thrown.
- {{domxref("IDBRequest.source")}} {{ReadOnlyInline}}
  - : The source of the request, such as an {{domxref("IDBIndex")}} or an {{domxref("IDBObjectStore")}}. If no source exists (such as when calling {{domxref("IDBFactory.open")}}), it returns null.
- {{domxref("IDBRequest.readyState")}} {{ReadOnlyInline}}
  - : The state of the request. Every request starts in the `pending` state. The state changes to `done` when the request completes successfully or when an error occurs.
- {{domxref("IDBRequest.transaction")}} {{ReadOnlyInline}}
  - : The transaction for the request. This property can be null for certain requests, for example those returned from {{domxref("IDBFactory.open")}} unless an upgrade is needed. (You're just connecting to a database, so there is no transaction to return).

## Methods

_No methods, but inherits methods from {{domxref("EventTarget")}}._

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`error`](/en-US/docs/Web/API/IDBRequest/error_event)
  - : Fired when an error caused a request to fail.
- [`success`](/en-US/docs/Web/API/IDBRequest/success_event)
  - : Fired when an `IDBRequest` succeeds.

## Example

In the following code snippet, we open a database asynchronously and make a request; `onerror` and `onsuccess` functions are included to handle the success and error cases. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being
// opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database.
  db = DBOpenRequest.result;
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
