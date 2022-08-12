---
title: LockManager.query()
slug: Web/API/LockManager/query
page-type: web-api-instance-method
tags:
  - API
  - LockManager
  - Method
  - Reference
  - Web Locks API
  - query()
browser-compat: api.LockManager.query
---
{{APIRef("Web Locks")}}

The **`query()`** method of the {{domxref("LockManager")}} interface returns a {{jsxref('Promise')}} that resolves with an object containing information about held and pending locks.

## Syntax

```js
query()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with an object containing a snapshot of the {{domxref("LockManager")}} state.
The object has the following properties:

- `held`: An array of {{domxref('Lock')}} objects for held locks.
- `pending`: An array of {{domxref('Lock')}} objects for pending lock requests.

### Exceptions

This method may return a promise rejected with a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : If the environments document is not fully active.
- `SecurityError` {{domxref("DOMException")}}
  - : If a lock manager cannot be obtained for the current environment.

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
