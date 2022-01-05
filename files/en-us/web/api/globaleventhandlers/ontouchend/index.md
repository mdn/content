---
title: GlobalEventHandlers.ontouchend
slug: Web/API/GlobalEventHandlers/ontouchend
tags:
  - API
  - Experimental
  - HTML DOM
  - Reference
  - TouchEvent
browser-compat: api.GlobalEventHandlers.ontouchend
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

The **`ontouchstart`** is a
{{domxref("GlobalEventHandlers","global event handler", "", 1)}} for the
{{event("touchend")}} event.

## Syntax

```js
var endHandler = targetElement.ontouchend;
```

### Return value

- `endHandler`
  - : The `touchend` event handler for element
    `targetElement`.

## Example

This example shows two ways to use `ontouchend` to set an element's
`touchend` event handler.

```js
<html>
<script>
function endTouch(ev) {
  // Process the event
}
function init() {
  let el = document.getElementById('target1');
  el.ontouchend = endTouch;
}
</script>

<body onload="init();">
  <div id="target1"> Touch me ... </div>
  <div id="target2" ontouchend="endTouch(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("touchend") }}
