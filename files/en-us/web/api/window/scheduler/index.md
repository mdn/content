---
title: "Window: scheduler property"
short-title: scheduler
slug: Web/API/Window/scheduler
page-type: web-api-instance-property
browser-compat: api.scheduler
---

{{APIRef("Prioritized Task Scheduling API")}}

The global read-only **`scheduler`** property is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).

It is implemented by both [`Window`](/en-US/docs/Web/API/Window#scheduler) and [`WorkerGlobalScope`](/en-US/docs/Web/API/WorkerGlobalScope#scheduler).
The existence of the property indicates that the API is supported in the current context, and can be accessed using `this.scheduler`.

The object has a single instance method {{domxref('Scheduler.postTask()')}} that is used to post prioritized tasks for scheduling.

## Value

A {{domxref("Scheduler")}}.

## Examples

The code below shows a very basic use of the property and its associated interface.
It demonstrates how to check that the property exists and then posts a task that returns a promise.

```js
// Check if the prioritized task API is supported
if ("scheduler" in this) {
  // Callback function - "the task"
  const myTask = () => "Task 1: user-visible";

  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler
    .postTask(myTask)
    // Handle resolved value
    .then((taskResult) => console.log(`${taskResult}`))
    // Handle error or abort
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NOT Supported");
}
```

For comprehensive example code showing to use the API see [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler.postTask()')}}
- {{domxref('TaskController')}}
