---
title: Window.scheduler
slug: Web/API/Window/scheduler
tags:
  - Property
  - Reference
  - scheduler
  - Window
  - Experimental
browser-compat: api.Window.scheduler
---
{{APIRef("Prioritized Task Scheduling API")}} {{SeeCompatTable}}

The read-only **`scheduler`** property of the {{domxref("Scheduler")}} object is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).

The existence of the property indicates that the API is supported.

## Value

A {{domxref("Scheduler")}}.

## Examples

The code below shows how to check that the property exists:

```js
// Check if the prioritized task API is supported
if ('scheduler' in this) {
  console.log('Feature: Supported');
  //... then post task using 'scheduler.postTask()'
}
else {
  console.log('Feature: NOT Supported');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
