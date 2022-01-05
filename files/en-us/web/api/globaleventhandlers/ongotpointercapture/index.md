---
title: GlobalEventHandlers.ongotpointercapture
slug: Web/API/GlobalEventHandlers/ongotpointercapture
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - events
  - ongotpointercapture
browser-compat: api.GlobalEventHandlers.ongotpointercapture
---
{{ApiRef("HTML DOM")}}

The **`ongotpointercapture`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("gotpointercapture")}} events.

## Syntax

```js
target.ongotpointercapture = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("PointerEvent")}} object as its sole
argument.

## Example

```js
function overHandler(event) {
  // Determine the target event's gotpointercapture handler
  let gotCaptureHandler = event.target.ongotpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.ongotpointercapture = overHandler;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: gotpointercapture`](/en-US/docs/Web/API/Document/gotpointercapture_event)
  event
- [`HTMLElement: gotpointercapture`](/en-US/docs/Web/API/HTMLElement/gotpointercapture_event)
  event
- {{domxref("Element.setPointerCapture()")}}
