---
title: "TaskPriorityChangeEvent: previousPriority property"
short-title: previousPriority
slug: Web/API/TaskPriorityChangeEvent/previousPriority
page-type: web-api-instance-property
browser-compat: api.TaskPriorityChangeEvent.previousPriority
---

{{APIRef("Prioritized Task Scheduling API")}}

The readonly **`previousPriority`** property of the {{domxref("TaskPriorityChangeEvent")}} interface returns the priority of the corresponding {{domxref("TaskSignal")}} before it was changed and this [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event was emitted.

This is the value that was set in the [`TaskPriorityChangeEvent` constructor](/en-US/docs/Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent) argument `options.previous`. <!-- link? -->

The new priority of the task can be read from `event.target.priority`.

## Value

A string, indicating the associated task's priority before it was changed.
This will be one of: [`"user-blocking"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Examples

The code below shows the `previousPriority` being obtained in a handler for a `prioritychange` event.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(
    `The priority changed from ${previousPriority} to ${newPriority}.`,
  );
});
```

A more complete live example can be found in [`prioritychange` event > Examples](/en-US/docs/Web/API/TaskSignal/prioritychange_event).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
