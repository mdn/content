---
title: GlobalEventHandlers.onpointerup
slug: Web/API/GlobalEventHandlers/onpointerup
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointerup
---
{{ApiRef("HTML DOM")}}

The **`onpointerup`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("pointerup")}} events.

## Syntax

```js
targetElement.onpointerup = upHandler;

var upHandler = targetElement.onpointerup;
```

### Value

- `upHandler`
  - : The `pointerup` event handler for element `targetElement`.

## Example

This example shows two ways to use `onpointerup` to set an element's
`pointerup` event handler.

```js
<html>
<script>
function upHandler(ev) {
  // Process the pointerup event
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerup = upHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerup="upHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointerup`](/en-US/docs/Web/API/Document/pointerup_event)
  event
- [`HTMLElement: pointerup`](/en-US/docs/Web/API/HTMLElement/pointerup_event)
  event
