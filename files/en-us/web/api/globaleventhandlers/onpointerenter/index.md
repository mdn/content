---
title: GlobalEventHandlers.onpointerenter
slug: Web/API/GlobalEventHandlers/onpointerenter
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointerenter
---
{{ApiRef("HTML DOM")}}

The **`onpointerenter`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} events.

## Syntax

```js
targetElement.onpointerenter = enterHandler;

var enterHandler = targetElement.onpointerenter;
```

### Value

- `enterHandler`
  - : The `pointerenter` event handler for element `targetElement`.

## Example

This example shows two ways to use `onpointerenter` to set an element's
`pointerenter` event handler.

```html
<html>
<script>
function enterHandler(ev) {
  // Process the pointerenter event
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerenter = enterHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerenter="enterHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointerenter`](/en-US/docs/Web/API/Document/pointerenter_event)
  event
- [`HTMLElement: pointerenter`](/en-US/docs/Web/API/HTMLElement/pointerenter_event)
  event
