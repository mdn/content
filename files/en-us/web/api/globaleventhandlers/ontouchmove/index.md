---
title: GlobalEventHandlers.ontouchmove
slug: Web/API/GlobalEventHandlers/ontouchmove
tags:
  - API
  - Experimental
  - HTML DOM
  - Reference
browser-compat: api.GlobalEventHandlers.ontouchmove
---
{{ApiRef("HTML DOM")}}

A {{domxref("GlobalEventHandlers","global event handler")}} for the {{event("touchmove")}} event.

{{SeeCompatTable}}

## Syntax

```js
var moveHandler = someElement.ontouchmove;
```

### Return value

- `moveHandler`
  - : The _touchmove_ event handler for element `someElement`.

## Example

This example shows two ways to use _ontouchmove_ to set an element's _touchmove_ event handler.

```js
<html>
<head>
<script>

function moveTouch(ev) {
 // Process the event
}

function init() {
 var el=document.getElementById("target1");
 el.ontouchmove = moveTouch;
}

</script>
</head>

<body onload="init();">
<div id="target1"> Touch me ... </div>
<div id="target2" ontouchmove="moveTouch(event)"> Touch me ... </div>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("touchmove") }}
