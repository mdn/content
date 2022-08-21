---
title: Lock
slug: Web/API/Lock
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Web Locks API
  - lock
browser-compat: api.Lock
---
{{APIRef("Web Locks")}}

The **`Lock`** interface of the [Web Locks API](/en-US/docs/Web/API/Web_Locks_API) provides the name and mode of a lock.
This may be a newly requested lock that is received in the callback to {{domxref('LockManager.request','LockManager.request()')}}, or a record of an active or queued lock returned by {{domxref('LockManager.query()')}}.

## Properties

- {{domxref('Lock.mode')}} {{ReadOnlyInline}}
  - : Returns the access mode passed to {{domxref('LockManager.request()')}} when the lock was requested.
    The mode is either `"exclusive"` (the default) or `"shared"`.
- {{domxref('Lock.name')}} {{ReadOnlyInline}}
  - : Returns the name passed to {{domxref('LockManager.request()')}} when the lock was requested.

## Examples

The following examples show how the mode and name properties are passed in the call to {{domxref('LockManager.request()')}}.
`LockManager` is the object returned by {{domxref('navigator.locks')}}.

```js
navigator.locks.request("net_db_sync", show_lock_properties);
navigator.locks.request("another_lock", {mode: "shared"}, show_lock_properties);

function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
