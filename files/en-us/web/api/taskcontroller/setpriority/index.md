---
title: "TaskController: setPriority() method"
short-title: setPriority()
slug: Web/API/TaskController/setPriority
page-type: web-api-instance-method
browser-compat: api.TaskController.setPriority
---

{{APIRef("Prioritized Task Scheduling API")}}

The **`setPriority()`** method of the {{domxref("TaskController")}} interface can be called to set a new [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) for this controller's [`signal`](/en-US/docs/Web/API/TaskController#taskcontroller.signal).
If a prioritized task is [configured](/en-US/docs/Web/API/Scheduler/postTask#signal) to use the signal, this will also change the task priority.

Observers are notified of priority changes by dispatching a [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event.
The method will only notify if the priority actually changes (the event is not fired if the priority would not be changed by the call).

Note that task priority can only be changed for [tasks with mutable priorities](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority).
If the task is immutable, the function call is ignored.

## Syntax

```js-nolint
setPriority(priority)
```

### Parameters

- `priority`
  - : The [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the task.
    One of: [`"user-blocking"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#background).

### Return Value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : A priority change has been started when one is already running.

## Examples

First we create a task controller.
In this case we don't specify a priority, so it will default to `user-visible`.

```js
// Create a TaskController with default priority: 'user-visible'
const controller = new TaskController();
```

Then we pass the controller's signal to the [`Scheduler.postTask()`](/en-US/docs/Web/API/Scheduler/postTask#signal) method.

```js
// Post task passing the controller's signal.
// The signal priority sets the initial priority of the task
scheduler
  .postTask(() => "Task execute", { signal: controller.signal })
  .then((taskResult) => {
    console.log(`${taskResult}`);
  }) // Run on success)
  .catch((error) => {
    console.log(`Catch error: ${error}`);
  }); // Run on fail
```

The controller can then be used to change the priority

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Additional examples, including showing how to handle the event that results from changing the priority, can be found in: [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
