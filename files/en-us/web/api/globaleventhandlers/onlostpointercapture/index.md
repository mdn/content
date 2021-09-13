---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/GlobalEventHandlers/onlostpointercapture
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - events
  - onlostpointercapture
browser-compat: api.GlobalEventHandlers.onlostpointercapture
---
{{ApiRef("HTML DOM")}}

The **`onlostpointercapture`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("lostpointercapture")}} events.

## Syntax

```js
target.onlostpointercapture = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("PointerEvent")}} object as its sole
argument.

## Example

```js
function overHandler(event) {
  // Determine the target event's lostpointercapture handler
  let lostCaptureHandler = event.target.onlostpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.onlostpointercapture = overHandler;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: lostpointercapture`](/en-US/docs/Web/API/Document/lostpointercapture_event)
  event
- [`HTMLElement: lostpointercapture`](/en-US/docs/Web/API/HTMLElement/lostpointercapture_event)
  event
- {{domxref("Element.releasePointerCapture()")}}
