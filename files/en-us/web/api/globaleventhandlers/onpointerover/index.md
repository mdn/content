---
title: GlobalEventHandlers.onpointerover
slug: Web/API/GlobalEventHandlers/onpointerover
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointerover
---
{{ApiRef("HTML DOM")}}

The **`onpointerover`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("pointerover")}} events.

## Syntax

```js
targetElement.onpointerover = overHandler;

var overHandler = targetElement.onpointerover;
```

### Value

- `overHandler`
  - : The `pointerover` event handler for element
    `targetElement`.

## Example

This example shows two ways to use `onpointerover` to set an element's
`pointerover` event handler.

```js
<html>
<script>
function overHandler(ev) {
  // Process the pointerover event
}
function init() {
  let el = document.getElementById('target1');
  el.onpointerover = overHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointerover="overHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointerover`](/en-US/docs/Web/API/Document/pointerover_event)
  event
- [`HTMLElement: pointerover`](/en-US/docs/Web/API/HTMLElement/pointerover_event)
  event
