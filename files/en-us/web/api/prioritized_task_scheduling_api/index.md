---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
page-type: web-api-overview
browser-compat:
  - api.Scheduler
  - api.Scheduling
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **Prioritized Task Scheduling API** provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code or in third-party libraries and frameworks.

The [task priorities](#task_priorities) are very coarse-grained and based around whether tasks block user interaction or otherwise impact the user experience, or can run in the background. Developers and frameworks may implement more fine-grained prioritization schemes within the broad categories defined by the API.

The API is promise-based and supports the ability to set and change task priorities, to delay tasks being added to the scheduler, to abort tasks, and to monitor for priority change and abort events.

## Concepts and usage

The Prioritized Task Scheduling API is available in both window and worker threads using the `scheduler` property on the global object.

The main API methods are {{domxref('scheduler.postTask()')}} and {{domxref('scheduler.yield()')}}. `scheduler.postTask()` takes a callback function (the task) and returns a promise that resolves with the return value of the function or rejects with an error. `scheduler.yield()` turns any [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) function into a task by yielding the main thread to the browser for other work, with execution continuing when the returned promise is resolved.

The two methods have similar functionality but different levels of control. `scheduler.postTask()` is more configurable — for example, it allows task priority to be explicitly set and task cancellation via an [`AbortSignal`](/en-US/docs/Web/API/AbortSignal). `scheduler.yield()` on the other hand is simpler and can be `await`ed in any `async` function without having to provide a followup task in another function.

### `scheduler.yield()`

To break up long-running JavaScript tasks so they don't block the main thread, insert a `scheduler.yield()` call to temporarily yield the main thread back to the browser, which creates a task to continue execution where it left off.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` returns a promise that can be awaited to continue execution. This allows work belonging to the same function to be included there, without blocking the main thread when the function runs.

`scheduler.yield()` takes no arguments. The task that triggers its continuation has a default [`user-visible`](#user-visible) priority; however, if `scheduler.yield()` is called within a `scheduler.postTask()` callback, it will [inherit the priority of the surrounding task](/en-US/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

When `scheduler.postTask()` is called with no arguments, it creates a task with a default [`user-visible`](#user-visible) priority that cannot be aborted or have its priority changed.

```js
const promise = scheduler.postTask(myTask);
```

Because the method returns a promise, you can wait on its resolution asynchronously using [`then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), and catch errors thrown by the task callback function (or when the task is aborted) using [`catch`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch). The callback function can be any kind of function (below we demonstrate an arrow function).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

The same task might be waited on using `await`/`async` as shown below (note, this is run in an {{Glossary("IIFE", "Immediately Invoked Function Expression (IIFE)")}}):

```js
(async () => {
  try {
    const result = await scheduler.postTask(() => "Task executing");
    console.log(result);
  } catch (error) {
    // Log AbortError or error thrown in task function
    console.error(`Error: ${error}`);
  }
})();
```

You can also specify an options object to the `postTask()` method if you want to change the default behavior.
The options are:

- `priority` This allows you to specify a particular immutable priority.
  Once set, the priority cannot be changed.
- `signal` This allows you to specify a signal, which may be either a {{domxref("TaskSignal")}} or {{domxref("AbortSignal")}}
  The signal is associated with a controller, which can be used to abort the task.
  A {{domxref("TaskSignal")}} can also be used to set and change the task priority if the [task is mutable](#mutable_and_immutable_task_priority).
- `delay` This allows you to specify the delay before the task is added for scheduling, in milliseconds.

The same example as above with a priority option would look like this:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Task priorities

Scheduled tasks are run in priority order, followed by the order that they were added to the scheduler queue.

There are just three priorities, which are listed below (ordered from highest to lowest):

- `user-blocking`

  - : Tasks that stop users from interacting with the page.
    This includes rendering the page to the point where it can be used, or responding to user input.

- `user-visible`

  - : Tasks that are visible to the user but not necessarily blocking user actions.
    This might include rendering non-essential parts of the page, such as non-essential images or animations.

    This is the default priority for `scheduler.postTask()` and `scheduler.yield()`.

- `background`
  - : Tasks that are not time-critical.
    This might include log processing or initializing third party libraries that aren't required for rendering.

### Mutable and immutable task priority

There are many use cases where the task priority never needs to change, while for others it does.
For example fetching an image might change from a `background` task to `user-visible` as a carousel is scrolled into the viewing area.

Task priorities can be set as static (immutable) or dynamic (modifiable) depending on the arguments passed to {{domxref('Scheduler.postTask()')}}.

Task priority is immutable if a value is specified in the `options.priority` argument.
The given value will be used for the task priority and cannot be changed.

The priority is modifiable only if a {{domxref("TaskSignal")}} is passed to the `options.signal` argument **and** `options.priority` is **not set**.
In this case the task will take its initial priority from the `signal` priority, and the priority can subsequently be changed by calling {{domxref("TaskController.setPriority()")}} on the controller associated with the signal.

If the priority is not set with `options.priority` or by passing a {{domxref("TaskSignal")}} to `options.signal` then it defaults to `user-visible` (and is by definition immutable).

Note that a task that needs to be aborted must set `options.signal` to either {{domxref("TaskSignal")}} or {{domxref("AbortSignal")}}.
However for a task with an immutable priority, {{domxref("AbortSignal")}} more clearly indicates that the task priority cannot be changed using the signal.

Let's run through an example to demonstrate what we mean by this. When you have several tasks that are of roughly the same priority, it makes sense to break them down into separate functions to aid with maintenance, debugging, and many other reasons.

For example:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

However, this kind of structure doesn't help with main thread blocking. Since all five of the tasks are being run inside one main function, the browser runs them all as a single task.

To handle this, we tend to run a function periodically to get the code to _yield to the main thread_. This means that our code is split into multiple tasks, between the execution of which the browser is given the opportunity to handle high-priority tasks such as updating the UI. A common pattern for this function uses {{domxref("Window.setTimeout", "setTimeout()")}} to postpone execution into a separate task:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

This can be used inside a task runner pattern like so, to yield to the main thread after each task has been run:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yield();
  }
}
```

To improve this further, we can use {{domxref("Scheduler.yield")}} when available to allow this code to continue executing ahead of other less critical tasks in the queue:

```js
function yield() {
  // Use scheduler.yield if it exists:
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // Fall back to setTimeout:
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## Interfaces

- {{domxref("Scheduler")}}
  - : Contains the {{domxref('Scheduler.postTask', 'postTask()')}} and {{domxref('Scheduler.yield', 'yield()')}} methods for adding prioritized tasks to be scheduled.
    An instance of this interface is available on the {{domxref("Window")}} or {{domxref("WorkerGlobalScope")}} global objects (`globalThis.scheduler`).
- {{domxref("TaskController")}}
  - : Supports both aborting a task and changing its priority.
- {{domxref("TaskSignal")}}
  - : A signal object that allows you to abort a task and change its priority, if required, using a {{domxref("TaskController")}} object.
- {{domxref("TaskPriorityChangeEvent")}}
  - : The interface for the {{domxref("TaskSignal/prioritychange_event","prioritychange")}} event, which is sent when the priority for a task is changed.

> [!NOTE]
> If the [task priority](#task_priorities) never needs to be changed, you can use an {{domxref("AbortController")}} and its associated {{domxref("AbortSignal")}} instead of {{domxref("TaskController")}} and {{domxref("TaskSignal")}}.

### Extensions to other interfaces

- {{domxref("Window.scheduler")}} and {{domxref("WorkerGlobalScope.scheduler")}}
  - : These properties are the entry points for using the `Scheduler.postTask()` method in a window or a worker scope, respectively.

## Examples

Note that the examples below use `myLog()` to write to a text area.
The code for the log area and method is generally hidden to not distract from more relevant code.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js
// hidden logger code - simplifies example
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

### Feature checking

Check whether prioritized task scheduling is supported by testing for the `scheduler` property in the global scope.

The code below prints "Feature: Supported" if the API is supported on this browser.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js hidden
// hidden logger code - simplifies example
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  myLog("Feature: Supported");
} else {
  myLog("Feature: NOT Supported");
}
```

{{EmbedLiveSample('Feature checking','400px','70px')}}

### Basic usage

Tasks are posted using {{domxref('Scheduler.postTask()')}}, specifying a callback function (task) in the first argument, and an optional second argument that can be used to specify a task priority, signal, and/or delay.
The method returns a {{jsxref("Promise")}} that resolves with the return value of the callback function, or rejects with either an abort error or an error thrown in the function.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Because it returns a promise, {{domxref('Scheduler.postTask()')}} can be [chained with other promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Below we show how to wait on the promise to resolve using [`then`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then).
This uses the default priority (`user-visible`).

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

if ("scheduler" in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler.postTask(myTask).then((taskResult) => myLog(`${taskResult}`));
}
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
  myLog(result); // Logs 'Task 2: user-blocking'.
}
runTask2();
```

In some cases you might not need to wait on completion at all.
For simplicity many of the examples here simply log the result as the task executes.

```js
// A function that defines a task
function myTask3() {
  myLog("Task 3: user-visible");
}

if ("scheduler" in this) {
  // Post task and log result when it runs
  scheduler.postTask(myTask3);
}
```

The log below shows the output of the three tasks above.
Note that the order they are run depends on the priority first, and then the declaration order.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanent priorities

[Task priorities](#task_priorities) may be set using `priority` parameter in the optional second argument.
Priorities that are set in this way are [immutable](#mutable_and_immutable_task_priority) (cannot be changed).

Below we post two groups of three tasks, each member in reverse order of priority.
The final task has the default priority.
When run, each task simply logs it's expected order (we're not waiting on the result because we don't need to in order to show execution order).

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // three tasks, in reverse order of priority
  scheduler.postTask(() => myLog("bkg 1"), { priority: "background" });
  scheduler.postTask(() => myLog("usr-vis 1"), { priority: "user-visible" });
  scheduler.postTask(() => myLog("usr-blk 1"), { priority: "user-blocking" });

  // three more tasks, in reverse order of priority
  scheduler.postTask(() => myLog("bkg 2"), { priority: "background" });
  scheduler.postTask(() => myLog("usr-vis 2"), { priority: "user-visible" });
  scheduler.postTask(() => myLog("usr-blk 2"), { priority: "user-blocking" });

  // Task with default priority: user-visible
  scheduler.postTask(() => myLog("usr-vis 3 (default)"));
}
```

```html hidden
<textarea id="log" style="min-height: 120px; width: 95%"></textarea>
```

The output below shows that the tasks are executed in priority order, and then declaration order.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Changing task priorities

[Task priorities](#task_priorities) can also take their initial value from a {{domxref("TaskSignal")}} passed to `postTask()` in the optional second argument.
If set in this way, the priority of the task [can then be changed](#mutable_and_immutable_task_priority) using the controller associated with the signal.

> [!NOTE]
> Setting and changing task priorities using a signal only works when the `options.priority` argument to `postTask()` is not set, and when the `options.signal` is a {{domxref("TaskSignal")}} (and not an {{domxref("AbortSignal")}}).

The code below first shows how to create a {{domxref("TaskController")}}, setting the initial priority of its signal to `user-blocking` in the {{domxref("TaskController.TaskController", "TaskController()")}} constructor.

The code then uses `addEventListener()` to add an event listener to the controller's signal (we could alternatively use the `TaskSignal.onprioritychange` property to add an event handler).
The event handler uses {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} on the event to get the original priority and {{domxref("TaskSignal.priority")}} on the event target to get the new/current priority.

The task is then posted, passing in the signal, and then we immediately change the priority to `background` by calling {{domxref("TaskController.setPriority()")}} on the controller.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // Create a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    myLog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(() => myLog("Task 1"), { signal: controller.signal });

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

The output below demonstrates that the priority was successfully changed to `background` from `user-blocking`.
Note that in this case the priority is changed before the task is executed, but it could equally have been changed while the task was running.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Aborting tasks

Tasks can be aborted using either {{domxref("TaskController")}} and {{domxref("AbortController")}}, in exactly the same way.
The only difference is that you must use {{domxref("TaskController")}} if you also want to set the task priority.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

The code below creates a controller and passes its signal to the task.
The task is then immediately aborted.
This causes the promise to be rejected with an `AbortError`, which is caught in the `catch` block and logged.
Note that we could also have listened for the {{domxref("AbortSignal/abort_event", "abort")}} event fired on the {{domxref("TaskSignal")}} or {{domxref("AbortSignal")}} and logged the abort there.

```js
if ("scheduler" in this) {
  // Declare a TaskController with default priority
  const abortTaskController = new TaskController();
  // Post task passing the controller's signal
  scheduler
    .postTask(() => myLog("Task executing"), {
      signal: abortTaskController.signal,
    })
    .then((taskResult) => myLog(`${taskResult}`)) // This won't run!
    .catch((error) => myLog(`Error: ${error}`)); // Log the error

  // Abort the task
  abortTaskController.abort();
}
```

The log below shows the aborted task.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Delaying tasks

Tasks can be delayed by specifying an integer number of milliseconds in the `options.delay` parameter to `postTask()`.
This effectively adds the task to the prioritized queue on a timeout, as might be created using {{domxref("Window.setTimeout", "setTimeout()")}}.
The `delay` is the minimum amount of time before the task is added to the scheduler; it may be longer.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

The code below shows two tasks added (as arrow functions) with a delay.

```js
if ("scheduler" in this) {
  // Post task as arrow function with delay of 2 seconds
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => myLog(`${taskResult}`));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => myLog(`${taskResult}`));
}
```

Refresh the page.
Note that the second string appears in log after about 2 seconds.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) on the Airbnb blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) on web.dev (2022)
