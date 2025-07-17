---
title: "Event: bubbles property"
short-title: bubbles
slug: Web/API/Event/bubbles
page-type: web-api-instance-property
browser-compat: api.Event.bubbles
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`bubbles`** read-only property of the {{domxref("Event")}} interface indicates whether the event bubbles up through the DOM tree or not.

> [!NOTE]
> See [Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) for more information on bubbling.

## Value

A boolean value, which is `true` if the event bubbles up through the DOM tree.

## Example

```js
function handleInput(e) {
  // Check whether the event bubbles passes the event along
  if (!e.bubbles) {
    passItOn(e);
  }

  // Already bubbling
  doOutput(e);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event.stopPropagation", "stopPropagation()")}} to prevent further propagation of the current event in the capturing and bubbling phases
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} to not call any further listeners for the same event at the same level in the DOM
- {{domxref("Event.preventDefault", "preventDefault()")}} to allow propagation to continue but to disallow the browser to perform its default action should no listeners handle the event
