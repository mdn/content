---
title: "Navigator: scheduling property"
short-title: scheduling
slug: Web/API/Navigator/scheduling
page-type: web-api-instance-property
browser-compat: api.Navigator.scheduling
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
