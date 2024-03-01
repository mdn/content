---
title: "Event: cancelable property"
short-title: cancelable
slug: Web/API/Event/cancelable
page-type: web-api-instance-property
browser-compat: api.Event.cancelable
---

{{ ApiRef("DOM") }}

The **`cancelable`** read-only property of the {{domxref("Event")}} interface indicates whether the event
can be canceled, and therefore prevented as if the event never happened.

If the event is _not_ cancelable, then its `cancelable` property will be
`false` and the event listener cannot stop the event from occurring.

Most browser-native events that can be canceled are the ones that result from the user
interacting with the page. Canceling the {{domxref("Element/click_event", "click")}},
{{domxref("Element/wheel_event", "wheel")}}, or
{{domxref("Window/beforeunload_event", "beforeunload")}} events would prevent the user
from clicking on something, scrolling the page with the mouse wheel, or
navigating away from the page, respectively.

[Synthetic events](/en-US/docs/Web/API/Event/Event) created by other JavaScript
code define if they can be canceled when they are created.

To cancel an event, call the {{domxref("event.preventDefault", "preventDefault()")}}
method on the event. This keeps the implementation from executing the default action
that is associated with the event.

Event listeners that handle multiple kinds of events may want to check
`cancelable` before invoking their {{domxref("event.preventDefault", "preventDefault()")}} methods.

## Value

A boolean value, which is `true` if the event can be
canceled.

## Example

For example, browser vendors are proposing that the {{domxref("Element/wheel_event", "wheel")}}
event can only be canceled [the first time the listener is called](https://github.com/WICG/interventions/issues/33) — any following `wheel` events cannot be
canceled.

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener("wheel", preventScrollWheel);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
