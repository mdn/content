---
title: EventTarget.dispatchEvent()
slug: Web/API/EventTarget/dispatchEvent
tags:
  - API
  - DOM
  - DOM Element Methods
  - Gecko
  - Method
browser-compat: api.EventTarget.dispatchEvent
---
{{APIRef("DOM Events")}}

Dispatches an {{domxref("Event")}} at the specified
{{domxref("EventTarget")}}, (synchronously) invoking the affected
{{domxref("EventListener")}}s in the appropriate order. The normal event processing
rules (including the capturing and optional bubbling phase) also apply to events
dispatched manually with `dispatchEvent()`.

## Syntax

```js
cancelled = !target.dispatchEvent(event)
```

### Parameter

- `event` is the {{domxref("Event")}} object to be dispatched.
- `target` is used to initialize the {{domxref("Event.target")}}
  and determine which event listeners to invoke.

### Return Value

- The return value is `false` if `event` is
  cancelable and at least one of the event handlers which received
  `event` called {{domxref("Event.preventDefault()")}}. Otherwise
  it returns `true`.

The `dispatchEvent()` method throws `UNSPECIFIED_EVENT_TYPE_ERR`
if the event's type was not specified by initializing the event before the method was
called, or if the event's type is `null` or an empty string.

### Exceptions

Exceptions thrown by event handlers are reported as uncaught exceptions. The event
handlers run on a nested callstack; they block the caller until they complete, but
exceptions do not propagate to the caller.

## Notes

Unlike "native" events, which are fired by the DOM and invoke event handlers
asynchronously via the [event loop](/en-US/docs/Web/JavaScript/EventLoop),
`dispatchEvent()` invokes event handlers synchronously. All applicable event
handlers will execute and return before the code continues on after the call to
`dispatchEvent()`.

`dispatchEvent()` is the last step of the create-init-dispatch process,
which is used for dispatching events into the implementation's event model. The event
can be created using [Event constructor](/en-US/docs/Web/API/Event/Event).

See also the [Event object reference](/en-US/docs/Web/API/Event).

## Example

See [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
