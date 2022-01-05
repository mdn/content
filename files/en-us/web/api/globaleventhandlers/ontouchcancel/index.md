---
title: GlobalEventHandlers.ontouchcancel
slug: Web/API/GlobalEventHandlers/ontouchcancel
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.ontouchcancel
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

The **`ontouchcancel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("touchcancel")}} events.

## Syntax

```js
var cancelHandler = someElement.ontouchcancel;
```

### Return value

- `cancelHandler`
  - : The `touchcancel` event handler for element
    `someElement`.

## Example

This example shows two ways to use `ontouchcancel` to set an element's
`touchcancel` event handler.

```js
<html>
<script>
function cancelTouch(ev) {
  // Process the event
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchcancel = cancelTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchcancel="cancelTouch(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("touchcancel") }}
