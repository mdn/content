---
title: "WorkerGlobalScope: scheduler property"
short-title: scheduler
slug: Web/API/WorkerGlobalScope/scheduler
page-type: web-api-instance-property
browser-compat: api.scheduler
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers("worker")}}

The **`scheduler`** read-only property of the {{domxref("WorkerGlobalScope")}} interface is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).

It returns a {{domxref("Scheduler")}} object instance containing {{domxref('Scheduler.postTask', 'postTask()')}} and {{domxref('Scheduler.yield()', 'yield()')}} methods that can be used to schedule prioritized tasks.

## Value

A {{domxref("Scheduler")}}.

## Examples

The code below shows a very basic use of the property and its associated interface.
It demonstrates how to check that the property exists and then posts a task that returns a promise.

```js
// Check if the prioritized task API is supported
if ("scheduler" in self) {
  // Callback function - "the task"
  const myTask = () => "Task 1: user-visible";

  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  self.scheduler
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
- {{domxref('Scheduler.yield()')}}
- {{domxref('TaskController')}}
- {{domxref("Window.scheduler")}}
