---
title: TaskSignal
slug: Web/API/TaskSignal
page-type: web-api-interface
browser-compat: api.TaskSignal
---

{{APIRef("Prioritized Task Scheduling API")}}

The **`TaskSignal`** interface of the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) represents a signal object that allows you to communicate with a prioritized task, and abort it or change the [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) (if required) via a {{domxref('TaskController')}} object.

An object of this type is created, and associated with, a {{domxref('TaskController')}}.
The initial priority of the signal may be set by specifying it as an argument to the [`TaskController` constructor](/en-US/docs/Web/API/TaskController/TaskController) (by default it is `"user-visible"`).
The priority can be changed by calling {{domxref("TaskController.setPriority()")}} on the controller.

The signal may be passed as the `options.signal` argument in {{domxref("Scheduler.postTask()")}}, after which it's associated controller can be used to abort the task.
If the [task priority is mutable](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), the controller can also be used to change the task's priority.
Abortable tasks that do not need the priority to change may instead specify an {{domxref("AbortSignal")}} as the `options.signal` argument.

{{InheritanceDiagram}}

## Instance properties

_The `TaskSignal` interface also inherits properties from its parent interface, {{domxref("AbortSignal")}}._

- {{domxref('TaskSignal.priority')}} {{ReadOnlyInline}}
  - : Returns the priority of the signal.

## Instance methods

_The `TaskSignal` interface inherits methods from its parent interface, {{domxref("AbortSignal")}}._

## Static methods

_The `TaskSignal` interface inherits static methods from its parent interface, {{domxref("AbortSignal")}}._

## Events

_The `TaskSignal` interface also inherits events and event handlers from its parent interface, {{domxref("AbortSignal")}}._

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event)
  - : Fired when the priority is changed.
    This is triggered by calling {{domxref('TaskController.setPriority()')}} on the associated controller.

## Examples

Examples for how the `TaskSignal` is created and used for prioritizing and aborting tasks can be found here:

- [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples)
- [`TaskController` > Examples](/en-US/docs/Web/API/TaskController#examples)
- [`TaskSignal: prioritychange` event > Examples](/en-US/docs/Web/API/TaskSignal/prioritychange_event#examples)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
