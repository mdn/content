---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.EventTarget.dispatchEvent
---
{{APIRef("DOM")}}

The **`dispatchEvent()`** method of the {{domxref("EventTarget")}} sends an {{domxref("Event")}} to the object, (synchronously) invoking the affected
{{domxref("EventListener")}}s in the appropriate order. The normal event processing
rules (including the capturing and optional bubbling phase) also apply to events
dispatched manually with `dispatchEvent()`.

Calling `dispatchEvent()` is the last step to _firing an event_. The event
should have already been created and initialized using an {{domxref("Event/Event", "Event()")}} constructor.

> **Note:** When calling this method, the {{domxref("Event.target")}} property is initialized to the current `EventTarget`.

Unlike "native" events, which are fired by the browser and invoke event handlers
asynchronously via the [event loop](/en-US/docs/Web/JavaScript/EventLoop),
`dispatchEvent()` invokes event handlers _synchronously_. All applicable event
handlers are called and return before `dispatchEvent()` returns.

## Syntax

```js
dispatchEvent(event)
```

### Parameter

- `event`
  - : The {{domxref("Event")}} object to dispatch. Its {{domxref("Event.target")}} property will be set to the current {{domxref("EventTarget")}}.

### Return value

`false` if `event` is cancelable, and at least one of the event handlers which received `event` called {{domxref("Event.preventDefault()")}}. Otherwise `true`.

### Exceptions

- `InvalidStateError` {{domxref("DomException")}}
  - : Thrown if the event's type was not specified during event initialization.

> **Warning:** Exceptions thrown by event handlers are reported as uncaught exceptions. The event
> handlers run on a nested callstack; they block the caller until they complete, but
> exceptions do not propagate to the caller.

## Example

See [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [Event object reference](/en-US/docs/Web/API/Event)
