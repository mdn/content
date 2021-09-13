---
title: GlobalEventHandlers.ontouchstart
slug: Web/API/GlobalEventHandlers/ontouchstart
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.ontouchstart
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

The **`ontouchstart`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{domxref("Element/touchstart_event", "touchstart")}} events.

## Syntax

```js
var startHandler = someElement.ontouchstart;
```

### Return value

- `startHandler`
  - : The `touchstart` event handler for element `someElement`.

## Example

This example shows two ways to use `ontouchstart` to set an element's
`touchstart` event handler.

```js
<html>
<script>
function startTouch(ev) {
  // Process the event
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchstart = startTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchstart="startTouch(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/touchstart_event", "touchstart")}}
