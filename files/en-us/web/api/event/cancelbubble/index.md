---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
tags:
  - API
  - DOM
  - Event
  - Property
  - Reference
  - cancelBubble
browser-compat: api.Event.cancelBubble
---
{{APIRef("DOM Events")}}

The **`cancelBubble`** property of the {{domxref("Event")}}
interface is a historical alias to {{domxref("Event.stopPropagation()")}}. Setting its
value to `true` before returning from an event handler prevents propagation
of the event. In later implementations, setting this to `false` does nothing.
See {{anch("Browser compatibility")}} for details.

## Syntax

```js
event.cancelBubble = bool;
var bool = event.cancelBubble;
```

### Value

Either `true` or `false`.

## Example

```js
elem.onclick = function(event) {
  // Do cool things here
  event.cancelBubble = true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
