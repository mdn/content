---
title: "LockManager: query() method"
short-title: query()
slug: Web/API/LockManager/query
page-type: web-api-instance-method
browser-compat: api.LockManager.query
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`query()`** method of the {{domxref("LockManager")}} interface returns a {{jsxref('Promise')}} that resolves with an object containing information about held and pending locks.

## Syntax

```js-nolint
query()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with an object containing a snapshot of the {{domxref("LockManager")}} state.
The object has the following properties:

- `held`
  - : An array of `LockInfo` objects for held locks.
- `pending`
  - : An array of `LockInfo` objects for pending lock requests.

The `LockInfo` object can have the following properties:

- `name`
  - : The name passed to {{domxref("LockManager.request()")}} when the lock was requested.
- `mode`
  - : The access mode passed to {{domxref("LockManager.request()")}} when the lock was requested. The mode is either `"exclusive"` or `"shared"`.
- `clientId`
  - : The unique identity of the context where {{domxref("LockManager.request()")}} is called. This is the same value as {{domxref("Client.id")}}.

### Exceptions

This method may return a promise rejected with a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the environments document is not fully active.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if a lock manager cannot be obtained for the current environment.

## Examples

```js
const state = await navigator.locks.query();
for (const lock of state.held) {
  console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
}
for (const request of state.pending) {
  console.log(`requested lock: name ${request.name}, mode ${request.mode}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
