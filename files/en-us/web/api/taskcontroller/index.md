---
title: TaskController
slug: Web/API/TaskController
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - TaskController
browser-compat: api.TaskController
---
{{APIRef("Prioritized Task Scheduling API")}}

The **`TaskController`** interface of the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) represents a controller object that can be used to both abort and change the [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of one or more prioritized tasks.
If there is no need to change task priorities, then {{domxref("AbortController")}} can be used instead.

A new `TaskController` instance is created using the {{domxref("TaskController.TaskController()", "TaskController()")}} constructor, optionally specifying a [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) for its associated signal (a {{domxref("TaskSignal")}}).
If not specified, the signal will have a priority of [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) by default.

The controller's signal can be passed as an argument to the {{domxref("Scheduler.postTask()")}} method for one or more tasks.
For [mutable tasks](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (only) the task is initialized with the signal priority, and can later be changed by calling {{domxref('TaskController.setPriority()')}}.
For immutable tasks, any priority initialized or set by the controller is ignored.

Tasks can be aborted by calling {{domxref("AbortController.abort()","abort()")}} on the controller.

{{InheritanceDiagram}}

## Constructor

- {{domxref("TaskController.TaskController", "TaskController()")}}
  - : Creates a new `TaskController` object, optionally specifying the priority of its associated [`signal`](#taskcontroller.signal).

## Methods

_This interface also inherits the methods of its parent, {{domxref("AbortController")}}._

- {{domxref('TaskController.setPriority()')}}
  - : Sets the priority of the controller's [`signal`](#taskcontroller.signal), and hence the priority of any tasks with which it is associated.
    This notifies observers of the priority change by dispatching a [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) event.

## Properties

_This interface also inherits the properties of its parent, {{domxref("AbortController")}}._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Returns a {{domxref("TaskSignal")}} object instance.
    The signal is passed to tasks so that they can be aborted or re-prioritized by the controller.
    The property is inherited from [`AbortController`](/en-US/docs/Web/API/AbortController#abortcontroller.signal).

## Examples

> **Note:** Additional "live" examples can be found in:  [Prioritized Task Scheduling API > Examples](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

First we create a task controller, setting the priority of its associated signal to `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({priority: 'user-blocking'});
```

We then add an event listener for [`prioritychange`](/en-US/docs/Web/API/TaskSignal/prioritychange_event) events (here `addEventListener()` is called, but we could instead assign a handler to `TaskSignal.onprioritychange`).
The handler uses [previousPolicy](/en-US/docs/Web/API/TaskPriorityChangeEvent/previousPriority) on the event to get the original priority and {{domxref("TaskSignal.priority")}} on the event target to get the new priority.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener('prioritychange', (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

We can also listen for [`abort`](/en-US/docs/Web/API/AbortSignal/abort_event) events as shown below.
This same approach would be used if the controller was an `AbortController`.

```js
controller.signal.addEventListener('abort', (event) => {
  console.log('Task aborted');
});
```

Next we post the task, passing the controller signal in the optional argument.
In this case the task is just an arrow function that resolves the promise by returning some text.
We use `then` and `catch` to handle when the task resolves or is rejected, logging the return text or the error in each case.
Note that in a later code block we abort the task, so only the `catch()` block will actually be run!

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => 'Task execute', {signal: controller.signal})
  .then((taskResult) => { console.log(`${taskResult}`); }) // Aborted (wont run)
  .catch((error) => { console.log(`Catch error: ${error}`); });  // Log error
```

We can use the controller to manage the task.
Here we can change the priority using {{domxref('TaskController.setPriority()')}}.
This will trigger the associated `prioritychange` event.

```js
// Change the priority to 'background' using the controller
controller.setPriority('background');
```

Finally, the task can be aborted by calling {{domxref("AbortController.abort()","abort()")}} on the controller.

```js
// Abort the task
controller.abort();
```

The console output of this example would be:

```
The priority changed from user-blocking to background.
Task aborted
Catch error: AbortError
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
