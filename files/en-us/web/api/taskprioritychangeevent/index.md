---
title: TaskPriorityChangeEvent
slug: Web/API/TaskPriorityChangeEvent
page-type: web-api-interface
browser-compat: api.TaskPriorityChangeEvent
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **`TaskPriorityChangeEvent`** is the interface for the [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event.

{{InheritanceDiagram}}

## Constructor

- {{domxref("TaskPriorityChangeEvent.TaskPriorityChangeEvent", "TaskPriorityChangeEvent()")}}
  - : Creates a new `TaskPriorityChangeEvent` object, setting an event name and previous priority.

## Instance properties

_This interface also inherits the properties of its parent, {{domxref("Event")}}._

- {{domxref("TaskPriorityChangeEvent.previousPriority")}} {{ReadOnlyInline}}
  - : Returns the [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the corresponding {{domxref("TaskSignal")}} _before_ this [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event.

## Instance methods

_This interface has no methods of its own, but inherits the methods of its parent, {{domxref("Event")}}._

## Examples

An object of this type is returned in the handler for a `prioritychange` event.
The code below shows a handler in which the `newPriority` and `previousPriority` are logged.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

A more complete live example can be found in [`prioritychange` event > Examples](/en-US/docs/Web/API/TaskSignal/prioritychange_event).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event
