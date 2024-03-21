---
title: "Lock: mode property"
short-title: mode
slug: Web/API/Lock/mode
page-type: web-api-instance-property
browser-compat: api.Lock.mode
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`mode`** read-only property of the {{domxref("Lock")}} interface returns the access mode passed to {{domxref('LockManager.request()')}} when the lock was requested.
The mode is either `"exclusive"` (the default) or `"shared"`.

## Value

One of `"exclusive"` or `"shared"`.

## Examples

The following examples show how the mode property is passed in the call to {{domxref('LockManager.request()')}}.
{{domxref('LockManager')}} is the object returned by {{domxref('navigator.locks')}}.

```js
// Should show "exclusive" (the default)
navigator.locks.request("my_resource", show_lock_properties);

// Should show "exclusive"
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  show_lock_properties,
);

// Should show "shared"
navigator.locks.request(
  "my_resource",
  { mode: "shared" },
  show_lock_properties,
);

function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
