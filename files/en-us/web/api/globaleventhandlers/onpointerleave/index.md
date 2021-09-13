---
title: GlobalEventHandlers.onpointerleave
slug: Web/API/GlobalEventHandlers/onpointerleave
tags:
  - API
  - GlobalEventHandlers
  - HTML DOM
  - NeedsBrowserCompatibility
  - Pointer Events
  - PointerEvent
  - Property
  - Reference
  - onpointerleave
browser-compat: api.GlobalEventHandlers.onpointerleave
---
{{APIRef("HTML DOM")}}

The {{domxref("GlobalEventHandlers","global event handler",
    "", 1)}} for the {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} event,
which is delivered to a {{domxref("Node")}} when the pointer (mouse cursor, fingertip,
etc.) exits its hit test area (for example, if the cursor exits an
{{domxref("Element")}} or {{domxref("Window")}}'s content area). This event is part of
the [Pointer Events API](/en-US/docs/Web/API/Pointer_events).

## Syntax

```js
EventTarget.onpointerleave = leaveHandler;

var leaveHandler = EventTarget.onpointerleave;
```

### Value

- `leaveHandler`
  - : The {{domxref("EventListener")}} which will be invoked to handle
    {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} events sent to the
    target.

## Example

This example shows two ways to use `onpointerleave` to set an element's
`pointerleave` event handler.

```js
<html>
<script>
function leaveHandler(ev) {
 // Process the pointerleave event
}
function init() {
 var el=document.getElementById("target1");
 el.onpointerleave = leaveHandler;
}
</script>
<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" onpointerleave="leaveHandler(event)"> Touch me ... </div>
</body>
</html>
```

See [Using Pointer
Events](/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events) for additional details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Pointer events](/en-US/docs/Web/API/Pointer_events)
- [Using pointer
  events](/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events)
- [`Document: pointerleave`](/en-US/docs/Web/API/Document/pointerleave_event)
  event
- [`HTMLElement: pointerleave`](/en-US/docs/Web/API/HTMLElement/pointerleave_event)
  event
