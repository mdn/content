---
title: GlobalEventHandlers.onpointermove
slug: Web/API/GlobalEventHandlers/onpointermove
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - PointerEvent
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpointermove
---
{{ApiRef("HTML DOM")}}

The **`onpointermove`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("pointermove")}} events.

## Syntax

```js
targetElement.onpointermove = moveHandler;

var moveHandler = targetElement.onpointermove;
```

### Value

- `moveHandler`
  - : The `pointermove` event handler for element
    `targetElement`.

## Example

This example shows two ways to use `onpointermove` to set an element's
`pointermove` event handler.

```js
<html>
<script>
function moveHandler(ev) {
  // Process the pointermove event
}
function init() {
  let el=document.getElementById('target1');
  el.onpointermove = moveHandler;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" onpointermove="moveHandler(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`Document: pointermove`](/en-US/docs/Web/API/Document/pointermove_event)
  event
- [`HTMLElement: pointermove`](/en-US/docs/Web/API/HTMLElement/pointermove_event)
  event
