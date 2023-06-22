---
title: Scheduling
slug: Web/API/Scheduling
page-type: web-api-interface
browser-compat: api.Scheduling
---

{{SeeCompatTable}}{{APIRef("Scheduling API")}}

The **`scheduling`** read-only property of the {{domxref("Navigator")}} interface returns an {{domxref("Scheduling")}} object for the current document.

## Value

An {{domxref('Scheduling')}} object.

## Example

```js
function executeTasks() {
  const scheduling = navigator.scheduling;
  const isInputPending = scheduling.isInputPending();

  if (isInputPending) {
    setTimeout(isInputPending, 0);
    return;
  }

  // imagine `tasks` require more time to execution
  tasks.forEach(() => task.execute());
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Early detection of input events](https://wicg.github.io/is-input-pending)
