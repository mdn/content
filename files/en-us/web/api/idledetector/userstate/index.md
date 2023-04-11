---
title: "IdleDetector: userState property"
short-title: userState
slug: Web/API/IdleDetector/userState
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdleDetector.userState
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

The **`userState`** read-only property of the {{domxref("IdleDetector")}} interface returns a string indicating whether the user has interacted with the device since the call to `start()`.

## Value

Either `"active"` or `"idle"` if {{domxref("IdleDetector.start()")}} has been called, or `null` otherwise.

## Examples

In the following example, the `change` callback prints the status of `userState` and `screenState` to the console.

```js
idleDetector.addEventListener("change", () => {
  const userState = idleDetector.userState;
  const screenState = idleDetector.screenState;
  console.log(`Idle change: ${userState}, ${screenState}.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
