---
title: GlobalEventHandlers.onpointerout
slug: Web/API/GlobalEventHandlers/onpointerout
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointerout
---
{{ApiRef("HTML DOM")}}

The **`onpointerout`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("pointerout")}} events.

## Syntax

```js
targetElement.onpointerout = outHandler;

var outHandler = targetElement.onpointerout;
```

### Value

- `outHandler`
  - : The `pointerout` event handler for element `targetElement`.

## Example

This example shows two ways to use `onpointerout` to set an element's
`pointerout` event handler.

```js
<html>
<script>
function outHandler(ev) {
  // Process the pointerout event
}
function init() {
  let el=document.getElementById('target1');
  el.onpointerout = outHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerout="outHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointerout`](/en-US/docs/Web/API/Document/pointerout_event)
  event
- [`HTMLElement: pointerout`](/en-US/docs/Web/API/HTMLElement/pointerout_event)
  event
