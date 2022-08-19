---
title: Scheduler
slug: Web/API/Scheduler
page-type: web-api-interface
tags:
  - Interface
  - Reference
  - Scheduler
browser-compat: api.Scheduler
---
{{APIRef("Prioritized Task Scheduling API")}}

The **`Scheduler`** interface of the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides the {{domxref('Scheduler.postTask()')}} method that can be used for adding prioritized tasks to be scheduled.

A `Scheduler` can be accessed from the global object {{domxref("Window")}} or {{domxref("WorkerGlobalScope")}} (`this.scheduler`).

## Properties

None.

## Methods

- {{domxref('Scheduler.postTask()')}}
  - : Adds a task to the scheduler as a callback, optionally specifying a priority, delay, and/or a signal for aborting the task.

## Examples

If the feature is defined, an instance of this object is returned by the global `this` in both workers and the main thread.
The only property of the interface is the {{domxref('Scheduler.postTask()','postTask()')}} method, which is used to post the task and returns a promise.

The code below shows a simple task that resolves with the text 'Task executing'.
This text is logged on success.
The code also shows a `catch` block, which would be required in more complex code to handle when a task is aborted or throws an error.

```js
if ('scheduler' in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler
    .postTask(() => 'Task executing')
    .then((taskResult) => console.log(`${taskResult}`)) // Log result
    .catch((error) => console.error(`Error: ${error}`)); // Log errors
}
```

For more comprehensive example code see [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
