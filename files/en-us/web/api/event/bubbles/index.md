---
title: Event.bubbles
slug: Web/API/Event/bubbles
tags:
  - API
  - Bubbling
  - DOM
  - DOM Events
  - Event
  - Event Handling
  - Propagation
  - Property
  - Read-only
  - Reference
  - bubbles
browser-compat: api.Event.bubbles
---
{{ ApiRef("DOM") }}

The **`bubbles`** read-only property of the {{domxref("Event")}} interface indicates whether the event bubbles up through the DOM or not.

> **Note:** See [Event bubbling and capture](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) for more information on bubbling.

## Syntax

```js
var doesItBubble = event.bubbles;
```

### Value

A boolean value, which is `true` if the event bubbles up through the DOM.

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

> **Note:** Only certain events can bubble. Events that do bubble have this property set to `true`. You can use this property to check if an event is allowed to bubble or not.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event.stopPropagation", "stopPropagation()")}} to prevent further propagation of the current event in the capturing and bubbling phases
- {{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} to not call any further listeners for the same event at the same level in the DOM
- {{domxref("Event.preventDefault", "preventDefault()")}} to allow propagation to continue but to disallow the browser to perform its default action should no listeners handle the event
