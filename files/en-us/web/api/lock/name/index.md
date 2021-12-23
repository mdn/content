---
title: Locks.name
slug: Web/API/Lock/name
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Web Locks API
  - lock
  - mode
  - name
browser-compat: api.Lock.name
---
{{SeeCompatTable}}{{APIRef("Web Locks")}}

The **`name`** read-only property of
the {{domxref("Lock")}} interface returns the _name_ passed to
{{domxref('LockManager.request')}} selected when the lock was requested.

The name of a lock is passed by script when the lock is requested. The name is selected
by the developer to represent an abstract resource for which use is being coordinated
across multiple tabs, workers, or other code within the origin. For example, if only one
tab of a web application should be synchronizing network resources with an offline
database, it could use a lock name such as `"net_db_sync"`.

## Syntax

```js
var name = Lock.name
```

### Value

A {{domxref("DOMString")}}.

## Example

The following examples show how the name property passed in the call
to {{domxref('LockManager.request()')}}. `LockManager` is the object returned
by {{domxref('navigator.locks')}}.

```js
navigator.locks.request("net_db_sync", show_lock_properties);

function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
