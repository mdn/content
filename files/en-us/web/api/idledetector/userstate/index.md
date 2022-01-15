---
title: IdleDetector.userState
slug: Web/API/IdleDetector/userState
tags:
  - API
  - Property
  - Reference
  - userState
  - IdleDetector
browser-compat: api.IdleDetector.userState
---
{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}

The **`userState`** read-only property of the {{domxref("IdleDetector")}} interface returns a string indicating whether the users has interacted with the device since the call to `start()`.

## Value

Either `"active"` or `"idle"` if {{domxref("IdleDetector.start()")}} has been called, or `null` otherwise.

## Examples

In the following example, the `change` callback prints the status of `userState` and `screenState` to the console.

```js
idleDetector.addEventListener('change', () => {
    const userState = idleDetector.userState;
    const screenState = idleDetector.screenState;
    console.log(`Idle change: ${userState}, ${screenState}.`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


