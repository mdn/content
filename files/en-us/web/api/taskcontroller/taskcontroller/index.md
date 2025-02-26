---
title: "TaskController: TaskController() constructor"
short-title: TaskController()
slug: Web/API/TaskController/TaskController
page-type: web-api-constructor
browser-compat: api.TaskController.TaskController
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

The **`TaskController()`** constructor creates a new {{domxref("TaskController")}} object, optionally setting the initial [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of its associated [`signal`](/en-US/docs/Web/API/TaskController#taskcontroller.signal).

If no priority is set, the signal priority defaults to [`user-visible`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible)

## Syntax

```js-nolint
new TaskController()
new TaskController(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `priority` {{optional_inline}}
      - : The [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the signal associated with this `TaskController`.
        One of: `"user-blocking"`, `"user-visible"` (default), `"background"`.

## Examples

This code shows how to construct a task controller that has a signal with default priority (`user-visible`).

```js
const controller = new TaskController();
```

To construct a task controller that has a specific signal priority, pass the `priority` as a property of the optional argument.

```js
controller2 = new TaskController({ priority: "user-blocking" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
