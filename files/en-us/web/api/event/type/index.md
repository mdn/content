---
title: Event.type
slug: Web/API/Event/type
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Reference
browser-compat: api.Event.type
---
{{APIRef}}

The **`type`** read-only property of the {{domxref("Event")}}
interface returns a string containing the event's type. It is set when the event is
constructed and is the name commonly used to refer to the specific event, such as
`click`, `load`, or `error`.

## Value

A string containing the type of {{domxref("Event")}}.

## Example

This example logs the event type whenever you press a keyboard key or click a mouse
button.

### HTML

```html
<p>Press any key or click the mouse to get the event type.</p>
<p id="log"></p>
```

### JavaScript

```js
function getEventType(event) {
  const log = document.getElementById('log');
  log.innerText = `${event.type}\n${log.innerText}`;
}

// Keyboard events
document.addEventListener('keydown', getEventType, false);  // first
document.addEventListener('keypress', getEventType, false); // second
document.addEventListener('keyup', getEventType, false);    // third

// Mouse events
document.addEventListener('mousedown', getEventType, false); // first
document.addEventListener('mouseup', getEventType, false);   // second
document.addEventListener('click', getEventType, false);     // third
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("EventTarget.addEventListener()") }}
- {{ domxref("EventTarget.removeEventListener()") }}
