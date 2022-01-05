---
title: IDBDatabase.onclose
slug: Web/API/IDBDatabase/onclose
tags:
  - API
  - Event Handler
  - IDBDatabase
  - IndexedDB
  - Property
  - Reference
  - onclose
browser-compat: api.IDBDatabase.onclose
---
{{ APIRef("IndexedDB") }}

The **`onclose`** event handler of the
{{domxref("IDBDatabase")}} interface handles the {{event("close")}} event, which is
fired when the database is unexpectedly closed. This can happen, for example, when the
application is shut down or access to the disk the database is stored on is lost while
the database is open.

The {{event("close")}} event is fired after all transactions have been aborted and
the connection has been closed.

{{AvailableInWorkers}}

## Syntax

```js
IDBDatabase.onclose = function(event) { /* ... */ };
```

### Value

A function which is called when the {{event("close")}} event is fired.

## Example

```js
db.onclose = function(event) {
  myAppShowAlert('The database "' + db.name + '" has unexpectedly closed.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{domxref("IDBDatabase")}}
- [close](/en-US/docs/Web/API/IDBDatabase/close_event) event
