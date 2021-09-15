---
title: LockManager.query()
slug: Web/API/LockManager/query
tags:
  - API
  - Experimental
  - LockManager
  - Method
  - Reference
  - Web Locks API
  - query()
browser-compat: api.LockManager.query
---
{{APIRef("Web Locks")}}{{SeeCompatTable}}

The **`query()`** method of the
{{domxref("LockManager")}} interface returns a {{jsxref('Promise')}} which resolves
with an object containing information about held and pending locks.

## Syntax

```js
var promise<LockManagerSnapshot> = LockManager.query()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves with a `LockManagerSnapshot`
containing the following properties.

- `held`: An array of {{domxref('Lock')}} objects for held locks.
- `pending`: An array of {{domxref('Lock')}} objects for pending lock
  requests.

## Example

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
