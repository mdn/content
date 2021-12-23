---
title: IdleDetector.onchange
slug: Web/API/IdleDetector/onchange
tags:
  - API
  - Property
  - Reference
  - onchange
  - IdleDetector
browser-compat: api.IdleDetector.onchange
---
{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}

The **`onchange`** EventHandler of the {{domxref("IdleDetector")}} interface is
called when the value of `userState` or `screenState` has changed. This method
receives an {{domxref("Event")}} object.

## Syntax

```js
IdleDetector.onchange = function;
IdleDetector.addEventListener('change', function);
```

## Example

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

