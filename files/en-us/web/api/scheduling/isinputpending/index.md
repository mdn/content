---
title: "Scheduling: isInputPending() method"
short-title: isInputPending()
slug: Web/API/Scheduling/isInputPending
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Scheduling.isInputPending
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

The **`isInputPending()`** method of the {{domxref("Scheduling")}} interface allows you to check whether there are pending input events in the event queue, indicating that the user is attempting to interact with the page.

This feature can be useful in situations where you have a queue of tasks to run, and you want to yield to the main thread regularly to allow user interaction to occur so that the app is kept as responsive and performant as possible. `isInputPending()` allows you to yield only when there is input pending, rather than having to do it at arbitrary intervals.

> [!WARNING]
> The `isInputPending()` method has been superseded by features available on the {{domxref("Scheduler")}} interface such as {{domxref("Scheduler.yield()", "yield()")}}, which are better designed for addressing scheduling tasks. See [Don't use `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending) for more details.

`isInputPending()` is called using `navigator.scheduling.isInputPending()`.

## Syntax

```js-nolint
isInputPending()
isInputPending(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object providing options. Currently, the only option is:
    - `includeContinuous` {{optional_inline}}
      - : A boolean, which is `false` by default. If set to `true`, it indicates that continuous events should be considered when checking for pending input. Continuous events are trusted events (events dispatched by the browser) that are fired successively, such as {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("HTMLElement/drag_event", "drag")}}, {{domxref("Element/pointermove_event", "pointermove")}}, and {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}}.

### Return value

A boolean that indicates whether there are pending input events in the event queue (`true`) or not (`false`).

## Examples

We can use `isInputPending()` inside a task runner structure to run the `yield()` function only when the user is attempting to interact with the page:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  while (tasks.length > 0) {
    // Yield to a pending user input
    if (navigator.scheduling.isInputPending()) {
      await yield();
    } else {
      // Shift the first task off the tasks array
      const task = tasks.shift();

      // Run the task
      task();
    }
  }
}
```

This allows you to avoid blocking the main thread when the user is actively interacting with the page, potentially providing a smoother user experience. However, by only yielding when necessary, we can continue running the current task when there are no user inputs to process. This also avoids tasks being placed at the back of the queue behind other non-essential browser-initiated tasks that were scheduled after the current one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Scheduler")}} interface
- {{domxref("Prioritized_task_scheduling_api", "Prioritized Task Scheduling API", "", "nocode")}}
- [Faster input events with Facebook's first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) on engineering.fb.com (2019)
- [Better JS scheduling with isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) on developer.chrome.com (2020)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks#yield_only_when_necessary) on web.dev (2022)
