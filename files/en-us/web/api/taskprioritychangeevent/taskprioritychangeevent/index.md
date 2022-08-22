---
title: TaskPriorityChangeEvent()
slug: Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - TaskPriorityChangeEvent
  - Prioritized Task Scheduling API
browser-compat: api.TaskPriorityChangeEvent.TaskPriorityChangeEvent
---
{{APIRef("Prioritized Task Scheduling API")}}

The **`TaskPriorityChangeEvent()`** constructor creates a new {{domxref("TaskPriorityChangeEvent")}} object.

This object is created with a value indicating the [previous priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the task: the priority before it changed and this event was fired.

## Syntax

```js
new TaskPriorityChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the case-sensitive name of the associated event.
    User agents set it to `"prioritychange"`.

- `options`

  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:

    - `previousPriority`
      - : A string indicating the _previous_ [priority](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) of the task.
        One of: [`"user-blocking"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
