---
title: TaskSignal.priority
slug: Web/API/TaskSignal/priority
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - priority
browser-compat: api.TaskSignal.priority
---
{{APIRef("Prioritized Task Scheduling API")}}

The read-only **`priority`** property of the {{domxref("TaskSignal")}} interface indicates the signal [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

The initial value is set in the associated {{domxref("TaskController")}} by specifying it as an argument to the [`TaskController` constructor](/en-US/docs/Web/API/TaskController/TaskController) (by default it is `"user-visible"`).
The priority of the signal can be changed by calling {{domxref("TaskController.setPriority()")}} on the associated controller.

For [tasks with a mutable priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), this value is used to set the initial task priority and later to change it.
Tasks with an immutable priority will ignore the value.

## Value

A string indicating the signal [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).
This will be one of: `"user-blocking"`, `"user-visible"`, `"background"`.

## Examples

The `priority` is most commonly used by developers to determine the new priority following [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) events.
See [TaskSignal: prioritychange event](/en-US/docs/Web/API/TaskSignal/prioritychange_event#examples) for a live example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
