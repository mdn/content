---
title: Event.bubbles
slug: Web/API/Event/bubbles
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.bubbles
---
{{ ApiRef("DOM") }}

The **`bubbles`** read-only property of the {{domxref("Event")}} interface indicates whether the event bubbles up through the DOM tree or not.

> **Note:** See [Event bubbling and capture](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) for more information on bubbling.

## Value

A boolean value, which is `true` if the event bubbles up through the DOM tree.

## Example

```js
function handleInput(e) {
  // Checks whether the event bubbles and ...
  if (!e.bubbles) {
    // ... passes the event along if does not
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
