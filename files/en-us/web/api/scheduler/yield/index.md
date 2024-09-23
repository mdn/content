---
title: "Scheduler: yield() method"
short-title: yield()
slug: Web/API/Scheduler/yield
page-type: web-api-instance-method
browser-compat: api.Scheduler.yield
---

{{APIRef('Prioritized Task Scheduling API')}}

The **`yield()`** method of the {{domxref('Scheduler')}} interface is used for yielding the {{Glossary('main thread')}} during a task and continuing execution later, with the continuation [scheduled as a prioritized task](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API). This allows long-running work to be broken up so the browser stays responsive.

The task can continue when the promise returned by the method is resolved. The priority for when the promise is resolved defaults to [`'user-visible'`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), but can inherit a different priority if the `yield()` occurs within a {{domxref('Scheduler.postTask')}}.

Similarly, the continuation of work after the `yield()` can be aborted if it occurs within a `postTask()` callback, and the [task is aborted](/en-US/docs/Web/API/Scheduler/postTask#aborting_tasks).

## Syntax

```js-nolint
yield()
```

### Parameters

None.

### Return Value

Returns a {{jsxref('Promise')}} that is fulfilled with {{jsxref('undefined')}}, or rejected with an {{domxref('AbortSignal.reason')}}.

## Examples

### Feature checking

Check whether prioritized task scheduling is supported by testing for `scheduler.yield` on {{jsxref('globalThis')}}, either in a window or worker scope.

For example, the code below logs `'scheduler.yield: Supported'` if the API is supported in this browser.

```js
// Check for support before using.
if (globalThis.scheduler?.yield) {
  console.log("scheduler.yield: Supported");
} else {
  console.error("scheduler.yield: NOT Supported");
}
```

### Basic usage

Long tasks can be broken up by awaiting `scheduler.yield()`. The function returns a promise, yielding the main thread to allow the browser to execute other pending work—like responding to user input—if needed. The browser schedules a follow-up task that resovles the promise, at which point execution of the code can continue where it left off.

For instance, if a `click` event listener on a button results in a lot of work to load and display new page content, this means there will be no visual feedback to the user that their button click was even registered by the page until that work is complete. A `scheduler.yield()` can be inserted into the event listener so that quick feedback can be shown (like a spinner), and then the remainder of the work can be done when execution continues after the yield.

```js
button.addEventListener("click", async () => {
  // Provide immediate feedback so the user knows their click was received.
  showSpinner();
  await scheduler.yield();
  // Do longer processing
  doSlowContentSwap();
});
```

It may also be sufficient to have the browser default UI provide that quick interaction feedback. For instance, if a `change` event listener on a checkbox triggers a slow filtering of page content, a `scheduler.yield()` can be inserted to show the check state change immediately before continuing to the remained of the event response.

```js
checkbox.addEventListener("change", async () => {
  await scheduler.yield();
  doSlowContentFiltering();
});
```

In situations where there is lengthy work that needs to be done on the main thread that can be chunked into a series of tasks, `scheduler.yield()` can be called repeatedly to keep the page responsive throughout.

```js
function doWork(value) {
  console.log(`work chunk ${value}`);
}

const workList = [0, 1, 2, 3, 4];

for (const work of workList) {
  doWork(work);
  await scheduler.yield();
}
```

### Yield priority

The order in which the promise returned by `scheduler.yield()` is resolved relative to other tasks is based on an implicit [task priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities).

By default, `scheduler.yield()` is run with a [`'user-visible'`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) priority. However, the continuation from a `scheduler.yield()` has a slightly different behavior than `scheduler.postTask()` tasks of the same `priority`.

`scheduler.yield()` enqueues its task in a boosted task queue compared to a `scheduler.postTask()` of the same prioritiy level. So, for instance, a `scheduler.yield()` continuation with `'user-visible'` priority will be prioritized after `scheduler.postTask()` tasks of the higher `'user-blocking'` priority level, but before `scheduler.postTask()` tasks of the same `'user-visible'` priority (in the spec, this is defined by a task queue's [effective priority](https://wicg.github.io/scheduling-apis/#scheduler-task-queue-effective-priority)).

This is sometimes described as `scheduler.yield()` enqueuing its task at the front of a priority level's queue, while `scheduler.postTask()` tasks go at the end. This can be a useful mental model. In situations with just a few tasks, this means that with the same priority, the `scheduler.yield()` continuation will come first, allowing additional flexibility in how tasks can be scheduled.

```js
scheduler.postTask(() => console.log("user-visible postTask"));
scheduler.postTask(() => console.log("user-blocking postTask"), {
  priority: "user-blocking",
});
await scheduler.yield();
console.log("user-visible yield");
```

will log

```plain
user-blocking postTask
user-visible yield
user-visible postTask
```

However, in the cases where there are multiple `scheduler.yield()` calls, the distinction that the `scheduler.yield()` continuation tasks go into a boosted-priority _queue_ becomes important, because a second `scheduler.yield()` task won't be run before one that's already in the queue.

If one fuction yields its work before a second function does, the first function to yield will continue first.

```js
async function first() {
  console.log("starting first function");
  await scheduler.yield();
  console.log("ending first function");
}

async function second() {
  console.log("starting second function");
  await scheduler.yield();
  console.log("ending second function");
}
```

will log

```plain
starting first function
starting second function
ending first function
ending second function
```

### Inheriting task priorities

A `scheduler.yield()` within a `scheduler.postTask()` task will inherit the task's priority. For example, work after a `scheduler.yield()` within a [`'background'`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking) low-priority task will also be scheduled as `'background'` by default (but, again, inserted in the boosted `'background'` priority queue, so running before any `'background'` `postTask` tasks).

```js
async function backgroundWork() {
  scheduler.postTask(() => console.log("background postTask"), {
    priority: "background",
  });
  scheduler.postTask(() => console.log("user-visible postTask"), {
    priority: "user-visible",
  });
  // yield() inherits 'background' priority from surrounding task.
  await scheduler.yield();
  console.log("default-background yield");
}

await scheduler.postTask(backgroundWork, { priority: "background" });
```

will log

```plain
user-visible postTask
default-background yield
background postTask
```

`scheduler.yield()` continuations will inherit whatever priority the surrounding `scheduler.postTask()` task has, including if the task's priority was [changed dynamically](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#changing_task_priorities).

#### Within `requestIdleCallback`

Similar to a `scheduler.yield()` inheriting a priority from a surrounding `scheduler.postTask()`, it will also inherit priority if called within a {{domxref("Window.requestIdleCallback()")}} callback, with [`'background'`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#background) priority. The `scheduler.yield()` will not be abortable, however.

### Aborting a yield

Similar to setting priority, a `scheduler.yield()` can't be aborted directly, but it will inherit the abort signal from a surrounding `scheduler.postTask()` task. Aborting the task will also abort any pending yields within it.

This example uses a {{domxref('TaskController')}} to [abort a task](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#aborting_tasks) with a `scheduler.yield()` within it.

```js
const taskController = new TaskController();

function firstHalfOfWork() {
  console.log("first half of work");
  taskController.abort("cancel work");
}

function secondHalfOfWork() {
  // Never runs.
  console.log("second half of work");
}

scheduler.postTask(
  async () => {
    firstHalfOfWork();
    await scheduler.yield();
    secondHalfOfWork();
  },
  { signal: taskController.signal },
);
```

The example is somewhat contrived to always trigger the `taskController.abort()` call within the task itself, but the `abort()` call could come from anywhere, like a 'Cancel' button available for the user to press at any time.

In this case the `abort()` occurs after the `scheduler.postTask()` task has already started (`'first half of work'` is logged), but the yield call inherits the {{domxref('AbortSignal')}} and so the `await scheduler.yield()` will throw with abort reason `'cancel work'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler')}}
- {{domxref('Scheduler.postTask()')}}
