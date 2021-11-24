---
title: IdleDetector.screenState
slug: Web/API/IdleDetector/screenState
tags:
  - API
  - Property
  - Reference
  - screenState
  - IdleDetector
browser-compat: api.IdleDetector.screenState
---
{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}} 

The **`screenState`** read-only property of the {{domxref("IdleDetector")}} interface
returns a string indicating whether the screen is locked, one of `"locked"` or
`"unlocked"`.

## Value

Either `"locked"` or `"unlocked"` if {{domxref("IdleDetector.start()")}} has been called, or `null` otherwise.

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


