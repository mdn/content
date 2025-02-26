---
title: TaskSignal
slug: Web/API/TaskSignal
page-type: web-api-interface
browser-compat: api.TaskSignal
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **`TaskSignal`** interface of the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) represents a signal object that allows you to communicate with a prioritized task, and abort it or change the [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) (if required) via a {{domxref('TaskController')}} object.

An object of this type is created, and associated with, a {{domxref('TaskController')}}.
The initial priority of the signal may be set by specifying it as an argument to the {{domxref("TaskController.TaskController", "TaskController()")}} constructor (by default it is `"user-visible"`).
The priority can be changed by calling {{domxref("TaskController.setPriority()")}} on the controller.

The signal may be passed as the `options.signal` argument in {{domxref("Scheduler.postTask()")}}, after which it's associated controller can be used to abort the task.
If the [task priority is mutable](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), the controller can also be used to change the task's priority.
Abortable tasks that do not need the priority to change may instead specify an {{domxref("AbortSignal")}} as the `options.signal` argument.

{{InheritanceDiagram}}

## Instance properties

_The `TaskSignal` interface also inherits properties from its parent interface, {{domxref("AbortSignal")}}._

- {{domxref('TaskSignal.priority')}} {{ReadOnlyInline}}
  - : Returns the priority of the signal.

## Static methods

_The `TaskSignal` interface inherits methods from its parent interface, {{domxref("AbortSignal")}}._

- {{domxref("TaskSignal/any_static", "TaskSignal.any()")}} {{experimental_inline}}
  - : Returns an **`TaskSignal`** that aborts when any of the given abort signals abort.

## Instance methods

_The `TaskSignal` interface inherits methods from its parent interface, {{domxref("AbortSignal")}}._

## Events

Listen to these events using {{domxref("EventTarget.addEventListener()", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("TaskSignal/prioritychange_event", "prioritychange")}}
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
