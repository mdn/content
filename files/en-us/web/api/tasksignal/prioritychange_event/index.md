---
title: "TaskSignal: prioritychange event"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
page-type: web-api-event
browser-compat: api.TaskSignal.prioritychange_event
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **`prioritychange`** event is sent to a {{domxref('TaskSignal')}} if its [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) is changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("prioritychange", (event) => {});

onprioritychange = (event) => {};
```

## Event type

A {{domxref("TaskPriorityChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Event properties

- {{domxref('TaskPriorityChangeEvent.previousPriority')}}
  - : Indicates the previous priority of the task (before it was changed).
    The new/updated priority is read from `event.target.priority` ([`TaskSignal.priority`](/en-US/docs/Web/API/TaskSignal/priority)).

## Examples

The example below shows how to listen for the `prioritychange` event on a {{domxref("TaskSignal")}}.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

First we create a controller, and add an event listener to its signal.
When handling the event we use {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} on the event to get the original priority and {{domxref("TaskSignal.priority")}} on the event target to get the new/current priority.

The task is then posted, passing in the signal, and then we immediately change the priority.

```js
if ("scheduler" in this) {
  // Declare a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    myLog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(
    () => {
      myLog("Task 1");
    },
    { signal: controller.signal },
  );

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

> [!NOTE]
> The code above uses a custom logging function `myLog()` to log to the text area below.
> This is hidden as it isn't relevant to the example.

The output below demonstrates shows that the [task's priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) changed from `user-blocking` to `background`.
This happens before the task is executed, but could also happen when the task is running.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
