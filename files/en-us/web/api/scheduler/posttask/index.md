---
title: "Scheduler: postTask() method"
short-title: postTask()
slug: Web/API/Scheduler/postTask
page-type: web-api-instance-method
browser-compat: api.Scheduler.postTask
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **`postTask()`** method of the {{domxref("Scheduler")}} interface is used for adding tasks to be [scheduled](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) according to their [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

The method allows users to optionally specify a minimum delay before the task will run, a priority for the task, and a signal that can be used to modify the task priority and/or abort the task.
It returns a promise that is resolved with the result of the task callback function, or rejected with the abort reason or an error thrown in the task.

Task priority can be [mutable or immutable](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority).
If the task priority will never need to change then it should be set using the `options.priority` parameter (any priority set through a signal will then be ignored).
You can still pass an {{domxref("AbortSignal")}} (which has no priority) or {{domxref("TaskSignal")}} to the `options.signal` parameter for aborting the task.

If the task priority might need to be changed the `options.priority` parameter must not be set.
Instead a {{domxref("TaskController")}} should be created and its {{domxref("TaskSignal")}} should be passed to `options.signal`.
The task priority will be initialized from the signal priority, and can later be modified using the signal's associated {{domxref("TaskController")}}.

If no priority is set then the task priority defaults to [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

If a delay is specified and greater than 0, then the execution of the task will be delayed for at least that many milliseconds.
Otherwise the task is immediately scheduled for prioritization.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameters

- `callback`

  - : An callback function that implements the task.
    The return value of the callback is used to resolve the promise returned by this function.

- `options` {{optional_inline}}

  - : Task options, including:

    - `priority` {{optional_inline}}

      - : The immutable [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the task.
        One of: [`"user-blocking"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        If set, this priority is used for the lifetime of the task and priority set on the `signal` is ignored.

    - `signal` {{optional_inline}}

      - : A {{domxref("TaskSignal")}} or {{domxref("AbortSignal")}} that can be used to abort the task (from its associated controller).

        If the `options.priority` parameter is set then the task priority cannot be changed, and any priority on the signal is ignored.
        Otherwise, if the signal is a {{domxref("TaskSignal")}} its priority is used to set the initial task priority, and the signal's controller may later use it to change the task priority.

    - `delay` {{optional_inline}}
      - : The minimum amount of time after which the task will be added to the scheduler queue, in whole milliseconds.
        The actual delay may be higher than specified, but will not be less.
        The default delay is 0.

### Return Value

Returns a {{jsxref("Promise")}} that is resolved with the return value of the `callback` function, or which may be rejected with the `signal`'s abort reason ({{domxref("AbortSignal.reason")}}).
The promise may also be rejected with an error thrown by the callback during execution.

## Examples

The following examples are slightly simplified versions of the live examples provided in [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

### Feature checking

Check whether prioritized task scheduling is supported by testing for the `scheduler` property in the global scope (such as {{domxref("Window.scheduler")}} in window's scope or {{domxref("WorkerGlobalScope.scheduler")}} in worker's scope).

For example, the code below logs "Feature: Supported" if the API is supported on this browser.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Basic usage

Tasks are posted specifying a callback function (task) in the first argument, and an optional second argument that can be used to specify a task priority, signal, and/or delay.
The method returns a {{jsxref("Promise")}} that resolves with the return value of the callback function, or rejects with either an abort error or an error thrown in the function.

Because it returns a promise, `postTask()` can be [chained with other promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Below we show how to wait on the promise to resolve using [`then`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) or reject using [`catch`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).
The priority is not specified, so the default priority of `user-visible` will be used.

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

// Post task with default priority: 'user-visible' (no other options)
// When the task resolves, Promise.then() logs the result.
scheduler
  .postTask(myTask, { signal: abortTaskController.signal })
  .then((taskResult) => console.log(`${taskResult}`)) // Log resolved value
  .catch((error) => console.error("Error:", error)); // Log error or abort
```

The method can also be used with [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) inside an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
The code below shows how you might use this approach to wait on a `user-blocking` task.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  console.log(result); // 'Task 2: user-blocking'.
}
runTask2();
```

### Permanent priorities

[Task priorities](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) may be set using `priority` parameter in the optional second argument.
Priorities that are set in this way cannot be changed (are [immutable](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Below we post two groups of three tasks, each member in reverse order of priority.
The final task has the default priority.
When run, each task simply logs it's expected order (we're not waiting on the result because we don't need to in order to show execution order).

```js
// three tasks, in reverse order of priority
scheduler.postTask(() => console.log("bkg 1"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 1"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 1"), {
  priority: "user-blocking",
});

// three more tasks, in reverse order of priority
scheduler.postTask(() => console.log("bkg 2"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 2"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 2"), {
  priority: "user-blocking",
});

// Task with default priority: user-visible
scheduler.postTask(() => {
  console.log("usr-vis 3 (default)");
});
```

The expected output is shown below: tasks are executed in priority order, and then declaration order.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bkg 1
bkg 2
```

### Changing task priorities

[Task priorities](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) can also take their initial value from a {{domxref("TaskSignal")}} passed to `postTask()` in the optional second argument.
If set in this way, the priority of the task [can then be changed](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) using the controller associated with the signal.

> [!NOTE]
> Setting and changing task priorities using a signal only works when the `options.priority` argument to `postTask()` is not set, and when the `options.signal` is a {{domxref("TaskSignal")}} (and not an {{domxref("AbortSignal")}}).

The code below first shows how to create a {{domxref("TaskController")}}, setting the initial priority of its signal to `user-blocking` in the [`TaskController()` constructor](/en-US/docs/Web/API/TaskController/TaskController).

We then use `addEventListener()` to add an event listener to the controller's signal (we could alternatively use the `TaskSignal.onprioritychange` property to add an event handler).
The event handler uses {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} on the event to get the original priority and {{domxref("TaskSignal.priority")}} on the event target to get the new/current priority.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });

// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Finally, the task is posted, passing in the signal, and then we immediately change the priority to `background` by calling {{domxref("TaskController.setPriority()")}} on the controller.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

The expected output is shown below.
Note that in this case the priority is changed before the task is executed, but it could equally have been changed while the task was running.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aborting tasks

Tasks can be aborted using either {{domxref("TaskController")}} and {{domxref("AbortController")}}, in exactly the same way.
The only difference is that you must use {{domxref("TaskController")}} if you also want to set the task priority.

The code below creates a controller and passes its signal to the task.
The task is then immediately aborted.
This causes the promise to be rejected with an `AbortError`, which is caught in the `catch` block and logged.
Note that we could also have listened for the [`abort` event](/en-US/docs/Web/API/AbortSignal/abort_event) fired on the {{domxref("TaskSignal")}} or {{domxref("AbortSignal")}} and logged the abort there.

```js
// Declare a TaskController with default priority
const abortTaskController = new TaskController();
// Post task passing the controller's signal
scheduler
  .postTask(() => console.log("Task executing"), {
    signal: abortTaskController.signal,
  })
  .then((taskResult) => console.log(`${taskResult}`)) //This won't run!
  .catch((error) => console.error("Error:", error)); // Log the error

// Abort the task
abortTaskController.abort();
```

### Delaying tasks

Tasks can be delayed by specifying an integer number of milliseconds in the `options.delay` parameter to `postTask()`.
This effectively adds the task to the prioritized queue on a timeout, as might be created using {{domxref("Window.setTimeout", "setTimeout()")}}.
The `delay` is the minimum amount of time before the task is added to the scheduler; it may be longer.

The code below shows two tasks added (as arrow functions) with a delay.

```js
// Post task as arrow function with delay of 2 seconds
scheduler
  .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
  .then((taskResult) => console.log(`${taskResult}`));
scheduler
  .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
  .then((taskResult) => console.log(`${taskResult}`));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
