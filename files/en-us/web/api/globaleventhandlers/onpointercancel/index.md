---
title: GlobalEventHandlers.onpointercancel
slug: Web/API/GlobalEventHandlers/onpointercancel
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointercancel
---
{{ApiRef("HTML DOM")}}

The **`onpointercancel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("pointercancel")}} events.

## Syntax

```js
targetElement.onpointercancel = cancelHandler;

var cancelHandler = targetElement.onpointercancel;
```

### Value

- `cancelHandler`
  - : The `pointercancel` event handler for element `targetElement`.

## Example

This example shows two ways to use `onpointercancel` to handle an element's
`pointercancel` events.

```js
<html>
<script>
function cancelHandler(ev) {
  // Process the pointercancel event
}
function init() {
  var el = document.getElementById('target1');
  el.onpointercancel = cancelHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointercancel="cancelHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointercancel`](/en-US/docs/Web/API/Document/pointercancel_event)
  event
- [`HTMLElement: pointercancel`](/en-US/docs/Web/API/HTMLElement/pointercancel_event)
  event
